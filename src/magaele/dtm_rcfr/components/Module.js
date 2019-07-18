import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import cx from 'classnames';
import NtbRcln, { Tab } from '../../ntb_rcln';
import CrRcln from '../../cr_rcln';
import IcRcln from '../../ic_rcln';
import '../css.scss';

const dataMap = {};

const SecAll = (props) => {
    const {
        onClick,
        isSelected = false,
        text,
    } = props;

    return (
        <span
            className={cx('sec_all', {
                active: isSelected,
            })}
            onClick={onClick}
        >
            {text}
            {
                isSelected ? <IcRcln name="toolchoose" /> : null
            }
        </span>
    );
};

const Item = (props) => {
    const {
        onClick,
        isSelected = false,
        text,
    } = props;
    return (
        <span
            className={cx('item', {
                active: isSelected,
            })}
            onClick={onClick}
        >
            {text}
            {
                isSelected ? <IcRcln name="toolchoose" /> : null
            }
        </span>
    );
};

const SecContent = (props) => {
    const {
        title,
        data,
        parents,
        replaceRegular,
        onClickItem,
        levelKey,
        selectedData,
        dataSource,
    } = props;

    const keys = Object.keys(data);
    // 此層的全選是否可以點選
    const titleIsClickable = keys.indexOf('_') !== -1;
    const parentValue = parents.join('-');
    const dataObj = {};
    const lastKey = levelKey[levelKey.length - 1];
    // 此層全選的value
    const allValue = `${parentValue}-_`;

    // 把parentKey跟levelKey轉換成Object送出
    for (let i = 0, _length = parents.length; i < _length; i++) {
        const key = levelKey[i];
        const parentKey = parents[i];
        dataObj[key] = parentKey;
        if (i === 0) {
            dataObj[`${key}Text`] = dataSource[key][parentKey];
        } else {
            const _parent = parents[i - 1];
            dataObj[`${key}Text`] = dataSource[key][_parent][parentKey];
        }
    }

    return (
        <div className="sec">
            <div className="sec_title">
                <SecAll
                    isSelected={selectedData.indexOf(allValue) !== -1}
                    onClick={() => {
                        if (!titleIsClickable) return;
                        const sendData = {
                            ...dataObj,
                            text: `${title}全部`,
                            value: allValue,
                            [lastKey]: '_',
                        };
                        onClickItem(sendData);
                    }}
                    text={title}
                />
            </div>
            <div className="sec_content">
                {
                    keys.map(v => {
                        if (v === '_') return null;
                        const showText = data[v];
                        const value = `${parentValue}-${v}`;
                        const sendData = {
                            ...dataObj,
                            text: showText,
                            value,
                            [lastKey]: v,
                        };
                        const isSelected = selectedData.indexOf(value) !== -1;
                        return (
                            <Item
                                key={v}
                                onClick={() => { onClickItem(sendData) }}
                                isSelected={isSelected}
                                text={showText.replace(replaceRegular, '')}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

class Module extends Component {
    static defaultProps = {
        selectedData: [],
        orderMaps: {},
    };
    static propTypes = {
        levelKey: PropTypes.array.isRequired,
        onClickItem: PropTypes.func,
        replaceRegular: PropTypes.instanceOf(RegExp), // 傳正規表達式規則過濾不要的字串
        selectedData: PropTypes.array, // 傳選取的item的value, 若為多筆則陣列長度大於1
        // 模組使用的資料格式是統一的
        // 若是fetch回來的資料不符合模組使用的格式，必須使用此prop來轉換
        // 若有傳此prop，資料fetch後會先轉換再存起來給模組使用
        // 此方法必須retrun轉換後的data物件給模組使用
        transformFetchData: PropTypes.func,
        // 傳一個maps告訴dtm各層key的render順序
        orderMaps: PropTypes.object,
    };

    constructor (props) {
        super(props);
        this.dataSource = null;
    }

    componentDidMount () {
        const {
            dataResouce,
            transformFetchData,
        } = this.props;

        const data = dataMap[dataResouce];
        // 如果沒有data就發fetch
        if (typeof data === 'undefined') {
            if (typeof dataResouce === 'string') {
                fetch(dataResouce)
                    .then(r => {
                        const contentType = r.headers.get('content-type');
                        if (contentType && contentType.indexOf('json') !== -1) {
                            return r.json();
                        } else if (contentType && contentType.indexOf('javascript') !== -1) {
                            return r.text();
                        } else {
                            throw new TypeError('Response from "' + dataResouce + '" has unexpected "content-type"');
                        }
                    })
                    .then(d => {
                        let newD;
                        if (d[0] === '{') {
                            newD = typeof d === 'string' ? JSON.parse(d) : d;
                        } else {
                            newD = d;
                        }

                        let data = newD;
                        if (typeof transformFetchData === 'function') data = transformFetchData(newD);
                        dataMap[dataResouce] = data;
                        this.dataSource = data;
                        this.forceUpdate();
                    });
            } else {
                this.dataSource = dataResouce;
                this.forceUpdate();
            }
        } else {
            this.dataSource = data;
            this.forceUpdate();
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        const {
            selectedData,
        } = this.props;

        const newSelected = nextProps.selectedData;

        // 若selectedData都一樣 就不重新render
        if (selectedData.sort().toString() === newSelected.sort().toString()) return false;

        return true;
    }

    _render (parentArray) {
        const {
            dataSource,
        } = this;
        const {
            levelKey,
            selectedData,
            orderMaps,
        } = this.props;

        const levelKeyLength = levelKey.length;
        // 若keyNum為0 表示是最頂層的物件
        const keyNum = parentArray.length;
        // 取上一層parent的值
        const parentKey = parentArray[parentArray.length - 1];
        const key = levelKey[keyNum];
        // 不是頂層物件,就要再傳parentKey查找
        const dataObj = (keyNum === 0) ? dataSource[key] : dataSource[key][parentKey];
        const customKeys = (keyNum === 0) ? orderMaps[key]
            : (orderMaps[key]) ? orderMaps[key][parentKey] : null;
        // 若有自訂render順序的陣列就使用, 沒有就用Object keys自己轉
        const keys = Array.isArray(customKeys) ? customKeys : Object.keys(dataObj);
        // 是否要render最後一層選單了, 如果不是就遞迴render
        const isLast = (levelKeyLength - keyNum <= 3);
        // 如果已經最後一層className為'one_floor'
        const classList = isLast ? 'one_floor' : 'search_panel_two';

        return (
            <NtbRcln customClass={classList}>
                {
                    keys.map(v => {
                        const parents = [...parentArray, v];
                        // 是否有children被選取
                        const isChildrenSelected = selectedData.filter(selectedItem => {
                            const arr = selectedItem.split('-');
                            return arr.indexOf(v) !== -1;
                        }).length > 0;
                        return (
                            <Tab
                                key={v}
                                label={dataObj[v]}
                                dot={isChildrenSelected}
                            >
                                {
                                    isLast ?
                                        this._renderLast(parents) :
                                        this._render(parents)
                                }
                            </Tab>
                        );
                    })
                }
            </NtbRcln>
        );
    }

    // 剩最後兩層的levelKey的render方法
    _renderLast (parentArray) {
        const {
            dataSource,
        } = this;
        const {
            levelKey,
            replaceRegular,
            onClickItem,
            selectedData,
            orderMaps,
        } = this.props;
        const levelKeyLength = levelKey.length;
        const parentKey = parentArray[parentArray.length - 1];
        // 取出倒數第二層的key
        const key = levelKey[levelKeyLength - 2];
        // 取出最後一層key
        const lastKey = levelKey[levelKeyLength - 1];
        const dataObj = dataSource[key][parentKey];
        const customKeys = orderMaps[key] ? orderMaps[key][parentKey] : null;
        // 若有自訂render順序的陣列就使用, 沒有就用Object keys自己轉
        const keys = Array.isArray(customKeys) ? customKeys : Object.keys(dataObj);

        return keys.map(v => {
            const parents = [...parentArray, v];
            if (v === '_') {
                const sendData = {};

                // 把parentKey跟levelKey轉換成Object送出
                for (let i = 0, _length = levelKey.length; i < _length; i++) {
                    const key = levelKey[i];
                    sendData[key] = parentArray[i] ? parentArray[i] : '_';
                }

                const k = levelKey[levelKeyLength - 3];
                const value = `${parents.join('-')}-${v}`;
                // 是否selectedAll
                const isSelected = selectedData.indexOf(value) !== -1;
                // 全區字串
                const allTxt = dataSource[k][parentKey] + '全區';
                sendData.value = value;
                sendData.text = allTxt;

                return (
                    <div className="all_wrap" key={v}>
                        <CrRcln
                            type="checkbox"
                            textContent={allTxt}
                            whenChange={() => {
                                onClickItem(sendData);
                            }}
                            checked={isSelected}
                        />
                    </div>
                );
            }
            return (
                <SecContent
                    key={v}
                    title={dataObj[v]}
                    data={dataSource[lastKey][v]}
                    parents={parents}
                    replaceRegular={replaceRegular}
                    onClickItem={onClickItem}
                    levelKey={levelKey}
                    selectedData={selectedData}
                    dataSource={dataSource}
                />
            );
        });
    }

    render () {
        const {
            dataSource,
        } = this;

        if (dataSource === null) return <div>載入資料中...</div>;

        return (
            <div className="dtm_rcfr">
                {
                    this._render([])
                }
            </div>
        );
    }
}

export default Module;

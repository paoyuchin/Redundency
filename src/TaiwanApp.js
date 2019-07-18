import React, { Component } from 'react';
import DtmRcfr from './magaele/dtm_rcfr';
import ActRajax from './magaele/act_rajx';
import './css.scss';
import './magaele/core/core.css';



class TaiwanApp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedData: [],
            showSearchResult: false,
            inputValue: '',
            innerValue: '',
            actData: [],
            selectedVal: null,
            fetchFinish: null,
            clientW: window.innerWidth,
            width: null,
            height: null,
            queryStringObj: {}
        };
        this.AbortController = null;
        this.textInput = React.createRef();
        this.timer = null;
    }

    componentDidMount () {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
        eval('window._onFocusHandle' + this.props.number + '= this._onFocusHandle');
        setTimeout(() => {
            let text = this.props.taiwanSelectData.text || this.props.taiwanSelectData.txt;
            this.setState({ inputValue: text });
        }, 50);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.updateDimensions);
    }

    _onClickItem = data => {
        this.setState({
            selectedData: [data],
            inputValue: data.text,
            showSearchResult: this.state.width < 980 ? true : false,
            selectedVal: data,
            actData: []
        });
        this.props.onClickItem && this.props.onClickItem({
            taiwanSelectData: data
        });
    }; // cto
    _onFocusHandle = e => {
        this.setState({ showSearchResult: true });
    };
    _onBlurHandle = e => {
        // this.setState({ showSearchResult: false });
        // this.textInput.current.focusTextInput();
    };
    _onClickOutSide = () => {
        const {
            selectedData,
            innerValue,
            fetchFinish,
            actData,
            selectedVal
        } = this.state;

        (selectedData.length <= 0 &&
        innerValue.length >= 2 &&
        fetchFinish &&
        actData.length > 0 &&
        !selectedVal &&
        this.setKeyWords()) ||
        this.setState({
            showSearchResult: this.state.width < 980 ? true : false
        });
    };

    clearInput = () => {
        const { actData } = this.state;
        (actData.length === 0) && this.setState({
            innerValue: '',
            inputValue: '',
            searchKeyWord: ''
        }, () => {
            this.props.onClickItem && this.props.onClickItem({
                taiwanSelectData: {}
            });
        });
    }

    _onClickListItem = (v, e) => {
        this.setState({
            inputValue: v.txt,
            showSearchResult: this.state.width < 980 ? true : false,
            selectedVal: v
        });
        this.props.onClickItem && this.props.onClickItem({
            taiwanSelectData: v
        });
    };// rajx
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    setKeyWords = () => {
        const { width } = this.state;
        let showSearchResult = width < 980 ? true : false;

        let keyWordSearchObjTaiwan = { Foreign: '0', txt: this.state.inputValue };

        this.setState({
            showSearchResult: showSearchResult,
            inputValue: this.state.inputValue,
            selectedVal: keyWordSearchObjTaiwan
        });
        this.props.onClickItem && this.props.onClickItem({
            taiwanSelectData: keyWordSearchObjTaiwan
        });
    };
    getDataFromServer = (value) => {
        const { foreign } = this.props;
        this.AbortController && this.AbortController.abort();
        this.AbortController = new AbortController();
        const signal = this.AbortController.signal;
        this.setState({
            fetchFinish: false,
            showText: (
                <div className="">
                    <span>載入中...</span>
                </div>
            ),
            actData: []
        });

        let urlSetting = process.env.ENV === 'prod' ? window.urlType : '//uactivity.liontravel.com';
        let url = `${urlSetting}/search/keyword?Foreign=${foreign}&KeyWord=${encodeURIComponent(value)}`;
        // let url = `//activity.liontravel.com/search/keyword?Foreign=${foreign}&KeyWord=${encodeURIComponent(value)}`;
        // let url = './json/keyword.json';
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            signal,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        })
            .then(res => {
                return res.json();
            })
            .then((d) => {
                this.processData(d, value);
            })
            .catch(res => console.error('Request失敗 原因是 :', res));

    };
    getInputValue = () => {
        return this.state.selectedVal;
    };
    processData (data, searchKeyWord) {
        let p = new Promise(function (resolve, reject) {
            data.Destinations.map(item => {
                item.level1 = item.Kind;
                item.level2 = item.KindName;
                item.level3 = item.Code;
                item.txt = item.Name;
                delete item.Kind;
                delete item.KindName;
                delete item.Code;
                delete item.Name;
            });
            resolve(data);
        });
        const actData = data.Destinations.filter(e => e.Foreign === '0');

        let searchWord = this.state.innerValue.toUpperCase(); // 關鍵字尋轉成大寫
        actData.sort((a, b) => {  // ActRajax 值傳入入模組 rajx 前,依照搜尋的關鍵先後,字預先排序好
            let a_lightingWord = a.txt.indexOf(searchWord);
            let b_lightingWord = b.txt.indexOf(searchWord);
            return ((a_lightingWord < b_lightingWord) ? -1 : ((a_lightingWord > b_lightingWord) ? 1 : -1));
        }).sort((a, b) => a.level1 - b.level1);

        this.setState({
            actData: actData,
            searchKeyWord: searchKeyWord,
            showText: '',
            fetchFinish: true
        });
        return p;
    }
    onInputChange = (e) => {
        let length = e.target.value.length;
        let val = e.target.value;
        this.setState({
            innerValue: val,
            inputValue: val,
            selectedData: [],
            selectedVal: null,
            actData: []
        });

        this.props.onClickItem && this.props.onClickItem({
            taiwanSelectData: {}
        });

        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            if (length > 1) {
                this.getDataFromServer(val);
            }
        }, 600);
    };

    creatSeeMoreUrl = () => {
        const { inputValue } = this.state;
        let encodeInputValue = encodeURIComponent(inputValue);
        let urlSetting = process.env.ENV === 'prod' ? window.urlType : '//uactivity.liontravel.com';
        let seeMoreUrl = `${urlSetting}/search?Foreign=0&SearchKeyword=${encodeInputValue}&OriginSearchText=${encodeInputValue}`;

        return seeMoreUrl;
    };
    onTypingFinish = value => {
        this.setState({
            inputValue: value,
            innerValue: value,
            selectedData: [],
            selectedVal: null,
        });
        value.length >= 2 && this.getDataFromServer(value);
    };
    _clearInput = () => {
        this.onTypingFinish('');
        this.setState({
            showSearchResult: false,
            taiwanSelectData: {}
        });
    };
    closeSearch = () => {
        console.log('closesearch');
        this.setState({
            showSearchResult: false,
            taiwanSelectData: { Foreign: 0, txt: this.state.inputValue }
        });
    };
    render () {
        const { foreign, taiwanSelectData } = this.props;
        const {
            inputValue,
            innerValue,
            actData,
            width,
            showSearchResult,
            selectedVal,
            showText,
        } = this.state;
        let taiwanSelected = Object.keys(taiwanSelectData).length && taiwanSelectData.value ? [taiwanSelectData.value] : [];
        const svgClassName = () => {
            if (!showSearchResult) {
                return 'd-no';
            }
            if (this.state.inputValue) {
                return '';
            }
            if (Object.keys(taiwanSelectData).length) {
                return '';
            } else {
                return 'd-no';
            }
        };
        return (
            <div className={`searchContainer activityContainer ${!foreign ? '' : 'd-no'}`}>
                <div className="searchInputCont">
                    <div className="searchInput">
                        <input type="text"
                            ref={this.textInput}
                            value={inputValue || ''}
                            placeholder="輸入城市、景點、體驗行程或活動名稱"
                            onChange={this.onInputChange}
                            onFocus={this._onFocusHandle}
                            onBlur={this._onBlurHandle}
                        />
                        <span className="_crossIcon" onClick={() => this._clearInput()}>
                            {
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    color="red"
                                    className={svgClassName()}
                                >
                                    <g fill="none" fillRule="nonzero">
                                        <path
                                            fill="gray"
                                            d="M7 0C3.129 0 0 3.129 0 7s3.129 7 7 7 7-3.129 7-7-3.129-7-7-7zm3.5 9.513l-.987.987L7 7.987 4.487 10.5 3.5 9.513 6.013 7 3.5 4.487l.987-.987L7 6.013 9.513 3.5l.987.987L7.987 7 10.5 9.513z"
                                        />
                                        <path d="M-1-1h16v16H-1z" />
                                    </g>
                                </svg>
                            }
                        </span>
                    </div>
                </div>
                <div className={innerValue.length <= 0 || !showSearchResult ? 'ActRajaxContainer d-no' : 'ActRajaxContainer'}>
                    <span
                        className={
                            actData.length === 0 || width > 980
                                ? 'd-no actNotice'
                                : 'actNotice'
                        }
                    >
            找不到選項？請輸入關鍵字查詢
                    </span>
                    <div className={actData.length < 1 ? 'keyword_close_btn d-no' : 'keyword_close_btn'} onClick={this.closeSearch}>
                        <svg viewBox="0 0 10 10">
                            <path id="dtm_rcfr-x" d="M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"></path></svg>
                    </div>
                    <ActRajax
                        containerClass={
                            (innerValue.length <= 0 || !showSearchResult) && 'd-no'
                        }
                        sectionClass={''}
                        itemClass={''}
                        titleClass={''}
                        data={actData}
                        matchWord={innerValue}
                        closeBtnOnClick={() => this.setState({ showSearchResult: false })}
                        getItemClickValue={(v, e) => this._onClickListItem(v, e)}
                        selectedVal={selectedVal}
                        isFocus={showSearchResult}
                        showText={showText}
                        noMatchText="很抱歉，找不到符合的項目"
                        minimumStringQuery={'請至少輸入兩個字'}
                        minimumStringQueryLength={2}
                        footer={this.creatSeeMoreUrl()}
                        rules={[
                            {
                                title: '產品'
                            },
                            {
                                title: '城市'
                            },
                            {
                                title: '國家'
                            }
                        ]}
                    />
                </div>
                {
                    <div
                        className={
                            innerValue.length < 1 && showSearchResult
                                ? 'DtmRcfrContainer twDtmRcfr'
                                : 'DtmRcfrContainer d-no'
                        }
                    >
                        <div className={
                            innerValue.length < 1 && showSearchResult
                                ? 'cto_close_btn'
                                : 'cto_close_btn d-no'
                        } onClick={this._onClickOutSide}>
                            <svg viewBox="0 0 10 10"><path id="dtm_rcfr-x" d="M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"></path></svg>
                        </div>
                        <span className="DtmRcfrNotice">找不到選項？請輸入關鍵字查詢</span>
                        <DtmRcfr
                            levelKey={['vLine', 'vLinetravel', 'vLinewebarea']}
                            dataResouce={
                                process.env.ENV === 'prod' ? window.dataResouceTaiwan : './json/activityhome.json'
                            }
                            // replaceRegular={/[a-zA-Z\(\)\s]/g}//CTO 英文字的部分會被過濾掉,因此註解掉
                            onClickItem={this._onClickItem}
                            selectedData={taiwanSelected}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default TaiwanApp;
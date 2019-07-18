import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../css.scss';

export default class Module extends Component {
    constructor (props) {
        super(props);
        this.state = {
            select: null
        };
        this.newData = [];
        this.idx = null;
    }
    componentDidMount () {
        window.addEventListener('keydown', (e) => this.whenKeyPress(e), true);
    }
    componentWillReceiveProps (nextProps) {
        // console.log(nextProps);
        this.props.matchWord !== nextProps.matchWord && this.setState({ select: null });
    }
    componentWillUnmount () {
        window.removeEventListener('keydown', (e) => this.whenKeyPress(e), true);
    }
    cloneDataArray () { // 複製一個DATA出來操作 不要動到props
        let dataHasDataInedx = JSON.parse(JSON.stringify([...this.props.data]));
        let newArry = [];
        for (let i = 0; i <= this.props.rules.length - 1; i++) {
            for (let n = 0; n <= dataHasDataInedx.length - 1; n++) {
                if (dataHasDataInedx[n].level2 === this.props.rules[i].title) {
                    newArry.push(dataHasDataInedx[n]);
                }
            }
        }

        newArry.map((item, i) => {
            item.dataIndex = i;
            return item;
        });
        return this.lightingMatchWord(newArry);
    }
    lightingMatchWord (dataArray) {  // 從複製出來的DATA做搜尋紅字處理
        let sortKeyWord = this.props.matchWord.trim().split(/\s+/).sort((a, b) => (b.length - a.length));
        let newData = dataArray.map(item => {
            let re = new RegExp('(' + sortKeyWord.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, '\\$&') + ')', 'ig');
            if (re.test(item.txt)) {
            // let searchResult = item.txt.match(re)[1];
                item.Newtxt = item.txt.replace(re, '<span class="red">$1</span>');
            } else {
                item.Newtxt = item.txt;
            }
            return item;
        });
        this.newData = newData;
        return newData;
    }
    getLevel2Groups () {
        let levelGroup = new Set();
        this.cloneDataArray().forEach(items => {
            levelGroup.add(items.level2);
        });
        return [...levelGroup];
    }
    _itemOnClickHandler (item, str) {
        this.setState({ select: item.dataIndex }, this.props.getItemClickValue(item, str));
    }

    whenKeyPress (e) {
        const { isFocus, data } = this.props;
        if (isFocus && data.length) {
            if (e.keyCode === 40) {
                let index = this.state.select === null ? 0 : this.state.select + 1;
                if (index >= data.length) {
                    index = 0;
                }
                this.idx = index;
                this._itemOnClickHandler(this.newData[index]);
            }
            if (e.keyCode === 38) {
                let prevIndex = this.state.select === null ? data.length - 1 : this.state.select - 1;
                if (prevIndex < 0) {
                    prevIndex = data.length - 1;
                }
                this.idx = prevIndex;
                this._itemOnClickHandler(this.newData[prevIndex]);
            }
            if (e.keyCode === 13) {
                if (this.idx === null) {
                    this.idx = 0;
                }
                this._itemOnClickHandler(this.newData[this.idx], 'choosed');
                this.idx = null;
                e.target.blur();
            }
        }
    }

    render () {
        const classes = cx('act_rajx', this.props.containerClass, {
        });
        const getLevel2Groups = this.getLevel2Groups();
        const moduleHtml = (
            <div className={classes} style={this.props.style}>
                <div className="act_rajx-result">
                    {
                        (this.props.minimumStringQuery && this.props.showText) && <div className="m-place">
                            <button
                                onMouseDown={() => this.props.closeBtnOnClick()}
                                className="act_rajx-close"
                            >x</button>
                            {this.props.showText}
                        </div>
                    }
                    {
                        (this.props.minimumStringQuery && this.props.matchWord.length < this.props.minimumStringQueryLength && !this.props.showText) && <div className="m-place">
                            <button
                                onMouseDown={() => this.props.closeBtnOnClick()}
                                className="act_rajx-close"
                            >x</button>
                            {this.props.minimumStringQuery}
                        </div>
                    }
                    {
                        (this.props.data.length === 0 && !this.props.showText && this.props.matchWord.length >= this.props.minimumStringQueryLength) && <div className="noMatchText">
                            <button
                                onMouseDown={() => this.props.closeBtnOnClick()}
                                className="act_rajx-close"
                            >x</button>
                            {this.props.noMatchText}
                        </div>
                    }
                    {
                        (() => {
                            if (getLevel2Groups.length > 0 && this.props.matchWord.length >= this.props.minimumStringQueryLength && !this.props.showText) {
                                return getLevel2Groups.map((leve2Items, level2Index) => {
                                    return (
                                        <div className={cx('section', this.props.sectionClass)} key={level2Index}>
                                            <span className={cx('title', this.props.titleClass)}>
                                                {this.props.rules.find(items => items.title === leve2Items).icon}
                                                {leve2Items}
                                            </span>
                                            {
                                                this.cloneDataArray()
                                                    .filter((items, i) => items.level2 === leve2Items)
                                                    .map((items, i) => {
                                                        return (
                                                            <span
                                                                className={cx('item', this.props.itemClass, {
                                                                    select: this.state.select === items.dataIndex
                                                                })}
                                                                key={items.level3}
                                                                dangerouslySetInnerHTML={{ __html: items.Newtxt }}
                                                                onClick={
                                                                    () => {
                                                                        this._itemOnClickHandler(items, 'choosed');
                                                                        this.props.whenSpanClick && this.props.whenSpanClick();
                                                                    }
                                                                }
                                                            >
                                                            </span>
                                                        );
                                                    })
                                            }
                                        </div>
                                    );
                                });
                            }
                        })()
                    }
                </div>
                {
                    (!this.props.showText && this.props.footer && this.props.matchWord.length >= this.props.minimumStringQueryLength && this.props.data.length > 0) &&
                    <a href={this.props.footer} className="foot">點我查詢更多 {'"' + this.props.matchWord + '"'} 的產品</a>
                }
            </div>
        );
        if (!this.props.style) {
            return moduleHtml;
        } else {
            return (
                ReactDOM.createPortal(
                    moduleHtml, document.body
                )
            );
        }
    }
}
Module.defaultProps = {
    data: [],
    rules: []
};
Module.propTypes = {
    data: PropTypes.array.isRequired,
    rules: PropTypes.array.isRequired
};

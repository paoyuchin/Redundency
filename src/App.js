import React, { Component } from 'react';
import BtRcnb from './magaele/bt_rcnb';
import IcRcln from './magaele/ic_rcln';
import ForeignApp from './ForeignApp';
import TaiwanApp from './TaiwanApp';
import ClickOutSide from './utils/click_outside';
import './css.scss';
import './magaele/core/core.css';
import onSubmit from './onSubmit';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            taiwanSelectData: {},
            foreignSelectData: {},
            keywordForeign: window.keywordForeign,
            queryStringObj: {},
            selectedVal: null,
        };
        this.foreignApp = null;
        this.taiwanApp = null;
        eval('window.getInputValue' + this.props.number + ' = this.getInputValue');
    }

    componentWillMount () {
        let website = window.location.href;
        let decodedWebsite = decodeURIComponent(website);
        let hrefArray = decodedWebsite.split('?');

        if (hrefArray.length > 1) {
            // 有一個以上的queryString
            let queryStringArray = hrefArray[1].split('&');
            let queryStringObj = {};
            let newForeign = '';
            queryStringArray.map((item, idx) => {
                let keyValArray = item.split('=');
                queryStringObj[keyValArray[0]] = keyValArray[1];
                if (keyValArray[0] === 'Foreign') {
                    if (keyValArray[1] === '1') {
                        newForeign = keyValArray[1] = '1';
                    } else {
                        newForeign = keyValArray[1] = '0';
                    }
                    queryStringObj['Foreign'] = newForeign;
                }
                if (idx === queryStringArray.length - 1) {
                    this.setState({
                        queryStringObj: queryStringObj,
                        keywordForeign: 'Foreign' in queryStringObj ? (queryStringObj.Foreign / 1) : 0,
                    });
                }
            });
        }
    }

    componentDidMount () {
        this.analyzeUrl();
    }

    analyzeUrl = () => {
        const { queryStringObj, keywordForeign } = this.state;
        if (Object.keys(queryStringObj).length > 1) {
            // url有帶一個以上的參數
            let selectedVal = null;
            // 有 SearchCountryID 的是CTO , SearchAreaID 開國內CTO else 開國外CTO
            if ('SearchCountryID' in queryStringObj) {
                if ('SearchAreaID' in queryStringObj) {
                    if (keywordForeign === 1) return;
                    // 不選的時候也要先setState 按送出要可以帶有五個參數
                    selectedVal = {
                        vLine: queryStringObj.SearchCountryID,
                        vLinetravel: queryStringObj.SearchAreaID,
                        vLinewebarea: queryStringObj.SearchCityID,
                        text: queryStringObj.OriginSearchText
                    };
                    this.setState({
                        taiwanSelectData: selectedVal
                    });
                } else {
                    if (keywordForeign === 0) return;
                    // 不選的時候也要先setState 按送出要可以帶有4個參數
                    selectedVal = {
                        vLine: queryStringObj.Foreign,
                        vCountry: queryStringObj.SearchCountryID,
                        vCity: queryStringObj.SearchCityID,
                        text: queryStringObj.OriginSearchText,
                    };
                    this.setState({
                        foreignSelectData: selectedVal
                    });
                }
            }
            // 有 SearchKeyword 的就是補字 (Foreign 決定國內外)
            if ('SearchKeyword' in queryStringObj) {
                let foreign = (queryStringObj.Foreign / 1);
                // 不選的時候也要先setState 按送出要可以帶有四個參數
                selectedVal = { txt: queryStringObj.OriginSearchText };
                if (foreign) {
                    selectedVal = {
                        Foreign: foreign,
                        txt: queryStringObj.OriginSearchText,
                    };
                    this.setState({
                        foreignSelectData: selectedVal
                    });
                } else {
                    selectedVal = {
                        Foreign: foreign,
                        txt: queryStringObj.OriginSearchText,
                    };
                    this.setState({
                        taiwanSelectData: selectedVal
                    });
                }
            }
            this.setState({ selectedVal: selectedVal });
        }
    }

    onClickItem = (data) => {
        this.setState(prevState => { return data });
    }

    getInputValue = () => {
        const { keywordForeign, taiwanSelectData, foreignSelectData } = this.state;
        if (keywordForeign) {
            return foreignSelectData;
        } else {
            return taiwanSelectData;
        }
    }

    handleSubmit = (e) => {
        const { foreignSelectData, taiwanSelectData, keywordForeign } = this.state;
        const hasValue = keywordForeign ? foreignSelectData : taiwanSelectData;
        const state = Object.assign({}, keywordForeign ? foreignSelectData : taiwanSelectData, { Foreign: keywordForeign });
        if (keywordForeign) {
            let { inputValue } = this.foreignApp.state;
            let { foreign } = this.foreignApp.props;
            if (!!inputValue && foreignSelectData.text === undefined) {
                onSubmit({ txt: inputValue, Foreign: foreign });
            } else if (Object.keys(hasValue).length !== 0) {
                onSubmit(state);
            } else {
                alert('請選擇目的地或輸入關鍵字。');
            }
        } else {
            let { inputValue } = this.taiwanApp.state;
            let { foreign } = this.taiwanApp.props;
            if (!!inputValue && taiwanSelectData.text === undefined) {
                onSubmit({ txt: inputValue, Foreign: foreign });
            } else if (Object.keys(hasValue).length !== 0) {
                onSubmit(state);
            } else {
                alert('請選擇目的地或輸入關鍵字。');
            }
        }
    }

    handleClickOutSide = () => {
        let { keywordForeign } = this.state;
        keywordForeign ? this.foreignApp._onClickOutSide() : this.taiwanApp._onClickOutSide();
    }

    render () {
        const { keywordForeign, taiwanSelectData, foreignSelectData } = this.state;
        return (
            <React.Fragment>
                <div className="foreignBtns">
                    <BtRcnb className={`d-ib foreignBtn ${keywordForeign ? 'active' : ''}`} radius whenClick={() => {
                        this.setState({ keywordForeign: 1 });
                    }}>
                        <span className="foreignText">國外</span>
                    </BtRcnb>
                    <BtRcnb className={`d-ib twBtn ${!keywordForeign ? 'active' : ''}`} radius whenClick={() => {
                        this.setState({ keywordForeign: 0 });
                    }}>
                        <span className="twText">台灣</span>
                    </BtRcnb>
                </div>
                <ClickOutSide
                    onClickOutside={() => this.handleClickOutSide()}
                >
                    <ForeignApp
                        ref={e => { this.foreignApp = e }}
                        foreign={keywordForeign}
                        placeholder="輸入城市、景點、體驗行程或活動名稱1"
                        onClickItem={this.onClickItem}
                        foreignSelectData={foreignSelectData}
                        className={`search b-no ${keywordForeign ? 'd-no' : ''}`}
                    />
                    <TaiwanApp
                        ref={e => { this.taiwanApp = e }}
                        foreign={keywordForeign}
                        placeholder="輸入城市、景點、體驗行程或活動名稱2"
                        onClickItem={this.onClickItem}
                        taiwanSelectData={taiwanSelectData}
                        className={`search b-no ${!keywordForeign ? '' : 'd-no'}`}
                    />
                    <div className="submitBtns">
                        {/* <BtRcnb className="cancelBtn" radius>
                            <span className="cancelText">取消</span>
                        </BtRcnb> */}
                        <BtRcnb className="searchBtn" radius whenClick={this.handleSubmit}>
                            <IcRcln name="toolsearch" />
                            <span className="searchText">確認</span>
                        </BtRcnb>
                    </div>
                </ClickOutSide>
            </React.Fragment>
        );
    }
}

export default App;
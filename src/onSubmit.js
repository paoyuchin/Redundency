import { toQueryString } from './utils';
let urlSetting = process.env.ENV === 'prod' ? window.urlType : '//uactivity.liontravel.com';
const targetUrl = `${urlSetting}/search?`;


function onSubmit (panelState) {
    let queryString;
    let obj = {};
    if (panelState.Foreign) {
        // 國外
        if ('txt' in panelState) {
            obj = {
                Foreign: panelState.Foreign,
                SearchKeyword: panelState.txt,
                OriginSearchText: panelState.txt
            };
            queryString = toQueryString(obj);
        } else {
            obj = {
                Foreign: panelState.Foreign,
                SearchCountryID: panelState.vCountry,
                SearchCityID: panelState.vCity,
                OriginSearchText: panelState.text
            };
            queryString = toQueryString(obj);
        }
    } else {
        // 國內
        if ('txt' in panelState) {
            obj = {
                Foreign: panelState.Foreign,
                SearchKeyword: panelState.txt,
                OriginSearchText: panelState.txt
            };
            queryString = toQueryString(obj);
        } else {
            obj = {
                Foreign: panelState.Foreign,
                SearchCountryID: panelState.vLine,
                SearchAreaID: panelState.vLinetravel,
                SearchCityID: panelState.vLinewebarea,
                OriginSearchText: panelState.text
            };
            queryString = toQueryString(obj);
        }
    }

    // console.log(`${targetUrl}${queryString}`);

    if (process.env.ENV === 'prod') {
        // 由backend js送出條件
        window.activitySearchResult = `${targetUrl}${queryString}`;
    } else {
        console.log('url:', `${targetUrl}${queryString}`);
        window.location.href = `${targetUrl}${queryString}`;
    }

}


export default onSubmit;
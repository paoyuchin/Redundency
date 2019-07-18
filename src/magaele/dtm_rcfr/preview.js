import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import DtmRcfr from './components/Module';
import {CategoryName} from '../index';

class Demo extends Component {
    state = {
        selectedData: [],
    }
    onClickItem = (data) => {
        console.log('data', data);
        this.setState(prevState => {
            return {
                selectedData: [data],
            };
        });
    }
    render () {
        const selectedData = this.state.selectedData;
        const txt = (selectedData.length > 0) ? selectedData[0].text : '';
        const selected = selectedData.map(v => v.value);
        return (
            <div>
                <h2>團體</h2>
                <input type="text" placeholder="選單" value={txt} />
                <DtmRcfr
                    levelKey={['vLine', 'vLinetravel', 'vLinewebarea']}
                    onClickItem={this.onClickItem}
                    dataResouce="./json/TRS1NEW.json"
                    selectedData={selected}
                    orderMaps={{
                        vLine: ['_9', '_6', '_5', '_3', '_4', '_1', '_2', '_7'],
                        vLinetravel: {
                            _1: ['_', '_C_1', '_B_1', '_A_1', '_D_1', '_E_1', '_F_1']
                        },
                    }}
                />
            </div>
        );
    }
}

class Demo2 extends Component {
    state = {
        selectedData: [],
    }
    onClickItem = (data) => {
        console.log('data', data);
        this.setState(prevState => ({
            selectedData: [data],
        }));
    }
    render () {
        const selectedData = this.state.selectedData;
        const txt = (selectedData.length > 0) ? selectedData[0].text : '';
        const selected = selectedData.map(v => v.value);
        return (
            <div>
                <h2>訂房</h2>
                <input type="text" placeholder="選單" value={txt} />
                <DtmRcfr
                    levelKey={['inTaiwan', 'vLine', 'vCountry', 'vCity']}
                    onClickItem={this.onClickItem}
                    dataResouce="./json/hotelMenu.json"
                    replaceRegular={/[a-zA-Z\(\)\s]/g}
                    selectedData={selected}
                    orderMaps={{
                        inTaiwan: ['in', 'out'],
                        vLine: {
                            out: ['_5', '_6', '_7', '_1', '_2', '_3', '_4'],
                        },
                        vCountry: {
                            '_5': ['_PCTZ_5', '_PCT_5'],
                        }
                    }}
                />
            </div>
        );
    }
}

class Demo3 extends Component {
    state = {
        selectedData: [],
    }
    onClickItem = (data) => {
        console.log('data', data);
        this.setState(prevState => ({
            selectedData: [data],
        }));
    }
    render () {
        const selectedData = this.state.selectedData;
        const txt = (selectedData.length > 0) ? selectedData[0].text : '';
        const selected = selectedData.map(v => v.value);
        return (
            <div>
                <h2>自由行</h2>
                <input type="text" placeholder="選單" value={txt} />
                <DtmRcfr
                    levelKey={['Line', 'Country', 'City']}
                    onClickItem={this.onClickItem}
                    dataResouce="./json/vacationdata.json"
                    transformFetchData={(data) => {
                        const dataObj = {
                            Line: {},
                            Country: {},
                            City: {},
                        };
                        const {
                            Line,
                            City,
                            Country,
                        } = data;

                        Line.forEach(element => {
                            const value = element.Line;
                            const text = element.LineName;
                            dataObj.Line[value] = text;
                            dataObj.Country[value] = {};
                        });
                        Country.forEach(element => {
                            const parent = element.Line;
                            const CountryList = element.CountryList;
                            CountryList.forEach(elem => {
                                const value = elem.Country;
                                const text = elem.CountryName;
                                dataObj.Country[parent][value] = text;
                                dataObj.City[value] = {};
                            });
                        });
                        City.forEach(element => {
                            const parent = element.Country;
                            const CityList = element.CityList;
                            CityList.forEach(elem => {
                                const {
                                    City,
                                    CityName,
                                    CityEName,
                                } = elem;
                                const text = `${CityName}(${CityEName})${City}`;
                                dataObj.City[parent][City] = text;
                            });
                        });

                        return dataObj;
                    }}
                    selectedData={selected}
                    replaceRegular={/\([\w\s\)]+/g}
                    orderMaps={{
                        'Line': ['4', '3', '2', '1', '5', '7', '6']
                    }}
                />
            </div>
        );
    }
}

storiesOf(CategoryName.Module.DestinationMenu, module)
    .add('dtm_rcfr', () => (
        <div>
            <Demo />
            <Demo2 />
            <Demo3 />
        </div>
    ));

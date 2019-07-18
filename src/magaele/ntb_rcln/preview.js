import React from 'react';
import NtbRcln, { Tab } from './components/Module.js';
import IcRcln from '../ic_rcln';
import PpRcln from '../pp_rcln';
import { storiesOf } from '@storybook/react';
import {CategoryName} from '../index';

// 客製化Label

const Label = (props) => (
    <div>
        <img src="./images/icon.png" alt="" />
        台灣機票
    </div>
);
const Label2 = (props) => (
    <div>
        <IcRcln name="toolchinaf" />
        大陸機票
    </div>
);
// 可自訂模組 click時彈出視窗
const CustomComponent = (props) => {
    return (
        <div>
            <IcRcln
                name="toolif"
            />
        </div>
    );
};

// 彈出視窗的自訂模組
const ContentComponent = (props) => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, esse id vel sed tenetur sit eius molestias deserunt vero laudantium dolores, accusamus, provident perferendis quam. Praesentium fugiat exercitationem libero deserunt.
        </p>
    );
};
const Label3 = (props) => (
    <div>
        個人自由行
        <PpRcln
        CustomComponent={<CustomComponent />}
        ContentComponent={<ContentComponent />}
        moduleClassName="PpRcln1"
        events={['click']}
        position={['bottom', 'horizon_center']}
        />
    </div>
);
const Label4 = (props) => (
    <div>
        團體自由行
        <PpRcln
        CustomComponent={<CustomComponent />}
        ContentComponent={<ContentComponent />}
        moduleClassName="PpRcln1"
        events={['click']}
        position={['bottom', 'horizon_center']}
        />
    </div>
);
storiesOf(CategoryName.Module.NavTabs, module)
    .add('ntb_rcln', () => (
        <div>
            <h2>預設一層</h2>
            <NtbRcln activeTabIndex={1}>
                <Tab label="國際機票">
                    <h3>我是國際機票預訂的內容唷</h3>
                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                </Tab>
                <Tab label={<Label2 />}>
                    <h3>我是大陸國內機票的內容唷</h3>
                    <p>第二塊第二塊第二塊第二塊Tab</p>
                </Tab>
                <Tab label={<Label />}>
                    <h3>我是台灣國內機票的內容唷</h3>
                    <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                </Tab>
            </NtbRcln>

            <h2>嵌套兩層(prop: wrap_ntb_rcln) & Tab新增一個props dot</h2>
            <NtbRcln wrap_ntb_rcln activeTabIndex={1}>
                <Tab label="團  體">
                    <NtbRcln activeTabIndex={2}>
                        <Tab label="國際機票預訂">
                            <h1>團體區塊</h1>
                            <h3>我是國際機票預訂的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label={<Label2 />}>
                            <h1>團體區塊</h1>
                            <h3>我是大陸國內機票的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣國內機票">
                            <h1>團體區塊</h1>
                            <h3>我是台灣國內機票的內容唷</h3>
                            <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="機  票">
                    <NtbRcln activeTabIndex={2}>
                        <Tab label="國際機票預訂" dot>
                            <h1>機票區塊</h1>
                            <h3>我是國際機票預訂的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸國內機票">
                            <h1>機票區塊</h1>
                            <h3>我是大陸國內機票的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣國內機票">
                            <h1>機票區塊</h1>
                            <h3>我是台灣國內機票的內容唷</h3>
                            <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
            </NtbRcln>

            <h2>prop: dtm_rcln_mode (此模式樣式只有PC)</h2>
            <NtbRcln dtm_rcln_mode activeTabIndex={1}>
                <Tab label="東北亞">
                東北亞的內容放這
                </Tab>
                <Tab label="大陸港澳">
                大陸港澳的內容放這
                </Tab>
                <Tab label="東南亞">
                東南亞的內容放這
                </Tab>
                <Tab label="歐洲">
                歐洲的內容放這
                </Tab>
                <Tab label="美洲">
                美洲的內容放這
                </Tab>
            </NtbRcln>

            <h2>嵌套兩層: wrap_dtm_rcln (此模式樣式只有PC)</h2>
            <NtbRcln wrap_dtm_rcln activeTabIndex={1}>
                <Tab label="國外">
                    <NtbRcln dtm_rcln_mode activeTabIndex={1}>
                        <Tab label="東北亞">
                東北亞的內容放這
                        </Tab>
                        <Tab label="大陸港澳">
                大陸港澳的內容放這
                        </Tab>
                        <Tab label="東南亞">
                東南亞的內容放這
                        </Tab>
                        <Tab label="歐洲">
                歐洲的內容放這
                        </Tab>
                        <Tab label="美洲">
                美洲的內容放這
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="國內">
                    <NtbRcln dtm_rcln_mode activeTabIndex={3}>
                        <Tab label="東北亞2">
                東北亞2的內容放這
                        </Tab>
                        <Tab label="大陸港澳2">
                大陸港澳2的內容放這
                        </Tab>
                        <Tab label="東南亞2">
                東南亞2的內容放這
                        </Tab>
                        <Tab label="歐洲2">
                歐洲2的內容放這
                        </Tab>
                        <Tab label="美洲2">
                美洲2的內容放這
                        </Tab>
                    </NtbRcln>
                </Tab>
            </NtbRcln>
            <h2>customClass style:translucentBlue</h2>
            <NtbRcln activeTabIndex={0} customClass="translucentBlue">
                <Tab label="國際機票預訂">
                國際機票預訂內容
                </Tab>
                <Tab label="大陸國內機票">
                大陸國內機票內容
                </Tab>
                <Tab label="台灣國內機票">
                台灣國內機票內容
                </Tab>
            </NtbRcln>

            <h2>一層樣式</h2>
            <NtbRcln activeTabIndex={0} customClass="one_floor">
                <Tab label="東北亞" dot>
                    <h3>我是國際機票預訂的內容唷</h3>
                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                </Tab>
                <Tab label="大陸港澳">
                    <h3>我是大陸國內機票的內容唷</h3>
                    <p>第二塊第二塊第二塊第二塊Tab</p>
                </Tab>
                <Tab label="東南亞" dot>
                    <h3>我是台灣國內機票的內容唷</h3>
                    <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                </Tab>
                <Tab label="歐洲">
                    <h3>我是國際機票預訂的內容唷</h3>
                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                </Tab>
                <Tab label="美洲">
                    <h3>我是國際機票預訂的內容唷</h3>
                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                </Tab>
                <Tab label="大洋洲">
                    <h3>我是國際機票預訂的內容唷</h3>
                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                </Tab>
                <Tab label="台灣">
                    <h3>我是國際機票預訂的內容唷</h3>
                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                </Tab>
            </NtbRcln>

            <h2>兩層樣式</h2>
            <NtbRcln  activeTabIndex={1} customClass="search_panel_one">
                <Tab label="團體">
                    <NtbRcln activeTabIndex={1} customClass="search_panel_two">
                        <Tab label="國際機票預訂">
                            <h1>團體區塊</h1>
                            <h3>我是國際機票預訂的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label={<Label2 />}>
                            <h1>團體區塊</h1>
                            <h3>我是大陸國內機票的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣機票預訂">
                            <h1>團體區塊</h1>
                            <h3>我是大陸國內機票的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="機票">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際機票預訂">
                            <h1>機票區塊</h1>
                            <h3>我是國際機票預訂的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸國內機票">
                            <h1>機票區塊</h1>
                            <h3>我是大陸國內機票的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣國內機票">
                            <h1>機票區塊</h1>
                            <h3>我是大陸國內機票的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="訂房">
                <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際訂房">
                            <h1>機票區塊</h1>
                            <h3>我是訂房的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸訂房">
                            <h1>機票區塊</h1>
                            <h3>我是訂房的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣訂房">
                            <h1>機票區塊</h1>
                            <h3>我是訂房的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="自由行">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際自由行">
                            <h1>機票區塊</h1>
                            <h3>我是自由行的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸自由行">
                            <h1>機票區塊</h1>
                            <h3>我是自由行的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣自由行">
                            <h1>機票區塊</h1>
                            <h3>我是自由行的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="主題旅遊">
                <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際主題旅遊">
                            <h1>機票區塊</h1>
                            <h3>我是主題旅遊的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸主題旅遊">
                            <h1>機票區塊</h1>
                            <h3>我是主題旅遊的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣主題旅遊">
                            <h1>機票區塊</h1>
                            <h3>我是主題旅遊的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="鐵道">
                <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際鐵道">
                            <h1>機票區塊</h1>
                            <h3>我是鐵道的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸鐵道">
                            <h1>機票區塊</h1>
                            <h3>我是鐵道的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣鐵道">
                            <h1>機票區塊</h1>
                            <h3>我是鐵道的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="郵輪">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際郵輪">
                            <h1>機票區塊</h1>
                            <h3>我是郵輪預訂的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸郵輪">
                            <h1>機票區塊</h1>
                            <h3>我是郵輪的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣郵輪">
                            <h1>機票區塊</h1>
                            <h3>我是票券當地遊的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="票券當地遊">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際票券">
                            <h1>機票區塊</h1>
                            <h3>我是票券當地遊的內容唷</h3>
                            <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                        </Tab>
                        <Tab label="大陸票券">
                            <h1>機票區塊</h1>
                            <h3>我是票券當地遊的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                        <Tab label="台灣票券">
                            <h1>機票區塊</h1>
                            <h3>我是票券當地遊的內容唷</h3>
                            <p>第二塊第二塊第二塊第二塊Tab</p>
                        </Tab>
                    </NtbRcln>
                </Tab>
            </NtbRcln>

            <h2>三層樣式-1</h2>
            <NtbRcln activeTabIndex={0} customClass="search_panel_one">
                <Tab label="團體">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國際機票預訂">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="東北亞" dot>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸港澳">
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="東南亞" dot>
                                    <h3>我是台灣國內機票的內容唷</h3>
                                    <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                                </Tab>
                                <Tab label="歐洲">
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="美洲">
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大洋洲">
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="台灣">
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label={<Label2 />}>
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="東北亞" dot>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸港澳">
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="台灣機票預訂">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="東北亞" dot>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸港澳">
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="東南亞" dot>
                                    <h3>我是台灣國內機票的內容唷</h3>
                                    <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                                </Tab>
                                <Tab label="歐洲">
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="機票">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="訂房">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內88">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外77">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="自由行">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內66">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外55">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="主題旅遊">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內88">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外77">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國內44">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外33">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="鐵道">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內222">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外22">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="郵輪">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外11">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="票券當地遊">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內1">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="北部">
                                    <h1>北部區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>中部區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>南部區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外">
                            <NtbRcln activeTabIndex={0} customClass="one_floor">
                                <Tab label="個人自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="團體自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
            </NtbRcln>

            <h2>三層樣式-2</h2>
            <NtbRcln activeTabIndex={3} customClass="search_panel_one">
                <Tab label="團體">
                    <NtbRcln activeTabIndex={0}  customClass="search_panel_two">
                        <Tab label="國際機票預訂">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="東北亞">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸港澳">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="東南亞">
                                    <h1>機票區塊</h1>
                                    <h3>我是台灣國內機票的內容唷</h3>
                                    <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                                </Tab>
                                <Tab label="歐洲">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label={<Label2 />}>
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="東北亞">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸港澳">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="台灣機票預訂">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="東北亞">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸港澳">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="東南亞">
                                    <h1>機票區塊</h1>
                                    <h3>我是台灣國內機票的內容唷</h3>
                                    <p>第三塊TabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTabTab</p>
                                </Tab>
                                <Tab label="歐洲">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="機票">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內3">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="單程">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="來回">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="多個目的地">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外3">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="國際機票預訂">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="大陸國內機票">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="台灣國內機票">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="訂房">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內4">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="北部">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外4">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="日本">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="韓國">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="中國">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="自由行">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內5">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label={<Label3 />}>
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label={<Label4 />}>
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外5">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label={<Label3 />}>
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label={<Label4 />}>
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="航空自由行">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="主題旅遊">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內6">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="北部">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外6">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="日本">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="韓國">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="中國">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="鐵道">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內7">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="北部">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外7">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="日本">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="韓國">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="中國">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="郵輪">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內8">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="北部">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外8">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="日本">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="韓國">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="中國">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
                <Tab label="票券當地遊">
                    <NtbRcln activeTabIndex={0} customClass="search_panel_two">
                        <Tab label="國內0">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="北部">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="中部">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="南部">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                        <Tab label="國外0">
                            <NtbRcln activeTabIndex={0} customClass="search_panel_three">
                                <Tab label="日本">
                                    <h1>機票區塊</h1>
                                    <h3>我是國際機票預訂的內容唷</h3>
                                    <p>國際機票預訂國際機票預訂國際機票預訂國際機票預訂國際機票預訂</p>
                                </Tab>
                                <Tab label="韓國">
                                    <h1>機票區塊</h1>
                                    <h3>我是內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                                <Tab label="中國">
                                    <h1>機票區塊</h1>
                                    <h3>我是大陸國內機票的內容唷</h3>
                                    <p>第二塊第二塊第二塊第二塊Tab</p>
                                </Tab>
                            </NtbRcln>
                        </Tab>
                    </NtbRcln>
                </Tab>
            </NtbRcln>

        </div>
    ));
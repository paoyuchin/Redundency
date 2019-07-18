import React from 'react';
import IcRcln from './components/Module.js';
import { storiesOf } from '@storybook/react';

storiesOf('圖示 (icon font)', module)
    .add('ic_rcln', () => (
        <div>
            <ul className="icon_lists clear">
                <li>
                    <IcRcln name="tooladdb" size="x15" />
                    <div className="name">tool_add-b</div>
                    <div className="code">&amp;#xe604;</div>
                    <div className="name">.tooladdb</div>
                    <b className="size">size</b>
                </li>
                <li>
                    <IcRcln name="tooladdbf" className="customClass" />
                    <div className="name">tool_add-b-f</div>
                    <div className="code">&amp;#xe605;</div>
                    <div className="name">.tooladdbf</div>
                    <b className="className">className</b>
                </li>
                <li>
                    <IcRcln link name="tooladdb2" />
                    <div className="name">tool_add-b2</div>
                    <div className="code">&amp;#xe905;</div>
                    <div className="name">.tooladdb2</div>
                    <b className="link">link</b>
                </li>
                <li>
                    <IcRcln border name="tooladds" />
                    <div className="name">tool_add-s</div>
                    <div className="code">&amp;#xe606;</div>
                    <div className="name">.tooladds</div>
                    <b className="border">border</b>
                </li>
                <li>
                    <IcRcln circular name="tooladdsf" />
                    <div className="name">tool_add-s-f</div>
                    <div className="code">&amp;#xe607;</div>
                    <div className="name">.tooladdsf</div>
                    <b className="circular">circular</b>
                </li>
                <li>
                    <IcRcln name="tooladds2" color="red_lighter" />
                    <div className="name">tool_add-s2</div>
                    <div className="code">&amp;#xe906;</div>
                    <div className="name">.tooladds2</div>
                    <b className="color">color</b>
                </li>
                <li>
                    <IcRcln border name="toolbefore" color="lakegreen" />
                    <div className="name">tool_before</div>
                    <div className="code">&amp;#xe608;</div>
                    <div className="name">.toolbefore</div>
                    <b className="border color">border color</b>
                </li>
                <li>
                    <IcRcln name="toolbuy" />
                    <div className="name">tool_buy</div>
                    <div className="code">&amp;#xe609;</div>
                    <div className="name">.toolbuy</div>
                </li>
                <li>
                    <IcRcln name="toolbuyf" />
                    <div className="name">tool_buy-f</div>
                    <div className="code">&amp;#xe60a;</div>
                    <div className="name">.toolbuyf</div>
                </li>
                <li>
                    <IcRcln name="toolcancelb" />
                    <div className="name">tool_cancel-b</div>
                    <div className="code">&amp;#xe60b;</div>
                    <div className="name">.toolcancelb</div>
                </li>
                <li>
                    <IcRcln name="toolcancelbf" />
                    <div className="name">tool_cancel-b-f</div>
                    <div className="code">&amp;#xe60c;</div>
                    <div className="name">.toolcancelbf</div></li>
                <li>
                    <IcRcln name="toolcancelb2" />
                    <div className="name">tool_cancel-b2</div>
                    <div className="code">&amp;#xe907;</div>
                    <div className="name">.toolcancelb2</div>
                </li>
                <li>
                    <IcRcln name="toolcancels" />
                    <div className="name">tool_cancel-s</div>
                    <div className="code">&amp;#xe60d;</div>
                    <div className="name">.toolcancels</div>
                </li>
                <li>
                    <IcRcln name="toolcancelsf" />
                    <div className="name">tool_cancel-s-f</div>
                    <div className="code">&amp;#xe60e;</div>
                    <div className="name">.toolcancelsf</div>
                </li>
                <li>
                    <IcRcln name="toolcancels2" />
                    <div className="name">tool_cancel-s2</div>
                    <div className="code">&amp;#xe908;</div>
                    <div className="name">.toolcancels2</div>
                </li>
                <li>
                    <IcRcln name="toolcell" />
                    <div className="name">tool_cell</div>
                    <div className="code">&amp;#xe60f;</div>
                    <div className="name">.toolcell</div>
                </li>
                <li>
                    <IcRcln name="toolcellf" />
                    <div className="name">tool_cell-f</div>
                    <div className="code">&amp;#xe610;</div>
                    <div className="name">.toolcellf</div>
                </li>
                <li>
                    <IcRcln name="toolchild" />
                    <div className="name">tool_child</div>
                    <div className="code">&amp;#xe611;</div>
                    <div className="name">.toolchild</div>
                </li>
                <li>
                    <IcRcln name="toolchildf" />
                    <div className="name">tool_child-f</div>
                    <div className="code">&amp;#xe612;</div>
                    <div className="name">.toolchildf</div>
                </li>
                <li>
                    <IcRcln name="toolchina" />
                    <div className="name">tool_china</div>
                    <div className="code">&amp;#xe613;</div>
                    <div className="name">.toolchina</div>
                </li>
                <li>
                    <IcRcln name="toolchinaf" />
                    <div className="name">tool_china-f</div>
                    <div className="code">&amp;#xe600;</div>
                    <div className="name">.toolchinaf</div>
                </li>
                <li>
                    <IcRcln name="toolchoose" />
                    <div className="name">tool_choose</div>
                    <div className="code">&amp;#xe614;</div>
                    <div className="name">.toolchoose</div>
                </li>
                <li>
                    <IcRcln name="toolchoosen" />
                    <div className="name">tool_choosen</div>
                    <div className="code">&amp;#xe615;</div>
                    <div className="name">.toolchoosen</div>
                </li>
                <li>
                    <IcRcln name="toolchoosenf" />
                    <div className="name">tool_choosen-f</div>
                    <div className="code">&amp;#xe616;</div>
                    <div className="name">.toolchoosenf</div>
                </li>
                <li>
                    <IcRcln name="toolcompare" />
                    <div className="name">tool_compare</div>
                    <div className="code">&amp;#xe617;</div>
                    <div className="name">.toolcompare</div>
                </li>
                <li>
                    <IcRcln name="toolcomparef" />
                    <div className="name">tool_compare-f</div>
                    <div className="code">&amp;#xe618;</div>
                    <div className="name">.toolcomparef</div>
                </li>
                <li>
                    <IcRcln name="toolconstruction" />
                    <div className="name">tool_construction</div>
                    <div className="code">&amp;#xe619;</div>
                    <div className="name">.toolconstruction</div>
                </li>
                <li>
                    <IcRcln name="toolconstructionf" />
                    <div className="name">tool_construction-f</div>
                    <div className="code">&amp;#xe601;</div>
                    <div className="name">.toolconstructionf</div>
                </li>
                <li>
                    <IcRcln name="toolcreditcard" />
                    <div className="name">tool_credit card</div>
                    <div className="code">&amp;#xe61a;</div>
                    <div className="name">.toolcreditcard</div>
                </li>
                <li>
                    <IcRcln name="toolcreditcardf" />
                    <div className="name">tool_credit card-f</div>
                    <div className="code">&amp;#xe61b;</div>
                    <div className="name">.toolcreditcardf</div>
                </li>
                <li>
                    <IcRcln name="tooldate" />
                    <div className="name">tool_date</div>
                    <div className="code">&amp;#xe61c;</div>
                    <div className="name">.tooldate</div>
                </li>
                <li>
                    <IcRcln name="tooldatef" />
                    <div className="name">tool_date-f</div>
                    <div className="code">&amp;#xe61d;</div>
                    <div className="name">.tooldatef</div>
                </li>
                <li>
                    <IcRcln name="toolearth" />
                    <div className="name">tool_earth</div>
                    <div className="code">&amp;#xe61e;</div>
                    <div className="name">.toolearth</div>
                </li>
                <li>
                    <IcRcln name="toolearthf" />
                    <div className="name">tool_earth-f</div>
                    <div className="code">&amp;#xe61f;</div>
                    <div className="name">.toolearthf</div>
                </li>
                <li>
                    <IcRcln name="toolfb" />
                    <div className="name">tool_fb</div>
                    <div className="code">&amp;#xe620;</div>
                    <div className="name">.toolfb</div>
                </li>
                <li>
                    <IcRcln name="toolfbf" />
                    <div className="name">tool_fb-f</div>
                    <div className="code">&amp;#xe621;</div>
                    <div className="name">.toolfbf</div>
                </li>
                <li>
                    <IcRcln name="toolfbround" />
                    <div className="name">tool_fb-round</div>
                    <div className="code">&amp;#xe622;</div>
                    <div className="name">.toolfbround</div>
                </li>
                <li>
                    <IcRcln name="toolfbroundf" />
                    <div className="name">tool_fb-round-f</div>
                    <div className="code">&amp;#xe623;</div>
                    <div className="name">.toolfbroundf</div>
                </li>
                <li>
                    <IcRcln name="toolfilter" />
                    <div className="name">tool_filter</div>
                    <div className="code">&amp;#xe67b;</div>
                    <div className="name">.toolfilter</div>
                </li>
                <li>
                    <IcRcln name="toolfilterf" />
                    <div className="name">tool_filter-f</div>
                    <div className="code">&amp;#xe67c;</div>
                    <div className="name">.toolfilterf</div>
                </li>
                <li>
                    <IcRcln name="toolflag" />
                    <div className="name">tool_flag</div>
                    <div className="code">&amp;#xe624;</div>
                    <div className="name">.toolflag</div>
                </li>
                <li>
                    <IcRcln name="toolflagf" />
                    <div className="name">tool_flag-f</div>
                    <div className="code">&amp;#xe625;</div>
                    <div className="name">.toolflagf</div>
                </li>
                <li>
                    <IcRcln name="toolfround" />
                    <div className="name">tool_f-round</div>
                    <div className="code">&amp;#xe626;</div>
                    <div className="name">.toolfround</div>
                </li>
                <li>
                    <IcRcln name="toolfroundf" />
                    <div className="name">tool_f-round-f</div>
                    <div className="code">&amp;#xe627;</div>
                    <div className="name">.toolfroundf</div>
                </li>
                <li>
                    <IcRcln name="toolgift" />
                    <div className="name">tool_gift</div>
                    <div className="code">&amp;#xe628;</div>
                    <div className="name">.toolgift</div>
                </li>
                <li>
                    <IcRcln name="toolgiftf" />
                    <div className="name">tool_gift-f</div>
                    <div className="code">&amp;#xe629;</div>
                    <div className="name">.toolgiftf</div>
                </li>
                <li>
                    <IcRcln name="toolground" />
                    <div className="name">tool_g-round</div>
                    <div className="code">&amp;#xe62a;</div>
                    <div className="name">.toolground</div>
                </li>
                <li>
                    <IcRcln name="toolgroundf" />
                    <div className="name">tool_g-round-f</div>
                    <div className="code">&amp;#xe62b;</div>
                    <div className="name">.toolgroundf</div>
                </li>
                <li>
                    <IcRcln name="toolgroup" />
                    <div className="name">tool_group</div>
                    <div className="code">&amp;#xe62c;</div>
                    <div className="name">.toolgroup</div>
                </li>
                <li>
                    <IcRcln name="toolgroupf" />
                    <div className="name">tool_group-f</div>
                    <div className="code">&amp;#xe62d;</div>
                    <div className="name">.toolgroupf</div>
                </li>
                <li>
                    <IcRcln name="toolhome" />
                    <div className="name">tool_home</div>
                    <div className="code">&amp;#xe67d;</div>
                    <div className="name">.toolhome</div>
                </li>
                <li>
                    <IcRcln name="toolhomef" />
                    <div className="name">tool_home-f</div>
                    <div className="code">&amp;#xe67e;</div>
                    <div className="name">.toolhomef</div>
                </li>
                <li>
                    <IcRcln name="tooli" />
                    <div className="name">tool_i</div>
                    <div className="code">&amp;#xe62e;</div>
                    <div className="name">.tooli</div>
                </li>
                <li>
                    <IcRcln name="toolid" />
                    <div className="name">tool_id</div>
                    <div className="code">&amp;#xe62f;</div>
                    <div className="name">.toolid</div>
                </li>
                <li>
                    <IcRcln name="toolidf" />
                    <div className="name">tool_id-f</div>
                    <div className="code">&amp;#xe630;</div>
                    <div className="name">.toolidf</div>
                </li>
                <li>
                    <IcRcln name="toolif" />
                    <div className="name">tool_i-f</div>
                    <div className="code">&amp;#xe631;</div>
                    <div className="name">.toolif</div>
                </li>
                <li>
                    <IcRcln name="toollike" />
                    <div className="name">tool_like</div>
                    <div className="code">&amp;#xe632;</div>
                    <div className="name">.toollike</div>
                </li>
                <li>
                    <IcRcln name="toollikef" />
                    <div className="name">tool_like-f</div>
                    <div className="code">&amp;#xe633;</div>
                    <div className="name">.toollike</div>
                </li>
                <li>
                    <IcRcln name="toollist" />
                    <div className="name">tool_list</div>
                    <div className="code">&amp;#xe634;</div>
                    <div className="name">.toollist</div>
                </li>
                <li>
                    <IcRcln name="toolmail" />
                    <div className="name">tool_mail</div>
                    <div className="code">&amp;#xe635;</div>
                    <div className="name">.toolmail</div>
                </li>
                <li>
                    <IcRcln name="toolmailf" />
                    <div className="name">tool_mail-f</div>
                    <div className="code">&amp;#xe636;</div>
                    <div className="name">.toolmailf</div>
                </li>
                <li>
                    <IcRcln name="toolmap" />
                    <div className="name">tool_map</div>
                    <div className="code">&amp;#xe637;</div>
                    <div className="name">.toolmap</div>
                </li>
                <li>
                    <IcRcln name="toolmapf" />
                    <div className="name">tool_map-f</div>
                    <div className="code">&amp;#xe602;</div>
                    <div className="name">.toolmapf</div>
                </li>
                <li>
                    <IcRcln name="toolmember" />
                    <div className="name">tool_member</div>
                    <div className="code">&amp;#xe638;</div>
                    <div className="name">.toolmember</div>
                </li>
                <li>
                    <IcRcln name="toolmemberf" />
                    <div className="name">tool_member-f</div>
                    <div className="code">&amp;#xe639;</div>
                    <div className="name">.toolmemberf</div>
                </li>
                <li>
                    <IcRcln name="toolmenu" />
                    <div className="name">tool_menu</div>
                    <div className="code">&amp;#xe67f;</div>
                    <div className="name">.toolmenu</div>
                </li>
                <li>
                    <IcRcln name="toolmessage" />
                    <div className="name">tool_message</div>
                    <div className="code">&amp;#xe63a;</div>
                    <div className="name">.toolmessage</div>
                </li>
                <li>
                    <IcRcln name="toolmessagef" />
                    <div className="name">tool_message-f</div>
                    <div className="code">&amp;#xe63b;</div>
                    <div className="name">.toolmessagef</div>
                </li>
                <li>
                    <IcRcln name="toolmyorder" />
                    <div className="name">tool_myorder</div>
                    <div className="code">&amp;#xe63c;</div>
                    <div className="name">.toolmyorder</div>
                </li>
                <li>
                    <IcRcln name="toolmyorderf" />
                    <div className="name">tool_myorder-f</div>
                    <div className="code">&amp;#xe63d;</div>
                    <div className="name">.toolmyorderf</div>
                </li>
                <li>
                    <IcRcln name="toolnext" />
                    <div className="name">tool_next</div>
                    <div className="code">&amp;#xe63e;</div>
                    <div className="name">.toolnext</div>
                </li>
                <li>
                    <IcRcln name="toolpdfdownload" />
                    <div className="name">tool_pdf download</div>
                    <div className="code">&amp;#xe63f;</div>
                    <div className="name">.toolpdfdownload</div>
                </li>
                <li>
                    <IcRcln name="toolpdfdownloadf" />
                    <div className="name">tool_pdf download-f</div>
                    <div className="code">&amp;#xe640;</div>
                    <div className="name">.toolpdfdownloadf</div>
                </li>
                <li>
                    <IcRcln name="toolremind" />
                    <div className="name">tool_remind</div>
                    <div className="code">&amp;#xe641;</div>
                    <div className="name">.toolremind</div>
                </li>
                <li>
                    <IcRcln name="toolremindf" />
                    <div className="name">tool_remind-f</div>
                    <div className="code">&amp;#xe642;</div>
                    <div className="name">.toolremindf</div>
                </li>
                <li>
                    <IcRcln name="toolsearch" />
                    <div className="name">tool_search</div>
                    <div className="code">&amp;#xe680;</div>
                    <div className="name">.toolsearch</div>
                </li>
                <li>
                    <IcRcln name="toolseen" />
                    <div className="name">tool_seen</div>
                    <div className="code">&amp;#xe643;</div>
                    <div className="name">.toolseen</div>
                </li>
                <li>
                    <IcRcln name="toolseenf" />
                    <div className="name">tool_seen-f</div>
                    <div className="code">&amp;#xe644;</div>
                    <div className="name">.toolseenf</div>
                </li>
                <li>
                    <IcRcln name="toolshare" />
                    <div className="name">tool_share</div>
                    <div className="code">&amp;#xe645;</div>
                    <div className="name">.toolshare</div>
                </li>
                <li>
                    <IcRcln name="toolsharef" />
                    <div className="name">tool_share-f</div>
                    <div className="code">&amp;#xe646;</div>
                    <div className="name">.toolsharef</div>
                </li>
                <li>
                    <IcRcln name="toolstaff" />
                    <div className="name">tool_staff</div>
                    <div className="code">&amp;#xe647;</div>
                    <div className="name">.toolstaff</div>
                </li>
                <li>
                    <IcRcln name="toolstafff" />
                    <div className="name">tool_staff-f</div>
                    <div className="code">&amp;#xe648;</div>
                    <div className="name">.toolstafff</div>
                </li>
                <li>
                    <IcRcln name="toolsurvey" />
                    <div className="name">tool_survey</div>
                    <div className="code">&amp;#xe649;</div>
                    <div className="name">.toolsurvey</div>
                </li>
                <li>
                    <IcRcln name="toolsurveyf" />
                    <div className="name">tool_survey-f</div>
                    <div className="code">&amp;#xe603;</div>
                    <div className="name">.toolsurveyf</div>
                </li>
                <li>
                    <IcRcln name="tooltaiwan" />
                    <div className="name">tool_taiwan</div>
                    <div className="code">&amp;#xe64a;</div>
                    <div className="name">.tooltaiwan</div>
                </li>
                <li>
                    <IcRcln name="tooltaiwanf" />
                    <div className="name">tool_taiwan-f</div>
                    <div className="code">&amp;#xe64b;</div>
                    <div className="name">.tooltaiwanf</div>
                </li>
                <li>
                    <IcRcln name="tooltel" />
                    <div className="name">tool_tel</div>
                    <div className="code">&amp;#xe64c;</div>
                    <div className="name">.tooltel</div>
                </li>
                <li>
                    <IcRcln name="tooltelf" />
                    <div className="name">tool_tel-f</div>
                    <div className="code">&amp;#xe64d;</div>
                    <div className="name">.tooltelf</div>
                </li>
                <li>
                    <IcRcln name="tooltop" />
                    <div className="name">tool_top</div>
                    <div className="code">&amp;#xe64e;</div>
                    <div className="name">.tooltop</div>
                </li>
                <li>
                    <IcRcln name="toolvisa" />
                    <div className="name">tool_visa</div>
                    <div className="code">&amp;#xe64f;</div>
                    <div className="name">.toolvisa</div>
                </li>
                <li>
                    <IcRcln name="toolvisaf" />
                    <div className="name">tool_visa-f</div>
                    <div className="code">&amp;#xe650;</div>
                    <div className="name">.toolvisaf</div>
                </li>
                <li>
                    <IcRcln name="trafficbike" />
                    <div className="name">traffic_bike</div>
                    <div className="code">&amp;#xe681;</div>
                    <div className="name">.trafficbike</div>
                </li>
                <li>
                    <IcRcln name="trafficbus" />
                    <div className="name">traffic_bus</div>
                    <div className="code">&amp;#xe682;</div>
                    <div className="name">.trafficbus</div>
                </li>
                <li>
                    <IcRcln name="trafficbusf" />
                    <div className="name">traffic_bus-f</div>
                    <div className="code">&amp;#xe683;</div>
                    <div className="name">.trafficbusf</div>
                </li>
                <li>
                    <IcRcln name="trafficcar" />
                    <div className="name">traffic_car</div>
                    <div className="code">&amp;#xe684;</div>
                    <div className="name">.trafficcar</div>
                </li>
                <li>
                    <IcRcln name="trafficcarf" />
                    <div className="name">traffic_car-f</div>
                    <div className="code">&amp;#xe685;</div>
                    <div className="name">.trafficcarf</div>
                </li>
                <li>
                    <IcRcln name="trafficcruiseship" />
                    <div className="name">traffic_cruise ship</div>
                    <div className="code">&amp;#xe686;</div>
                    <div className="name">.trafficcruiseship</div>
                </li>
                <li>
                    <IcRcln name="trafficcruiseshipf" />
                    <div className="name">traffic_cruise ship-f</div>
                    <div className="code">&amp;#xe687;</div>
                    <div className="name">.trafficcruiseshipf</div>
                </li>
                <li>
                    <IcRcln name="trafficferry" />
                    <div className="name">traffic_ferry</div>
                    <div className="code">&amp;#xe688;</div>
                    <div className="name">.trafficferry</div>
                </li>
                <li>
                    <IcRcln name="trafficferryf" />
                    <div className="name">traffic_ferry-f</div>
                    <div className="code">&amp;#xe689;</div>
                    <div className="name">.trafficferryf</div>
                </li>
                <li>
                    <IcRcln name="traffichsr" />
                    <div className="name">traffic_hsr</div>
                    <div className="code">&amp;#xe690;</div>
                    <div className="name">.traffichsr</div>
                </li>
                <li>
                    <IcRcln name="traffichsrf" />
                    <div className="name">traffic_hsr-f</div>
                    <div className="code">&amp;#xe691;</div>
                    <div className="name">.traffichsrf</div>
                </li>
                <li>
                    <IcRcln name="trafficlittlebus" />
                    <div className="name">traffic_little bus</div>
                    <div className="code">&amp;#xe692;</div>
                    <div className="name">.trafficlittlebus</div>
                </li>
                <li>
                    <IcRcln name="trafficlittlebusf" />
                    <div className="name">traffic_little bus-f</div>
                    <div className="code">&amp;#xe693;</div>
                    <div className="name">.trafficlittlebusf</div>
                </li>
                <li>
                    <IcRcln name="trafficothers" />
                    <div className="name">traffic_others</div>
                    <div className="code">&amp;#xe694;</div>
                    <div className="name">.trafficothers</div>
                </li>
                <li>
                    <IcRcln name="trafficothersf" />
                    <div className="name">traffic_others-f</div>
                    <div className="code">&amp;#xe695;</div>
                    <div className="name">.trafficothersf</div>
                </li>
                <li>
                    <IcRcln name="trafficrv" />
                    <div className="name">traffic_rv</div>
                    <div className="code">&amp;#xe696;</div>
                    <div className="name">.trafficrv</div>
                </li>
                <li>
                    <IcRcln name="trafficrvf" />
                    <div className="name">traffic_rv-f</div>
                    <div className="code">&amp;#xe697;</div>
                    <div className="name">.trafficrvf</div>
                </li>
                <li>
                    <IcRcln name="traffictrafficcruiseshipf" />
                    <div className="name">traffic_traffic_cruise ship-f</div>
                    <div className="code">&amp;#xe698;</div>
                    <div className="name">.traffictrafficcruiseshipf</div>
                </li>
                <li>
                    <IcRcln name="traffictrain" />
                    <div className="name">traffic_train</div>
                    <div className="code">&amp;#xe699;</div>
                    <div className="name">.traffictrain</div>
                </li>
                <li>
                    <IcRcln name="traffictrainf" />
                    <div className="name">traffic_train-f</div>
                    <div className="code">&amp;#xe69a;</div>
                    <div className="name">.traffictrainf</div>
                </li>
                <li>
                    <IcRcln name="traffictram" />
                    <div className="name">traffic_tram</div>
                    <div className="code">&amp;#xe69b;</div>
                    <div className="name">.traffictram</div>
                </li>
                <li>
                    <IcRcln name="traffictramf" />
                    <div className="name">traffic_tram-f</div>
                    <div className="code">&amp;#xe69c;</div>
                    <div className="name">.traffictramf</div>
                </li>
                <li>
                    <IcRcln name="trafficwalk" />
                    <div className="name">traffic_walk</div>
                    <div className="code">&amp;#xe69d;</div>
                    <div className="name">.trafficwalk</div>
                </li>
                <li>
                    <IcRcln name="trafficwalkf" />
                    <div className="name">traffic_walk-f</div>
                    <div className="code">&amp;#xe69e;</div>
                    <div className="name">.trafficwalkf</div>
                </li>
                <li>
                    <IcRcln name="scheduleKaohsiung" />
                    <div className="name">schedule_Kaohsiung</div>
                    <div className="code">&amp;#xe69f;</div>
                    <div className="name">.scheduleKaohsiung</div>
                </li>
                <li>
                    <IcRcln name="scheduleski" />
                    <div className="name">schedule_ski</div>
                    <div className="code">&amp;#xe6a0;</div>
                    <div className="name">.scheduleski</div>
                </li>
                <li>
                    <IcRcln name="scheduleskif" />
                    <div className="name">schedule_ski-f</div>
                    <div className="code">&amp;#xe6a1;</div>
                    <div className="name">.scheduleskif</div>
                </li>
                <li>
                    <IcRcln name="schedulesnowboard" />
                    <div className="name">schedule_snow board</div>
                    <div className="code">&amp;#xe6a2;</div>
                    <div className="name">.schedulesnowboard</div>
                </li>
                <li>
                    <IcRcln name="schedulesnowboardf" />
                    <div className="name">schedule_snow board-f</div>
                    <div className="code">&amp;#xe6a3;</div>
                    <div className="name">.schedulesnowboardf</div>
                </li>
                <li>
                    <IcRcln name="scheduleTaichung" />
                    <div className="name">schedule_Taichung</div>
                    <div className="code">&amp;#xe6a4;</div>
                    <div className="name">.scheduleTaichung</div>
                </li>
                <li>
                    <IcRcln name="scheduletopic" />
                    <div className="name">schedule_topic</div>
                    <div className="code">&amp;#xe6a5;</div>
                    <div className="name">.scheduletopic</div>
                </li>
                <li>
                    <IcRcln name="orderdownload" />
                    <div className="name">order_download</div>
                    <div className="code">&amp;#xe651;</div>
                    <div className="name">.orderdownload</div>
                </li>
                <li>
                    <IcRcln name="orderdownloadf" />
                    <div className="name">order_download-f</div>
                    <div className="code">&amp;#xe652;</div>
                    <div className="name">.orderdownloadf</div>
                </li>
                <li>
                    <IcRcln name="orderedit" />
                    <div className="name">order_edit</div>
                    <div className="code">&amp;#xe653;</div>
                    <div className="name">.orderedit</div>
                </li>
                <li>
                    <IcRcln name="ordereditf" />
                    <div className="name">order_edit-f</div>
                    <div className="code">&amp;#xe654;</div>
                    <div className="name">.ordereditf</div>
                </li>
                <li>
                    <IcRcln name="orderinsurance" />
                    <div className="name">order_insurance</div>
                    <div className="code">&amp;#xe655;</div>
                    <div className="name">.orderinsurance</div>
                </li>
                <li>
                    <IcRcln name="orderinsurancef" />
                    <div className="name">order_insurance-f</div>
                    <div className="code">&amp;#xe656;</div>
                    <div className="name">.orderinsurancef</div>
                </li>
                <li>
                    <IcRcln name="orderotherrules" />
                    <div className="name">order_other rules</div>
                    <div className="code">&amp;#xe657;</div>
                    <div className="name">.orderotherrules</div>
                </li>
                <li>
                    <IcRcln name="orderprint" />
                    <div className="name">order_print</div>
                    <div className="code">&amp;#xe658;</div>
                    <div className="name">.orderprint</div>
                </li>
                <li>
                    <IcRcln name="orderprintf" />
                    <div className="name">order_print-f</div>
                    <div className="code">&amp;#xe659;</div>
                    <div className="name">.orderprintf</div>
                </li>
                <li>
                    <IcRcln name="ordersiting" />
                    <div className="name">order_siting</div>
                    <div className="code">&amp;#xe65a;</div>
                    <div className="name">.ordersiting</div>
                </li>
                <li>
                    <IcRcln name="ordersitingf" />
                    <div className="name">order_siting-f</div>
                    <div className="code">&amp;#xe65b;</div>
                    <div className="name">.ordersitingf</div>
                </li>
                <li>
                    <IcRcln name="planeairplane" />
                    <div className="name">plane_airplane</div>
                    <div className="code">&amp;#xe6a6;</div>
                    <div className="name">.planeairplane</div>
                </li>
                <li>
                    <IcRcln name="planeairplanef" />
                    <div className="name">plane_airplane-f</div>
                    <div className="code">&amp;#xe6a7;</div>
                    <div className="name">.planeairplanef</div>
                </li>
                <li>
                    <IcRcln name="planecabinclass" />
                    <div className="name">plane_cabin</div>
                    <div className="code">&amp;#xe6a8;</div>
                    <div className="name">.planecabinclass</div>
                </li>
                <li>
                    <IcRcln name="planecabinclassf" />
                    <div className="name">planecabinclassf</div>
                    <div className="code">&amp;#xe6a9;</div>
                    <div className="name">.planecabinclassf</div>
                </li>
                <li>
                    <IcRcln name="planelocation" />
                    <div className="name">plane_location</div>
                    <div className="code">&amp;#xe6aa;</div>
                    <div className="name">.planelocation</div>
                </li>
                <li>
                    <IcRcln name="planelocationf" />
                    <div className="name">plane_location-f</div>
                    <div className="code">&amp;#xe6ab;</div>
                    <div className="name">.planelocationf</div>
                </li>
                <li>
                    <IcRcln name="planeticket" />
                    <div className="name">plane-ticket</div>
                    <div className="code">&amp;#xe6ac;</div>
                    <div className="name">.planeticket</div>
                </li>
                <li>
                    <IcRcln name="planeticketf" />
                    <div className="name">plane-ticket-f</div>
                    <div className="code">&amp;#xe6ad;</div>
                    <div className="name">.planeticketf</div>
                </li>
                <li>
                    <IcRcln name="productrecommendf" />
                    <div className="name">product_ recommend-f</div>
                    <div className="code">&amp;#xe6ae;</div>
                    <div className="name">.productrecommendf</div>
                </li>
                <li>
                    <IcRcln name="producttrafficif" />
                    <div className="name">product_ traffic i-f</div>
                    <div className="code">&amp;#xe6af;</div>
                    <div className="name">.producttrafficif</div>
                </li>
                <li>
                    <IcRcln name="productairlineFIT" />
                    <div className="name">product_airline FIT</div>
                    <div className="code">&amp;#xe6b0;</div>
                    <div className="name">.productairlineFIT</div>
                </li>
                <li>
                    <IcRcln name="productairlineFITf" />
                    <div className="name">product_airline FIT-f</div>
                    <div className="code">&amp;#xe6b1;</div>
                    <div className="name">.productairlineFITf</div>
                </li>
                <li>
                    <IcRcln name="productday1" />
                    <div className="name">product_day1</div>
                    <div className="code">&amp;#xe6b2;</div>
                    <div className="name">.productday1</div>
                </li>
                <li>
                    <IcRcln name="productday1f" />
                    <div className="name">product_day1-f</div>
                    <div className="code">&amp;#xe6b3;</div>
                    <div className="name">.productday1f</div>
                </li>
                <li>
                    <IcRcln name="productday2" />
                    <div className="name">product_day2</div>
                    <div className="code">&amp;#xe6b4;</div>
                    <div className="name">.productday2</div>
                </li>
                <li>
                    <IcRcln name="product_day2-f" />
                    <div className="name">product_day2-f</div>
                    <div className="code">&amp;#xe6b5;</div>
                    <div className="name">.product_day2-f</div>
                </li>
                <li>
                    <IcRcln name="productday3" />
                    <div className="name">product_day3</div>
                    <div className="code">&amp;#xe992;</div>
                    <div className="name">.productday3</div>
                </li>
                <li>
                    <IcRcln name="product_day3-f" />
                    <div className="name">product_day3-f</div>
                    <div className="code">&amp;#xe993;</div>
                    <div className="name">.product_day3-f</div>
                </li>
                <li>
                    <IcRcln name="productday4" />
                    <div className="name">product_day4</div>
                    <div className="code">&amp;#xe995;</div>
                    <div className="name">.productday4</div>
                </li>
                <li>
                    <IcRcln name="product_day4-f" />
                    <div className="name">product_day4-f</div>
                    <div className="code">&amp;#xe996;</div>
                    <div className="name">.product_day4-f</div>
                </li>
                <li>
                    <IcRcln name="productday5" />
                    <div className="name">product_day5</div>
                    <div className="code">&amp;#xe6c0;</div>
                    <div className="name">.productday5</div>
                </li>
                <li>
                    <IcRcln name="productday5f" />
                    <div className="name">product_day5-f</div>
                    <div className="code">&amp;#xe6c1;</div>
                    <div className="name">.productday5f</div>
                </li>
                <li>
                    <IcRcln name="productdemosticFIT" />
                    <div className="name">product_demostic FIT</div>
                    <div className="code">&amp;#xe6c2;</div>
                    <div className="name">.productdemosticFIT</div>
                </li>
                <li>
                    <IcRcln name="productdemosticFITf" />
                    <div className="name">product_demostic FIT-f</div>
                    <div className="code">&amp;#xe6c3;</div>
                    <div className="name">.productdemosticFITf</div>
                </li>
                <li>
                    <IcRcln name="productdemosticGIT" />
                    <div className="name">product_demostic GIT</div>
                    <div className="code">&amp;#xe6c4;</div>
                    <div className="name">.productdemosticGIT</div>
                </li>
                <li>
                    <IcRcln name="productdescription" />
                    <div className="name">product_description</div>
                    <div className="code">&amp;#xe6c5;</div>
                    <div className="name">.productdescription</div>
                </li>
                <li>
                    <IcRcln name="productdescriptionf" />
                    <div className="name">product_description-f</div>
                    <div className="code">&amp;#xe6c6;</div>
                    <div className="name">.productdescriptionf</div>
                </li>
                <li>
                    <IcRcln name="productexpiration" />
                    <div className="name">product_expiration</div>
                    <div className="code">&amp;#xe6c7;</div>
                    <div className="name">.productexpiration</div>
                </li>
                <li>
                    <IcRcln name="productexpirationf" />
                    <div className="name">product_expiration-f</div>
                    <div className="code">&amp;#xe6c8;</div>
                    <div className="name">.productexpirationf</div>
                </li>
                <li>
                    <IcRcln name="productfeatures" />
                    <div className="name">product_features</div>
                    <div className="code">&amp;#xe6c9;</div>
                    <div className="name">.productfeatures</div>
                </li>
                <li>
                    <IcRcln name="productfeaturesf" />
                    <div className="name">product_features-f</div>
                    <div className="code">&amp;#xe6ca;</div>
                    <div className="name">.productfeaturesf</div>
                </li>
                <li>
                    <IcRcln name="productforeignFIT" />
                    <div className="name">product_foreign FIT</div>
                    <div className="code">&amp;#xe6cb;</div>
                    <div className="name">.productforeignFIT</div>
                </li>
                <li>
                    <IcRcln name="productforeignFITf" />
                    <div className="name">product_foreign FIT-f</div>
                    <div className="code">&amp;#xe6cd;</div>
                    <div className="name">.productforeignFITf</div>
                </li>
                <li>
                    <IcRcln name="productforeignGIF" />
                    <div className="name">product_foreign GIF</div>
                    <div className="code">&amp;#xe6ce;</div>
                    <div className="name">.productforeignGIF</div>
                </li>
                <li>
                    <IcRcln name="productmeal" />
                    <div className="name">product_meal</div>
                    <div className="code">&amp;#xe6cf;</div>
                    <div className="name">.productmeal</div>
                </li>
                <li>
                    <IcRcln name="productmore" />
                    <div className="name">product_more</div>
                    <div className="code">&amp;#xe6d0;</div>
                    <div className="name">.productmore</div>
                </li>
                <li>
                    <IcRcln name="productmoref" />
                    <div className="name">product_more-f</div>
                    <div className="code">&amp;#xe6d1;</div>
                    <div className="name">.productmoref</div>
                </li>
                <li>
                    <IcRcln name="productneari" />
                    <div className="name">product_near i</div>
                    <div className="code">&amp;#xe6d2;</div>
                    <div className="name">.productneari</div>
                </li>
                <li>
                    <IcRcln name="productnearif" />
                    <div className="name">product_near i-f</div>
                    <div className="code">&amp;#xe6d3;</div>
                    <div className="name">.productnearif</div>
                </li>
                <li>
                    <IcRcln name="productnotice15" />
                    <div className="name">product_notice-15</div>
                    <div className="code">&amp;#xe6d4;</div>
                    <div className="name">.productnotice15</div>
                </li>
                <li>
                    <IcRcln name="productnotice16" />
                    <div className="name">product_notice-16</div>
                    <div className="code">&amp;#xe6d5;</div>
                    <div className="name">.productnotice16</div>
                </li>
                <li>
                    <IcRcln name="productprice" />
                    <div className="name">product_price</div>
                    <div className="code">&amp;#xe6d7;</div>
                    <div className="name">.productprice</div>
                </li>
                <li>
                    <IcRcln name="productpricef" />
                    <div className="name">product_price-f</div>
                    <div className="code">&amp;#xe6d8;</div>
                    <div className="name">.productpricef</div>
                </li>
                <li>
                    <IcRcln name="productrecommend" />
                    <div className="name">product_recommend</div>
                    <div className="code">&amp;#xe6d9;</div>
                    <div className="name">.productrecommend</div>
                </li>
                <li>
                    <IcRcln name="productrefer" />
                    <div className="name">product_refer</div>
                    <div className="code">&amp;#xe6da;</div>
                    <div className="name">.productrefer</div>
                </li>
                <li>
                    <IcRcln name="productreferf" />
                    <div className="name">product_refer-f</div>
                    <div className="code">&amp;#xe6db;</div>
                    <div className="name">.productreferf</div>
                </li>
                <li>
                    <IcRcln name="productrule" />
                    <div className="name">product_rule</div>
                    <div className="code">&amp;#xe6dc;</div>
                    <div className="name">.productrule</div>
                </li>
                <li>
                    <IcRcln name="productrulef" />
                    <div className="name">product_rule-f</div>
                    <div className="code">&amp;#xe6dd;</div>
                    <div className="name">.productrulef</div>
                </li>
                <li>
                    <IcRcln name="productsaferule" />
                    <div className="name">product_safe rule</div>
                    <div className="code">&amp;#xe6de;</div>
                    <div className="name">.productsaferule</div>
                </li>
                <li>
                    <IcRcln name="productsaferulef" />
                    <div className="name">product_safe rule-f</div>
                    <div className="code">&amp;#xe6df;</div>
                    <div className="name">.productsaferulef</div>
                </li>
                <li>
                    <IcRcln name="producttraffici" />
                    <div className="name">product_traffic i</div>
                    <div className="code">&amp;#xe6e0;</div>
                    <div className="name">.producttraffici</div>
                </li>
                <li>
                    <IcRcln name="ticketdepartment" />
                    <div className="name">ticket_department</div>
                    <div className="code">&amp;#xe6e1;</div>
                    <div className="name">.ticketdepartment</div>
                </li>
                <li>
                    <IcRcln name="ticketdepartmentf" />
                    <div className="name">ticket_department-f</div>
                    <div className="code">&amp;#xe6e2;</div>
                    <div className="name">.ticketdepartmentf</div>
                </li>
                <li>
                    <IcRcln name="ticketprepare" />
                    <div className="name">ticket_prepare</div>
                    <div className="code">&amp;#xe6e3;</div>
                    <div className="name">.ticketprepare</div>
                </li>
                <li>
                    <IcRcln name="ticketpreparef" />
                    <div className="name">ticket_prepare-f</div>
                    <div className="code">&amp;#xe6e4;</div>
                    <div className="name">.ticketpreparef</div>
                </li>
                <li>
                    <IcRcln name="ticketticket" />
                    <div className="name">ticket_ticket</div>
                    <div className="code">&amp;#xe6e5;</div>
                    <div className="name">.ticketticket</div>
                </li>
                <li>
                    <IcRcln name="ticketticketf" />
                    <div className="name">ticket_ticket-f</div>
                    <div className="code">&amp;#xe6e6;</div>
                    <div className="name">.ticketticketf</div>
                </li>
                <li>
                    <IcRcln name="hotelbusinesscen" />
                    <div className="name">hotel_business cen</div>
                    <div className="code">&amp;#xe65c;</div>
                    <div className="name">.hotelbusinesscen</div>
                </li>
                <li>
                    <IcRcln name="hotelbusinesscenf" />
                    <div className="name">hotel_business cen-f</div>
                    <div className="code">&amp;#xe65d;</div>
                    <div className="name">.hotelbusinesscenf</div>
                </li>
                <li>
                    <IcRcln name="hoteldomesticBooking" />
                    <div className="name">hotel_domestic Booking</div>
                    <div className="code">&amp;#xe6e7;</div>
                    <div className="name">.hoteldomesticBooking</div>
                </li>
                <li>
                    <IcRcln name="hoteldomesticBookingf1" />
                    <div className="name">hotel_domestic Booking-f1</div>
                    <div className="code">&amp;#xe6e8;</div>
                    <div className="name">.hoteldomesticBookingf1</div>
                </li>
                <li>
                    <IcRcln name="hoteldomesticBookingf2" />
                    <div className="name">hotel_domestic Booking-f2</div>
                    <div className="code">&amp;#xe6e9;</div>
                    <div className="name">.hoteldomesticBookingf2</div>
                </li>
                <li>
                    <IcRcln name="hoteldomesticBookingf" />
                    <div className="name">hotel_domestic Booking-f</div>
                    <div className="code">&amp;#xe6ea;</div>
                    <div className="name">.hoteldomesticBookingf</div>
                </li>
                <li>
                    <IcRcln name="hotelforeignBooking" />
                    <div className="name">hotel_foreign Booking</div>
                    <div className="code">&amp;#xe6eb;</div>
                    <div className="name">.hotelforeignBooking</div>
                </li>
                <li>
                    <IcRcln name="hotelforeignBookingf" />
                    <div className="name">hotel_foreign Booking-f</div>
                    <div className="code">&amp;#xe6ec;</div>
                    <div className="name">.hotelforeignBookingf</div>
                </li>
                <li>
                    <IcRcln name="hotelgym" />
                    <div className="name">hotel_gym</div>
                    <div className="code">&amp;#xe65e;</div>
                    <div className="name">.hotelgym</div>
                </li>
                <li>
                    <IcRcln name="hotelgymf" />
                    <div className="name">hotel_gym-f</div>
                    <div className="code">&amp;#xe65f;</div>
                    <div className="name">.hotelgymf</div>
                </li>
                <li>
                    <IcRcln name="hotelhotel" />
                    <div className="name">hotel_hotel</div>
                    <div className="code">&amp;#xe660;</div>
                    <div className="name">.hotelhotel</div>
                </li>
                <li>
                    <IcRcln name="hotelhotelf" />
                    <div className="name">hotel_hotel-f</div>
                    <div className="code">&amp;#xe661;</div>
                    <div className="name">.hotelhotelf</div>
                </li>
                <li>
                    <IcRcln name="hotellocation" />
                    <div className="name">hotel_location</div>
                    <div className="code">&amp;#xe662;</div>
                    <div className="name">.hotellocation</div>
                </li>
                <li>
                    <IcRcln name="hotellocationf" />
                    <div className="name">hotel_location-f</div>
                    <div className="code">&amp;#xe663;</div>
                    <div className="name">.hotellocationf</div>
                </li>
                <li>
                    <IcRcln name="hotelpark" />
                    <div className="name">hotel_park</div>
                    <div className="code">&amp;#xe664;</div>
                    <div className="name">.hotelpark</div>
                </li>
                <li>
                    <IcRcln name="hotelparkf" />
                    <div className="name">hotel_park-f</div>
                    <div className="code">&amp;#xe665;</div>
                    <div className="name">.hotelparkf</div>
                </li>
                <li>
                    <IcRcln name="hotelpaycheckin" />
                    <div className="name">hotel_pay check-in</div>
                    <div className="code">&amp;#xe6ed;</div>
                    <div className="name">.hotelpaycheckin</div>
                </li>
                <li>
                    <IcRcln name="hotelpaycheckin1" />
                    <div className="name">hotel_pay check-in1</div>
                    <div className="code">&amp;#xe666;</div>
                    <div className="name">.hotelpaycheckin1</div>
                </li>
                <li>
                    <IcRcln name="hotelpaycheckin1f" />
                    <div className="name">hotel_pay check-in1-f</div>
                    <div className="code">&amp;#xe667;</div>
                    <div className="name">.hotelpaycheckin1f</div>
                </li>
                <li>
                    <IcRcln name="hotelpaycheckin2" />
                    <div className="name">hotel_pay check-in2</div>
                    <div className="code">&amp;#xe668;</div>
                    <div className="name">.hotelpaycheckin2</div>
                </li>
                <li>
                    <IcRcln name="hotelpaycheckin2f" />
                    <div className="name">hotel_pay check-in2-f</div>
                    <div className="code">&amp;#xe669;</div>
                    <div className="name">.hotelpaycheckin2f</div>
                </li>
                <li>
                    <IcRcln name="hotelpaycheckinf" />
                    <div className="name">hotel_pay check-in-f</div>
                    <div className="code">&amp;#xe6ee;</div>
                    <div className="name">.hotelpaycheckinf</div>
                </li>
                <li>
                    <IcRcln name="hotelplayground" />
                    <div className="name">hotel_play ground</div>
                    <div className="code">&amp;#xe66a;</div>
                    <div className="name">.hotelplayground</div>
                </li>
                <li>
                    <IcRcln name="hotelplaygroundf" />
                    <div className="name">hotel_play ground-f</div>
                    <div className="code">&amp;#xe675;</div>
                    <div className="name">.hotelplaygroundf</div>
                </li>
                <li>
                    <IcRcln name="hotelproject" />
                    <div className="name">hotel_project</div>
                    <div className="code">&amp;#xe66b;</div>
                    <div className="name">.hotelproject</div>
                </li>
                <li>
                    <IcRcln name="hotelprojectf" />
                    <div className="name">hotel_project-f</div>
                    <div className="code">&amp;#xe66c;</div>
                    <div className="name">.hotelprojectf</div>
                </li>
                <li>
                    <IcRcln name="hotelroom" />
                    <div className="name">hotel_room</div>
                    <div className="code">&amp;#xe66d;</div>
                    <div className="name">.hotelroom</div>
                </li>
                <li>
                    <IcRcln name="hotelroomf" />
                    <div className="name">hotel_room-f</div>
                    <div className="code">&amp;#xe66e;</div>
                    <div className="name">.hotelroomf</div>
                </li>
                <li>
                    <IcRcln name="hotelseaview" />
                    <div className="name">hotel_sea view</div>
                    <div className="code">&amp;#xe66f;</div>
                    <div className="name">.hotelseaview</div>
                </li>
                <li>
                    <IcRcln name="hotelseaviewf" />
                    <div className="name">hotel_sea view-f</div>
                    <div className="code">&amp;#xe670;</div>
                    <div className="name">.hotelseaviewf</div>
                </li>
                <li>
                    <IcRcln name="hotelspa" />
                    <div className="name">hotel_spa</div>
                    <div className="code">&amp;#xe671;</div>
                    <div className="name">.hotelspa</div>
                </li>
                <li>
                    <IcRcln name="hotelspaf" />
                    <div className="name">hotel_spa-f</div>
                    <div className="code">&amp;#xe672;</div>
                    <div className="name">.hotelspaf</div>
                </li>
                <li>
                    <IcRcln name="hotelswimpool" />
                    <div className="name">hotel_swimpool</div>
                    <div className="code">&amp;#xe673;</div>
                    <div className="name">.hotelswimpool</div>
                </li>
                <li>
                    <IcRcln name="hotelwc" />
                    <div className="name">hotel_wc</div>
                    <div className="code">&amp;#xe674;</div>
                    <div className="name">.hotelwc</div>
                </li>
                <li>
                    <IcRcln name="hotelwify" />
                    <div className="name">hotel_wify</div>
                    <div className="code">&amp;#xe676;</div>
                    <div className="name">.hotelwify</div>
                </li>
                <li>
                    <IcRcln name="hotelwirenetwork" />
                    <div className="name">hotel_wire network</div>
                    <div className="code">&amp;#xe677;</div>
                    <div className="name">.hotelwirenetwork</div>
                </li>
                <li>
                    <IcRcln name="hotelwirenetworkf" />
                    <div className="name">hotel_wire network-f</div>
                    <div className="code">&amp;#xe678;</div>
                    <div className="name">.hotelwirenetworkf</div>
                </li>
                <li>
                    <IcRcln name="hotelzoomin" />
                    <div className="name">hotel_zoom in</div>
                    <div className="code">&amp;#xe679;</div>
                    <div className="name">.hotelzoomin</div>
                </li>
                <li>
                    <IcRcln name="hotelzoomout" />
                    <div className="name">hotel_zoom out</div>
                    <div className="code">&amp;#xe67a;</div>
                    <div className="name">.hotelzoomout</div>
                </li>
                <li>
                    <IcRcln name="productbusseat" />
                    <div className="name">product_bus seat</div>
                    <div className="code">&amp;#xe900;</div>
                    <div className="name">.productbusseat</div>
                </li>
                <li>
                    <IcRcln name="productbusdriver" />
                    <div className="name">product_busdriver</div>
                    <div className="code">&amp;#xe901;</div>
                    <div className="name">.productbusdriver</div>
                </li>
                <li>
                    <IcRcln name="productbustourguide" />
                    <div className="name">product_bustourguide</div>
                    <div className="code">&amp;#xe902;</div>
                    <div className="name">.productbustourguide</div>
                </li>
                <li>
                    <IcRcln name="productconceptf" />
                    <div className="name">product_concept-f</div>
                    <div className="code">&amp;#xe903;</div>
                    <div className="name">.productconceptf</div>
                </li>
                <li>
                    <IcRcln name="productdaybgf" />
                    <div className="name">product_daybg-f</div>
                    <div className="code">&amp;#xe904;</div>
                    <div className="name">.productdaybgf</div>
                </li>
                <li>
                    <IcRcln name="planefood" />
                    <div className="name">plane_food</div>
                    <div className="code">&amp;#xe909;</div>
                    <div className="fontclass">.planefood</div>
                </li>
                <li>
                    <IcRcln name="planepackage" />
                    <div className="name">plane_package</div>
                    <div className="code">&amp;#xe90a;</div>
                    <div className="fontclass">.planepackage</div>
                </li>
                <li>
                    <IcRcln name="planepackagef" />
                    <div className="name">plane_package-f</div>
                    <div className="code">&amp;#xe90b;</div>
                    <div className="fontclass">.planepackagef</div>
                </li>
                <li>
                    <IcRcln name="planetax" />
                    <div className="name">plane_tax</div>
                    <div className="code">&amp;#xe90c;</div>
                    <div className="fontclass">.planetax</div>
                </li>
                <li>
                    <IcRcln name="planetaxf" />
                    <div className="name">plane_tax-f</div>
                    <div className="code">&amp;#xe90d;</div>
                    <div className="fontclass">.planetaxf</div>
                </li>
                <li>
                    <IcRcln name="planetime" />
                    <div className="name">plane_time</div>
                    <div className="code">&amp;#xe90e;</div>
                    <div className="fontclass">.planetime</div>
                </li>
                <li>
                    <IcRcln name="planetimef" />
                    <div className="name">plane_time-f</div>
                    <div className="code">&amp;#xe90f;</div>
                    <div className="fontclass">.planetimef</div>
                </li>
                <li>
                    <IcRcln name="planeticket2" />
                    <div className="name">plane-ticket2</div>
                    <div className="code">&amp;#xe910;</div>
                    <div className="fontclass">.planeticket2</div>
                </li>
                <li>
                    <IcRcln name="planeticket2f" />
                    <div className="name">plane-ticket2-f</div>
                    <div className="code">&amp;#xe911;</div>
                    <div className="fontclass">.planeticket2f</div>
                </li>
                <li>
                    <IcRcln name="uspsearch" />
                    <div className="name">usp_search</div>
                    <div className="code">&amp;#xe912;</div>
                    <div className="fontclass">.uspsearch</div>
                </li>
                <li>
                    <IcRcln name="productcheckin" />
                    <div className="name">product_checkin</div>
                    <div className="code">&amp;#xe913;</div>
                    <div className="fontclass">.productcheckin</div>
                </li>
                <li>
                    <IcRcln name="productcheckout" />
                    <div className="name">product_checkout</div>
                    <div className="code">&amp;#xe914;</div>
                    <div className="fontclass">.productcheckout</div>
                </li>
                <li>
                    <IcRcln name="toolgroup" />
                    <div className="name">tool_group</div>
                    <div className="code">&amp;#xe915;</div>
                    <div className="fontclass">.toolgroup</div>
                </li>
                <li>
                    <IcRcln name="valuechange" />
                    <div className="name">value_change</div>
                    <div className="code">&amp;#xe915;</div>
                    <div className="fontclass">.valuechange</div>
                </li>
                <li>
                    <IcRcln name="toolsearch2" />
                    <div className="name">tool_search2</div>
                    <div className="code">&amp;#xe915;</div>
                    <div className="fontclass">.toolsearch2</div>
                </li>
                <li>
                    <IcRcln name="toolpen" />
                    <div className="name">tool_pen</div>
                    <div className="code">&amp;#xe915;</div>
                    <div className="fontclass">.toolpen</div>
                </li>
                <li>
                    <IcRcln name="toolplanemoonf" />
                    <div className="name">tool_plane-moon-f</div>
                    <div className="code">&amp;#xe919;</div>
                    <div className="fontclass">.toolplanemoonf</div>
                </li>
                <li>
                    <IcRcln name="toollockf" />
                    <div className="name">tool_lock-f</div>
                    <div className="code">&amp;#xe91a;</div>
                    <div className="fontclass">.toollockf</div>
                </li>
                <li>
                    <IcRcln name="clock" />
                    <div className="name">clock</div>
                    <div className="code">&amp;#xe91b;</div>
                    <div className="fontclass">.clock</div>
                </li>
                <li>
                    <IcRcln name="document" />
                    <div className="name">document</div>
                    <div className="code">&amp;#xe91c;</div>
                    <div className="fontclass">.document</div>
                </li>
                <li>
                    <IcRcln name="toolmember2f" />
                    <div className="name">tool_member2-f</div>
                    <div className="code">&amp;#xe91d;</div>
                    <div className="fontclass">.toolmember2f</div>
                </li>
            </ul>
        </div>
    ));
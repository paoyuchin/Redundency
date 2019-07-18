import React from 'react';
import BtRcnb from './index.js';
import IcRcln from '../ic_rcln/components/Module';

import { storiesOf } from '@storybook/react';

storiesOf('按鈕樣式 (button)', module)
    .add('bt_rcnb', () => (
        <div>
            <h3>default style</h3>
            <BtRcnb prop="string" basic> 更換飯店 </BtRcnb>
            <hr />
            <h3>Style : size</h3>
            <BtRcnb prop="string" className="m-r-sm" xs> xs更換飯店 </BtRcnb>
            <BtRcnb prop="string" className="m-r-sm" md> md更換飯店 </BtRcnb>
            <BtRcnb prop="string" className="m-r-sm" lg> lg更換飯店 </BtRcnb>
            <h3>Style : color</h3>
            <BtRcnb prop="string" className="m-sm"> Basic </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Orange> Orange </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Yellow> Yellow </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Green> Green </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Teal> Teal </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Blue> Violet </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Purple> Purple </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Pink> Pink </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Brown> Brown </BtRcnb>
            <h3>Style : Inverted</h3>
            <BtRcnb prop="string" className="m-sm" Inverted> Basic </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Orange Inverted> Orange </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Yellow Inverted> Yellow </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Green Inverted> Green </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Teal Inverted> Teal </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Blue Inverted> Violet </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Purple Inverted> Purple </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Pink Inverted> Pink </BtRcnb>
            <BtRcnb prop="string" className="m-sm" Brown Inverted> Brown </BtRcnb>
            <h3>Style : with Icon</h3>
            <BtRcnb prop="string" className="m-sm" Brown Inverted>  <IcRcln name="toolsearch2" size="x15" /> </BtRcnb>
            <h3>Style : radius</h3>
            <BtRcnb prop="string" className="m-sm" Brown Inverted radius>  <IcRcln name="toolsearch2" size="x15" /> </BtRcnb>
            <h3>Style : active</h3>
            <BtRcnb prop="string" className="m-sm" Brown active >  <IcRcln name="toolsearch2" size="x15" /> </BtRcnb>
            <h3>Style : disabled</h3>
            <BtRcnb prop="string" className="m-sm" Brown disabled >  <IcRcln name="toolsearch2" size="x15" /> </BtRcnb>
            <h3>Style : fluid</h3>
            <BtRcnb prop="string" className="m-sm" Brown disabled fluid >  <IcRcln name="toolsearch2" size="x15" /> </BtRcnb>
            <h3>Style : custom style</h3>
            <BtRcnb prop="string" className="m-sm" style={{ border: '2px solid #2B86BA', background: '#F6F6F6', color: '#2B86BA', minWidth: '0' }} >  <IcRcln name="tooladdb" size="x15" /> </BtRcnb>
            <h3>Style : whenClick</h3>
            <BtRcnb prop="string"
                className="m-sm"
                radius
                style={{ border: '2px solid #2B86BA', background: '#F6F6F6', color: '#2B86BA', minWidth: '0' }}
                whenClick={() => console.log('callback')}
            >
                <IcRcln name="tooladdb" size="x15" />
            </BtRcnb>
            <BtRcnb prop="string"
                className="m-sm"
                style={{
                    border: '2px solid #2B86BA',
                    background: '#F6F6F6',
                    color: '#2B86BA',
                    minWidth: '0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minWidth: '200px',
                    justifyContent: 'center'
                }}
                whenClick={() => console.log('callback')}
            >
                <IcRcln name="tooladdb" size="x15" />增加航段
            </BtRcnb>
        </div>
    ));

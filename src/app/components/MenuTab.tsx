import React, {useState} from "react";
import {Radio} from "antd";
import type {RadioChangeEvent} from 'antd';

const tabItems = [
    {
        id: 'research',
        title: 'Research',
        content: 'Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.',
    },
    {
        id: 'plan',
        title: 'Plan',
        content: 'Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.',
    },
    {
        id: 'design',
        title: 'Design',
        content: 'Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.',
    },
];

const MenuTab: React.FC = () => {
    const [active, setActive] = useState('research');
    const onChange = (e: RadioChangeEvent) => {
        setActive(e.target.value)
    };

    return (
        <>
            <Radio.Group onChange={onChange} size="large"
                         style={{display: 'flex'}}>
                {tabItems.map(({id, title}) =>
                    <Radio.Button key={id} value={id} className="no-before" style={{
                        flex: 1,
                        textAlign: 'center',
                        background: active === id ? '#F1F5F9' : '',
                        border: active === id ? ' 1px solid #CBD5E1' : '',
                        color: 'inherit',
                    }}>{title}</Radio.Button>
                )}
            </Radio.Group>
            <div>
                {tabItems.map(({id, content}) => active === id ?
                    <div key={id} className="menu-tab-content">{content}</div> : '')}
            </div>
        </>
    );
};
export default MenuTab;
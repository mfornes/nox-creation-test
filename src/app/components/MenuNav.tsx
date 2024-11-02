import React from "react";
import {Dropdown, MenuProps, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";
import Link from "next/link";

const items1: MenuProps['items'] = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                1st menu item
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                2nd menu item
            </a>
        ),
        key: '2',
    },
];

const menuItems = [
    {
        id: 1,
        title: 'Products',
        items: items1
    },
    {
        id: 2,
        title: 'Solutions',
        items: items1
    },
    {
        id: 3,
        title: 'Services',
        items: items1
    },
    {
        id: 4,
        title: 'Help Center',
        items: items1
    },
    {
        id: 5,
        title: 'Pricing',
    },
];
const MenuNav: React.FC = () => (
    <div className="menu-nav">
        {menuItems.map(({id, title, items}) =>
            items ? (
                <Dropdown key={id} menu={{items}}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            {title}
                            <DownOutlined/>
                        </Space>
                    </a>
                </Dropdown>
            ) : (
                <>
                    <Link key={id} href="#">{title}</Link>
                </>
            )
        )}
    </div>
);
export default MenuNav;
"use client"
import React from 'react';
import {Drawer, Button} from 'antd';
import Link from 'next/link'
import {CloseOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

interface MenuDrawerProps {
    title: string;
    open: boolean;
    onClose: () => void;
    placement: 'left' | 'right' | 'top' | 'bottom';
}

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'products',
        label: 'Products',
        children: [
            {
                key: 'g1',
                label: 'Item 1',
                type: 'group',
                children: [
                    {key: '1', label: 'Option 1'},
                    {key: '2', label: 'Option 2'},
                ],
            },
            {
                key: 'g2',
                label: 'Item 2',
                type: 'group',
                children: [
                    {key: '3', label: 'Option 3'},
                    {key: '4', label: 'Option 4'},
                ],
            },
        ],
    },
    {
        key: 'solutions',
        label: 'Solutions',
        children: [
            {key: '5', label: 'Option 5'},
            {key: '6', label: 'Option 6'},
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {key: '7', label: 'Option 7'},
                    {key: '8', label: 'Option 8'},
                ],
            },
        ],
    },
    {
        key: 'services',
        label: 'Services',
        children: [
            {key: '9', label: 'Option 9'},
            {key: '10', label: 'Option 10'},
            {key: '11', label: 'Option 11'},
            {key: '12', label: 'Option 12'},
        ],
    },
    {
        key: 'help_center',
        label: 'Help Center',
        children: [
            {key: '9', label: 'Option 9'},
            {key: '10', label: 'Option 10'},
            {key: '11', label: 'Option 11'},
            {key: '12', label: 'Option 12'},
        ],
    },
    {
        key: 'pricing',
        label: 'Pricing',
    },
];
const MenuDrawer: React.FC<MenuDrawerProps> = ({title, placement, open, onClose}) => (
    <>
        <Drawer
            rootClassName="md:hidden"
            title={title}
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            extra={
                <div className="flex items-center gap-2.5">
                    <Link href="#">Log In</Link>
                    <Button color="default" variant="link" onClick={onClose} icon={<CloseOutlined/>}/>
                </div>
            }>
            <Menu
                style={{borderInlineEnd: 'none'}}
                mode="inline"
                items={items}
            />
        </Drawer>
    </>
);
export default MenuDrawer;

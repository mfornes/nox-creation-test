"use client"
import React from "react";
import Image from "next/image";
import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import MenuNav from "@/app/components/MenuNav";
import useDrawerStore from "@/app/stores/store";

const Header: React.FC = () => {

    const showDrawer = useDrawerStore((state) => state.showDrawer)

    return (
        <header className="header-container">
            <span className="header-logo">magnifico</span>
            <a className="menu-burger" onClick={showDrawer}>
                <Image
                    src="/icon/menu-outline.svg"
                    width={24}
                    height={24}
                    alt=""
                />
            </a>
            <MenuNav/>
            <div className="header-buttons">
                <Button color="primary" variant="link" rootClassName="px-2" style={{
                    padding: "12px 8px",
                    width: 95,
                    height: 48
                }}>
                    Log In
                </Button>
                <Button type="primary" icon={<ArrowRightOutlined/>} iconPosition={'end'} style={{
                    width: 176,
                    height: 48,
                    borderRadius: 8,
                    padding: 12,
                    border: '2px solid #2563EB',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    textAlign: 'left',
                }}>
                    Sign Up Free
                </Button>
            </div>
        </header>
    );
};
export default Header;
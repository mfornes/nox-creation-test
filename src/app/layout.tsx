"use client"
import React from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import '@/app/globals.css'
import Providers from '@/app/providers/ReactQueryProvider'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MenuDrawer from "@/app/components/MenuDrawer";
import useDrawerStore from "@/app/stores/store";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
})

const RootLayout = ({children}: React.PropsWithChildren) => {
    const showDrawer = useDrawerStore((state) => state.showDrawer)
    const open = useDrawerStore((state) => state.drawer)
    return (
        <html lang="en" className={roboto.variable}>
        <body>
        <Header/>
        <MenuDrawer title={"magnifico"} placement={"left"} open={open} onClose={showDrawer}/>
        <Providers>
            <AntdRegistry>{children}</AntdRegistry>
        </Providers>
        <Footer/>
        </body>
        </html>
    );
};
export default RootLayout;
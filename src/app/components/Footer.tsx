import React from "react";

const Footer: React.FC = () => (
    <>
        <footer
            className="flex flex-col px-4 py-6 gap-4 md:flex-row md:px-20 md:justify-between md:h-[206px] md:items-center">
            <div className="flex flex-col gap-4 md:gap-5 md:flex-row">
            <span
                className="font-roboto text-[18px] text-[#0F172A] font-medium leading-[19.8px] text-left">magnifico</span>
                <span className="font-roboto text-[16px] text-[#475569] font-normal leading-[22.4px] text-left">@ 2023. All rights reserved.</span>
            </div>
            <div className="flex justify-between md:gap-6">
            <span
                className="cursor-pointer font-roboto text-[16px] text-[#475569] font-normal leading-[22.4px] text-left">Terms</span>
                <span
                    className="cursor-pointer font-roboto text-[16px] text-[#475569] font-normal leading-[22.4px] text-left">Privacy</span>
                <span
                    className="cursor-pointer font-roboto text-[16px] text-[#475569] font-normal leading-[22.4px] text-left">Support</span>
                <span
                    className="cursor-pointer font-roboto text-[16px] text-[#475569] font-normal leading-[22.4px] text-left">About</span>
                <span
                    className="cursor-pointer font-roboto text-[16px] text-[#475569] font-normal leading-[22.4px] text-left">Contact</span>
            </div>
        </footer>
    </>
);
export default Footer;
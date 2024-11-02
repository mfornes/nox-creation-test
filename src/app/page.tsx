"use client"
import React from 'react';
import Image from 'next/image'
import {ArrowRightOutlined, MailOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';
import MenuTab from "@/app/components/MenuTab";
import CarouselCard from "@/app/components/CarouselCard";

const Home: React.FC = () => {
    return (
        <>
            <section
                className="flex flex-col md:h-[600px] md:p-20 md:gap-20 md:flex-row gap-8 px-4 py-12 md:border-b md:border-solid md:border-[#E2E8F0]">
                <div className="flex flex-col gap-6 md:py-6">
                    <div className="flex flex-col gap-6">
                        <span
                            className="font-roboto text-left text-[#0F172A] text-[40px] md:text-[72px] font-bold md:font-extrabold leading-[44px] md:leading-[72.2px]">Teach students worldwide</span>
                        <span
                            className="font-roboto text-left text-[#0F172A] md:text-[#475569] text-[16px] md:text-[18px] font-normal leading-[22.4px] md:leading-[28.8px]">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 justify-between">
                        <div className="md:hidden">
                            <Input placeholder="Enter work email" style={{
                                border: '1px solid #CBD5E1',
                                height: 48,
                                width: 177,
                                padding: '12px 16px',
                                borderRadius: 8,
                            }}/>
                        </div>

                        <div className="hidden md:flex flex-1">
                            <Input
                                size="large"
                                placeholder="Enter work email"
                                prefix={<MailOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                            />
                        </div>
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
                    <Image className="md:hidden"
                        src={"/img/Press.svg"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                        alt=""
                    />
                    <Image className="hidden md:block"
                        src={"/img/Press1.svg"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                        alt=""
                    />
                </div>
                <Image className="md:hidden"
                    src={"/img/Desktop.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    alt=""
                />
                <Image className="hidden md:block"
                    src={"/img/Desktop2.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    alt=""
                />
            </section>

            <section className="flex flex-col gap-8 px-4 py-12 md:p-20 md:gap-20 md:flex-row-reverse">
                <div className="flex flex-col gap-6 md:justify-center">
                    <span
                        className="font-roboto text-left text-[#0F172A] text-[40px] md:text-[56px] font-bold leading-[44px] md:leading-[61.6px] md:font-extrabold">
                            Enjoy your time working
                    </span>
                    <span
                        className="font-roboto text-left text-[#0F172A] md:text-[#475569] text-[16px] md:text-[18px] font-normal leading-[22.4px] md:leading-[28.8px]">
                        Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
                    </span>
                    <Button type="link" icon={<ArrowRightOutlined/>} iconPosition={'end'} style={{
                        display: 'flex',
                        justifyContent: 'start',
                        paddingLeft: 0,
                        fontFamily: 'Roboto',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0.5,
                        textAlign: 'left',
                    }}>
                        See how it helped others
                    </Button>
                </div>
                <Image className="md:hidden"
                    src={"/img/Left.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    alt=""
                />
                <Image className="hidden md:block"
                    src={"/img/Left1.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    alt=""
                />
            </section>

            <section className="flex flex-col gap-8 px-4 py-12 md:px-20 md:pt-20 md:pb-40 md:gap-32 md:flex-row">
                <div className="flex flex-col gap-6 md:py-6 md:justify-center">
                    <span
                        className="font-roboto text-left text-[#0F172A] text-[40px] md:text-[56px] font-bold md:font-extrabold leading-[44px] md:leading-[61.6px]">
                            Enjoy your time working
                    </span>
                    <span
                        className="font-roboto text-left text-[#0F172A] md:text-[#475569] text-[16px] md:text-[18px] font-normal leading-[22.4px] md:leading-[28.8px]">
                        Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
                    </span>
                    <div className="hidden md:block">
                        <Button type="link" icon={<ArrowRightOutlined/>} iconPosition={'end'} style={{
                            display: 'flex',
                            justifyContent: 'start',
                            paddingLeft: 0,
                            fontFamily: 'Roboto',
                            fontSize: 16,
                            fontWeight: 500,
                            letterSpacing: 0.5,
                            textAlign: 'left',
                        }}>
                            Check the tools
                        </Button>
                    </div>

                </div>
                <Image
                    src="/img/Right.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto', padding: 80}}
                    alt=""
                />
            </section>

            <section className="md:px-20 md:mb-20">
                <div className="hero flex px-4 py-12 md:justify-end md:p-20 md:rounded-[30px] md:h-[550px] h-[434px]">
                    <div className="md:w-[50%] flex">
                        <div className="flex gap-6 flex-col md:h-[336px] h-[338px]">
                            <span
                                className="font-roboto text-left text-[40px] md:text-[56px] font-bold md:font-extrabold leading-[44px] md:leading-[61.1px]">Problems come and get solved with ease</span>
                            <span
                                className="font-roboto text-left text-[16px] md:text-[18px] font-normal leading-[22.4px] md:leading-[28.8px]">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</span>
                            <Button type="link" icon={<ArrowRightOutlined/>} iconPosition={'end'} style={{
                                display: 'flex',
                                justifyContent: 'start',
                                paddingLeft: 0,
                                fontFamily: 'Roboto',
                                fontSize: 16,
                                fontWeight: 500,
                                letterSpacing: 0.5,
                                textAlign: 'left',
                                color: '#FFFFFF',
                            }}>
                                Improve workflow
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6 py-12 px-4 bg-[#F1F5F9] md:p-20">
                <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                    <span
                        className="font-roboto text-[32px] text-[#0F172A] font-bold text-left leading-[35.2px]">Publications</span>
                    <Button type="link" icon={<ArrowRightOutlined/>} iconPosition={'end'} style={{
                        display: 'flex',
                        justifyContent: 'start',
                        paddingLeft: 0,
                        fontFamily: 'Roboto',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0.5,
                        textAlign: 'left',
                    }}>
                        Discover More Publications
                    </Button>
                </div>
                <CarouselCard/>
            </section>

            <section className="flex flex-col gap-8 px-4 py-12 md:py-40 md:px-20 md:flex-row md:gap-20">
                <div className="flex flex-col gap-8 md:py-6 md:gap-6">
                    <span
                        className="font-roboto text-left text-[#0F172A] text-[40px] md:text-[56px] font-bold md:font-extrabold leading-[44px] md:leading-[61.6px]">
                        Improve workflow
                    </span>
                    <MenuTab/>
                    <Button type="link" icon={<ArrowRightOutlined/>} iconPosition={'end'} style={{
                        display: 'flex',
                        justifyContent: 'start',
                        paddingLeft: 0,
                        fontFamily: 'Roboto',
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: 0.5,
                        textAlign: 'left',
                    }}>
                        Check the tools
                    </Button>
                </div>
                <Image className="md:hidden"
                    src={"/img/Desktop1.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    alt=""
                />
                <Image className="hidden md:block"
                    src={"/img/Left2.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    alt=""
                />
            </section>

            <section className="md:px-20">
                <div className="flex flex-col gap-8 px-4 py-12 text-white md:rounded-[30px] md:p-20 md:gap-6" style={{
                    background: 'linear-gradient(99.45deg, #312E81 0%, #1E40AF 0.01%, #1E3A8A 46%, #701A75 96.97%)',
                }}>
                    <span
                        className="font-roboto text-center text-[40px] md:text-[56px] md:font-extrabold font-bold leading-[44px] md:leading-[61.6px]">
                        Join the community today
                    </span>
                    <span
                        className="font-roboto text-center text-[16px] md:text-[18px] font-normal leading-[22.4px] md:leading-[28.8px]">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</span>
                    <Button className="self-center" type="primary" icon={<ArrowRightOutlined/>} iconPosition={'end'}
                            style={{
                                width: 263,
                                height: 64,
                                borderRadius: 8,
                                padding: '20px 24px',
                                border: '2px solid #2563EB',
                                fontFamily: 'Roboto',
                                fontSize: 24,
                                fontWeight: 700,
                                letterSpacing: 0.5,
                                textAlign: 'left',
                            }}>
                        Sign Up Free
                    </Button>
                </div>
            </section>
        </>
    );
};
export default Home;
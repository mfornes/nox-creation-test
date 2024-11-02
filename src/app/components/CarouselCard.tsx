'use client';
import React from "react";
import {Card} from "antd";
import {useQuery} from '@tanstack/react-query'
import {fetchPosts} from "@/app/services/posts";
import {useMediaQueries} from "@/app/hooks/useMediaQuery";

const CarouselCard: React.FC = () => {
    const {md} = useMediaQueries();
    const {data} = useQuery({queryKey: ['posts'], queryFn: fetchPosts})

    return (
        <>
            <div className="carousel-card">
                {data?.map(({id, title, body}) =>
                    <Card key={id} title={title} bordered={false} style={{
                        flex: md ? '0 0 30%' : '0 0 80%',
                        width: 300,
                        height: 300,
                    }}>
                        <span className="text-wrap">{body}</span>
                    </Card>
                )}
            </div>
        </>
    );
};
export default CarouselCard;
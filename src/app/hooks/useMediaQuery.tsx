"use client"
import {useEffect, useMemo, useState} from "react";

const useMediaQuery = (query: string) => {
    const mediaQuery = useMemo(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query);
        }
        return null;
    }, [query]);
    const [match, setMatch] = useState(mediaQuery?.matches ?? false);

    useEffect(() => {
        if(!mediaQuery) return;
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);

    return match;
};
const useMediaQueries = () => {
    const sm = useMediaQuery("(min-width: 640px)");
    const md = useMediaQuery("(min-width: 768px)");
    const lg = useMediaQuery("(min-width: 1024px)");
    const xl = useMediaQuery("(min-width: 1280px)");
    return {sm, md, lg, xl};
}

export {
    useMediaQuery,
    useMediaQueries
}
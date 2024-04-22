import {useState, useEffect} from 'react';

export const useData = (url) => {
    const [state, setState] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (await fetch(url)).json();
            setState(data);
        };
        dataFetch();
    }, [url]);
    return state;
}
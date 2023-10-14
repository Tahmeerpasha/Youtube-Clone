'use client'
import { fetchDataFromAPI } from '@/utils/api';
import React, { useContext, useEffect, useState } from 'react'
import LeftNav from './LeftNav';
import SearchResultVideo from './SearchResultVideo';
import { Context } from '@/context/contextApi';

const SearchResults = ({ query }) => {
    const [result, setResult] = useState();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById('root')?.classList?.remove('custom-h')
        fetchSearchResults();
    }, [query]);

    const fetchSearchResults = () => {
        setLoading(true)
        return (fetchDataFromAPI(`search/?q=${query}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false)
        }))
    }
    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        return <SearchResultVideo key={item?.video.videoId} video={item?.video} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchResults
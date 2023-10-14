'use client'
import { React, useContext, useEffect } from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'
import Loader from '@/shared/loader'
const Feed = () => {
    const { loading, searchResults } = useContext(Context);

    useEffect(() => {
        document.getElementById('root')?.classList?.remove('custom-h')
    }, [])
    return (
        <div className='flex flex-row h-full [calc(100%-56px)]'>
            {loading && <Loader />}
            <LeftNav />
            <div className="grow relative w-[calc(100%-240px)] h-auto overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-5">
                    {!loading && searchResults.map((item) => {
                        if (item.type !== 'video') return false;
                        return (
                            <VideoCard
                                key={item?.video?.videoId}
                                video={item?.video}
                            >

                            </VideoCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feed
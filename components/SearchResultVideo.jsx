import React from 'react'
import Link from 'next/link'
import VideoLength from '@/shared/VideoLength'
import { BsDot, BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'
const SearchResultVideo = ({ video }) => {
    return (
        <>
            <Link href={`/videoDetails/${video.videoId}`} >
                <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
                    <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
                        <img
                            className="h-full w-full object-fill"
                            src={video?.thumbnails[0]?.url}
                            alt={video?.title}
                        />
                    </div>
                    {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
                    <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
                        <span className='text-lg md:text-2xl font-semibold line-clamp-2 text-white'>
                            {video?.title}
                        </span>
                        <span className='empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4'>{video.descriptionSnippet}</span>
                        <div className="hidden md:flex items-center">
                            <div className="flex items-start mr-3">
                                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                                    <img src={video?.author?.avatar[0]?.url}
                                        className='h-full w-full object-cover'
                                        alt={video?.title} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-sm font-semibold mt-2 text-white/[0.7] flex items-center'>
                                    {video?.author?.title}
                                    {video?.author?.badges[0]?.text === 'Verified' && <BsFillCheckCircleFill className='text-white/[0.5]' />}
                                </span>
                                <div className='text-sm font-semibold flex text-white/[0.7] truncate overflow-hidden'>
                                    <div className="text-white text-xs flex items-center justify-start">
                                        <span className='mr-1'>{abbreviateNumber(video?.stats?.views, 2)} views</span>
                                        <BsDot color='text-white/[0.5]' />
                                        <span>{video?.publishedTimeText}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchResultVideo
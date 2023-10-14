import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill, BsDot } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import VideoLength from '@/shared/VideoLength'
const SuggestionVideo = ({ video }) => {
    return (
        <Link href={`/videoDetails/${video.videoId}`} >
            <div className="flex  mb-3">
                <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl border-slate-800 overflow-hidden">
                    <img
                        className="h-full w-full object-contain"
                        src={video?.thumbnails[0]?.url}
                        alt={video?.title}
                    />
                </div>
                {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
                <div className="ml-2 flex flex-col overflow-hidden text-white">
                    <span className='text-sm lg:text-xs xl:text-sm font-medium text-white line-clamp-2'>{video?.title}</span>
                    <span className="text-white/[0.7] text-sm lg:text-[10px] xl:text-[12px] mt-2 flex font-semibold items-center ">
                        <span className='mr-1 text-white/[0.7] font-normal'>{video?.author?.title}</span>
                        {video?.author?.badges[0]?.text === 'Verified' && <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px]' />}
                    </span>
                    <div className="text-white lg:text-[10px] truncate xl:text-[12px] text-xs flex items-center justify-start">
                        <span className='mr-1'>{abbreviateNumber(video?.stats?.views, 2)} views</span>
                        <BsDot color='text-white/[0.5] truncate' />
                        <span>{video?.publishedTimeText}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SuggestionVideo
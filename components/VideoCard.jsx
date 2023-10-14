import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill, BsDot } from 'react-icons/bs'
import Link from 'next/link'
import VideoLength from '@/shared/VideoLength'
const VideoCard = ({ video }) => {
    return (
        <Link href={`/videoDetails/${video.videoId}`} >
            <div className="flex flex-col mb-8">
                <div className="relative h-48 md:h-56 rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-contain"
                        src={video?.thumbnails[0]?.url}
                        alt={video?.title}
                    />
                </div>
                {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
                <div className="flex text-white mt-3">
                    {/* Channel Avatar */}
                    <div className="flex items-start">
                        <div className="flex  h-9 w-9 rounded-full overflow-hidden">
                            <img src={video?.author?.avatar[0]?.url} alt="video.title" />
                        </div>
                    </div>
                    {/* Video Title */}
                    <div className="ml-2 flex flex-col overflow-hidden text-white">
                        <span className='line-clamp-2'>{video?.title}</span>
                        <span className="text-white text-sm flex font-semibold items-center ">
                            <span className='mr-1 text-white/[0.7] font-normal'>{video?.author?.title}</span>
                            {video?.author?.badges[0]?.text === 'Verified' && <BsFillCheckCircleFill className='text-white/[0.5]' />}
                        </span>
                        <div className="text-white text-xs flex items-center justify-start">
                            <span className='mr-1'>{abbreviateNumber(video?.stats?.views, 2)} views</span>
                            <BsDot color='text-white/[0.5]' />
                            <span>{video?.publishedTimeText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
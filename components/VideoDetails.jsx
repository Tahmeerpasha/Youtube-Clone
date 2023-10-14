'use client'
import { Context } from '@/context/contextApi';
import { fetchDataFromAPI } from '@/utils/api';
import { abbreviateNumber } from 'js-abbreviation-number';
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoIosShareAlt } from 'react-icons/io';
import { BiDislike } from 'react-icons/bi';
import { LiaDownloadSolid } from 'react-icons/lia';
import ReactPlayer from 'react-player';
import SuggestionVideo from './SuggestionVideo';

const VideoDetails = ({ id }) => {
    const [video, setVideo] = useState();
    const { setLoading } = useContext(Context);
    const [relatedVideos, setRelatedVideos] = useState([]);

    const fetchVideoDetails = () => {
        setLoading(true)
        return (fetchDataFromAPI(`video/details/?id=${id}`).then((res) => {
            console.log(res);
            setVideo(res);
            setLoading(false)
        }))
    }
    const fetchRelatedVideos = () => {
        return (fetchDataFromAPI(`video/related-contents/?id=${id}`).then((res) => {
            console.log(res);
            setRelatedVideos(res);
        }))
    }
    useEffect(() => {
        document.getElementById('root')?.classList?.add('custom-h')
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [id])
    return (
        <div className='flex justify-center flex-row h-[(calc(100%-56px)] bg-black'>
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px] xl:h-[500px] rounded-3xl overflow-hidden lg:ml-0 -mr-4 lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width={'100%'}
                            height={'100%'}
                            style={{ backgroundColor: 'black' }}
                            playing={true}
                        />
                    </div>
                    <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {video?.title}
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        src={video?.author?.avatar[0]?.url}
                                        alt={video?.author?.title}
                                        className='h-full w-full object-cover'
                                    />

                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold  items-center">
                                    <span className="text-white text-sm flex font-semibold items-center ">
                                        <span className='mr-1 text-white/[0.7] font-normal'>{video?.author?.title}</span>
                                        {video?.author?.badges[0]?.text === 'Verified' && <BsFillCheckCircleFill className='text-white/[0.5]' />}
                                    </span>
                                </div>
                                <div className="flex text-white/[0.5] text-xs">{video?.author?.stats?.subscribersText}</div>
                            </div>
                            <button className='ml-4 rounded-3xl text-black bg-white font-medium px-4'>Subscribe</button>
                        </div>
                        <div className="flex text-white gap-2  mt-4 md:mt-0">
                            <div className="flex items-center justify-center text-white h-11 w-full px-6 rounded-3xl bg-white/[0.15]">
                                <AiOutlineLike className='text-xl text-white mr-2' />
                                <span>{abbreviateNumber(video?.stats?.likes, 1)} |</span>
                                <BiDislike className='text-xl text-white ml-3 mr-2' />
                            </div>
                            <div className="flex items-center justify-center text-white h-11 px-6 rounded-3xl bg-white/[0.15]">
                                <IoIosShareAlt className='text-xl text-white ' />
                            </div>
                            <div className="flex items-center justify-center text-white px-6 rounded-3xl bg-white/[0.15]">
                                <LiaDownloadSolid className='text-xl text-white  mr-2' /> Download
                            </div>
                        </div>
                    </div>
                </div>
                {/* Suggested Videos */}
                <div className='flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]'>
                    {relatedVideos?.contents?.map((item, index) => {
                        if (item?.type !== 'video') return false;
                        return (
                            <SuggestionVideo
                                key={index}
                                video={item?.video}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default VideoDetails
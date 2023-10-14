import VideoDetails from '@/components/VideoDetails'
import React from 'react'

const page = ({ params }) => {
    return (
        <VideoDetails id={params.id} />
    )
}

export default page
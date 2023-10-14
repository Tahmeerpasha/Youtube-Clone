import SearchResults from '@/components/SearchResults'
import { AppContext } from '@/context/contextApi'
import React from 'react'

const page = ({ params }) => {
    return (
        <AppContext><SearchResults query={params.query} /></AppContext>
    )
}

export default page
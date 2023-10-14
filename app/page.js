import { AppContext } from '@/context/contextApi'

import Header from '@/components/Header'
import Feed from '@/components/Feed'
import LeftNav from '@/components/LeftNav'
import LeftNavMenuItem from '@/components/LeftNavMenuItem'
import SearchResults from '@/components/SearchResults'
import SearchResultVideo from '@/components/SearchResultVideo'
import SuggestionVideo from '@/components/SuggestionVideo'
import VideoCard from '@/components/VideoCard'
import VideoDetails from '@/components/VideoDetails'
import Link from 'next/link'
export default function Home() {
  return (
    <AppContext>
      <div className='flex flex-col h-full'>
        {/* <Header /> */}
        <Link href='/'><Feed /></Link>
        {/* <Link href='/searchResults'><SearchResults /></Link>
        <Link href='/videoDetails'><VideoDetails /></Link> */}
      </div>
    </AppContext>
  )
}

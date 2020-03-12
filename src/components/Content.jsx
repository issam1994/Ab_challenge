import React from 'react'
import TrendingResult from './trending/TrendingResult'
import SearchResult from './search/SearchResult'

import { useStoreState } from 'easy-peasy'

export default function () {
    const searchQuery = useStoreState(state => state.articles.searchQuery)
    if (searchQuery === "") {
        return <TrendingResult />
    } else {
        return <SearchResult />
    }
}


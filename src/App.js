import React from 'react'

import SearchBar from './components/SearchBar'
import ArticlesList from './components/ArticlesList'
import SearchResult from './components/searchResult'
import Spinner from './components/Spinner'

import {useStoreState} from 'easy-peasy'

const Content = () => {
  const searchQuery = useStoreState(state => state.articles.searchQuery)
  if(searchQuery === ""){
    return <ArticlesList />
  } else {
    return <SearchResult />
  }
}

function App() {
  return (
    <div className="text-gray-900 min-h-screen bg-app-gray-light">
      <div className="container mx-auto py-16">
        <SearchBar />
        <Content />
        <Spinner />
      </div>
    </div>
  );
}

export default App;

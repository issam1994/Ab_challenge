import React from 'react'

import SearchBar from './components/SearchBar'
import ArticlesList from './components/ArticlesList'
import Spinner from './components/Spinner'

function App() {
  return (
    <div className="text-gray-900 min-h-screen bg-app-gray-light">
      <div className="container mx-auto py-16">
        <SearchBar />
        <ArticlesList />
        <Spinner />
      </div>
    </div>
  );
}

export default App;

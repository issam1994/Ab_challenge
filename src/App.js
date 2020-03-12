import React from 'react'
import SearchBar from './components/search/SearchBar'
import Spinner from './components/Spinner'
import Content from './components/Content'


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

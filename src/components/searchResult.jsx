import React from 'react'
import ArticlesListItem from './ArticlesListItem'
import { useStoreState } from 'easy-peasy'


export default function () {
    // store data
    const searchResult = useStoreState(state => state.articles.searchResult)

    return (
        <div className="">
            {
                searchResult.map((item, i) => <ArticlesListItem item={item} key={item.id + i} />)
            }
        </div>
    )
}
import React, { useEffect } from 'react'
import ArticlesListItem from './ArticlesListItem'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { hasScrolledToTheEndOfList } from '../utils'

export default function () {
    // store stuff
    const items = useStoreState(state => state.articles.items)
    const fetchItems = useStoreActions(actions => actions.articles.fetchItems)
    const isFetching = useStoreState(state => state.articles.isFetching)
    //scroll event handlers
    const handleScroll = () => {
        if (!isFetching && hasScrolledToTheEndOfList()) {
            console.log("has reached the end of list")
            stopListeningToScrolling()
            //fetchItems accepts a callback
            fetchItems(listenToScrolling)
        }
    }
    const listenToScrolling = () => { document.addEventListener('scroll', handleScroll) }
    const stopListeningToScrolling = () => { document.removeEventListener('scroll', handleScroll) }
    //on mounted, fetch data
    useEffect(() => {
        fetchItems()
        listenToScrolling()
    }, [fetchItems])
    return (
        <div className="">
            {
                items.map((item, i) => <ArticlesListItem item={item} key={item.id + i} />)
            }
        </div>
    )
}
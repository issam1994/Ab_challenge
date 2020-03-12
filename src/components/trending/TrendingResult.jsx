import React, { useEffect } from 'react'
import ArticlesList from '../articles/ArticlesList'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { hasScrolledToTheEndOfList } from '../../utils'

export default function () {
    // store data
    const items = useStoreState(state => state.articles.getItems)
    const fetchItems = useStoreActions(actions => actions.articles.fetchItems)
    const reset = useStoreActions(actions => actions.articles.reset)
    //scroll event handlers
    const handleScroll = () => {
        if (hasScrolledToTheEndOfList()) {
            stopListeningToScrolling()
            //fetchItems accepts a callback
            fetchItems(listenToScrolling)
        }
    }
    const listenToScrolling = () => { document.addEventListener('scroll', handleScroll) }
    const stopListeningToScrolling = () => { document.removeEventListener('scroll', handleScroll) }
    //on mounted, fetch data & start listening to scroll event
    useEffect(() => {
        fetchItems(listenToScrolling)
        //when comp unmounts, we remove its event listener
        return () => {
            stopListeningToScrolling()
            reset()
        }
    }, [fetchItems])
    return (<ArticlesList items={items} />)
}
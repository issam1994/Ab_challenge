import React, { useEffect } from 'react'
import ReposList from '../repos/ReposList'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { hasScrolledToTheEndOfList } from '../../utils'

export default function () {
    // store data
    const items = useStoreState(state => state.trending.items)
    const fetchItems = useStoreActions(actions => actions.trending.fetchItems)
    const reset = useStoreActions(actions => actions.trending.reset)
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
    }, [])
    return (<ReposList items={items} />)
}
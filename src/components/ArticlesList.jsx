import React from 'react'
import ArticlesListItem from './ArticlesListItem'

export default function() {
    const items = [1, 2]
    return (
        <div className="">
            {
                items.map( (item, i) => <ArticlesListItem key={i} />)
            }
        </div>
    )
}
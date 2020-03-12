import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ArticlesListItem from './ArticlesListItem'

export default function ({items = []}) {
    return (
        <div className="">
            <TransitionGroup>
                {
                    items.map((item, i) => (
                        <CSSTransition classNames="fade" timeout={200} key={i}>
                            <ArticlesListItem item={item} index={i} key={item.id + i} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}
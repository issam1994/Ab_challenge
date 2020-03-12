import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ReposListItem from './ReposListItem'

export default function ({items = []}) {
    return (
        <div className="">
            <TransitionGroup>
                {
                    items.map((item, i) => (
                        <CSSTransition classNames="fade" timeout={200} key={i}>
                            <ReposListItem item={item} index={i} key={item.id + i} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}
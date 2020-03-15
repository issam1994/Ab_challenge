import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ReposListItem from './ReposListItem'

export default function ({items = []}) {
    return (
        <div className="">
            <TransitionGroup>
                {
                    items.map((item, i) => (
                        <CSSTransition classNames="scale" timeout={300} key={item.id + i}>
                            <ReposListItem item={item} index={i} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}
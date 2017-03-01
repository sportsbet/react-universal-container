import React, { Component } from 'react'
import { ToDoListProps, Item } from '../common/ToDoListContainer'

export class ToDoListPresentationReact extends React.Component<ToDoListProps, any> {
    render() {
        let rows = this.props.items.forEach((item: Item) => {
            return (
                <button onClick={() =>this.props.didTapItem(item)}>
                    {item.name}
                </button>
            )
        })
        return (
            <div>
                {rows}
            </div>
        )
    }
}
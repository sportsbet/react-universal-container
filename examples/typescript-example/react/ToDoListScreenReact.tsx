import * as React from 'react'
import { ToDoListContainer } from '../common/ToDoListContainer'
import { ToDoListPresentationReact } from './ToDoListPresentationReact'
import { Item } from '../common/ToDoListContainer'
import { items } from '../common/MadeUpDataSource'

export class ToDoListScreenReact extends React.Component<any, any> {
    render() {
        return (
            // <Some other Component that only exists on the Web front end />
            <ToDoListContainer 
                component={ToDoListPresentationReact} 
                items={items}
            />
        )
    }
}
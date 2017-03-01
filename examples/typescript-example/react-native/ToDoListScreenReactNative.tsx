import * as React from 'react'
import { ToDoListContainer } from '../common/ToDoListContainer'
import { ToDoListPresentationReactNative } from './ToDoListPresentationReactNative'
import { Item } from '../common/ToDoListContainer'
import { items } from '../common/MadeUpDataSource'

export class ToDoListScreenReactNative extends React.Component<any, any> {
    render() {
        return (
            // <Some other Component that only exists on the iOS front end />
            <ToDoListContainer 
                component={ToDoListPresentationReactNative} 
                items={items}
            />
        )
    }
}
import * as React from 'react';
import { ToDoListContainer } from '../common/ToDoListContainer';
import { ToDoListPresentationReactNative } from './ToDoListPresentationReactNative';
import { items } from '../common/MadeUpDataSource';
export class ToDoListScreenReactNative extends React.Component {
    render() {
        return (
        // <Some other Component that only exists on the iOS front end />
        React.createElement(ToDoListContainer, { component: ToDoListPresentationReactNative, items: items }));
    }
}

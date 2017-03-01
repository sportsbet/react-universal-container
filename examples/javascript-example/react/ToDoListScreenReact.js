import * as React from 'react';
import { ToDoListContainer } from '../common/ToDoListContainer';
import { ToDoListPresentationReact } from './ToDoListPresentationReact';
import { items } from '../common/MadeUpDataSource';
export class ToDoListScreenReact extends React.Component {
    render() {
        return (
        // <Some other Component that only exists on the Web front end />
        React.createElement(ToDoListContainer, { component: ToDoListPresentationReact, items: items }));
    }
}

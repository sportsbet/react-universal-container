import React from 'react';
export class ToDoListPresentationReact extends React.Component {
    render() {
        let rows = this.props.items.forEach((item) => {
            return (React.createElement("button", { onClick: () => this.props.didTapItem(item) }, item.name));
        });
        return (React.createElement("div", null, rows));
    }
}

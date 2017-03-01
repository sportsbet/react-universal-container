import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
export class ToDoListPresentationReactNative extends React.Component {
    render() {
        let rows = this.props.items.forEach((item) => {
            return (React.createElement(TouchableHighlight, { onPress: () => this.props.didTapItem(item) },
                React.createElement(Text, null, item.name)));
        });
        return (React.createElement(View, null, rows));
    }
}

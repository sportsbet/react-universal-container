import React, { Component } from 'react'
import { ToDoListProps, Item } from '../common/ToDoListContainer'
import { TouchableHighlight, View, Text} from 'react-native'

export class ToDoListPresentationReactNative extends React.Component<ToDoListProps, any> {
    render() {
        let rows = this.props.items.forEach((item: Item) => {
            return (
                <TouchableHighlight onPress={() =>this.props.didTapItem(item)}>
                    <Text>{item.name}</Text>
                </TouchableHighlight>
            )
        })
        return (
            <View>
                {rows}
            </View>
        )
    }
}
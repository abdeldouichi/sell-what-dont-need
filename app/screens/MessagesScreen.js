import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/list-item/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
let initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/abdel.png'),
    }, {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/abdel.png'),
    }
];
export default class MessagesScreen extends Component {
    state={
        messages: initialMessages,
        refreshing: false
    }
    handleDelete = (message_id) => {
        const messages = this.state.messages.filter(m => m.id !== message_id);
        this.setState({...this.state,messages})
    }
    handleOnRefresh = () => {
        this.setState({
                ...this.state,
                messages:  [{
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../assets/abdel.png'),
                }],
            })
            return true;
    }
    render() {
        const {messages, refreshing} = this.state;
        return (
           <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected", item.id)}
                        renderRightActions={() => <ListItemDeleteAction onPress={this.handleDelete.bind(this,item.id)} />}
                    />
                }
                ItemSeparatorComponent= {() =>
                    <ListItemSeparator />
                }
                refreshing={refreshing}
                onRefresh={this.handleOnRefresh}
            />
        </Screen>
        )
    }
}

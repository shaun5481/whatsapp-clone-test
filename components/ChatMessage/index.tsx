import React from "react";
import { Text, View } from "react-native";
import { Message } from "../../types";
import moment from "moment";
import style from './style';

export type ChatMessagesProps = {
    message: Message;
    myId: String,
}

const ChatMessage = (props: ChatMessagesProps) => {
    const {message, myId} = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return(
        <View style={style.container}>
            <View style={[
                style.messageBox,
                {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                  }
                ]}>
            {!isMyMessage() && <Text style={style.name}>{message.user.name}</Text>}
            <Text style={style.message}>{message.content}</Text>
            <Text style={style.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;
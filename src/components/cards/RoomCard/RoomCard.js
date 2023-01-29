import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './RoomCard.style';

function RoomCard({rooms, onPress}) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.room_name}>{rooms.roomName}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default RoomCard;

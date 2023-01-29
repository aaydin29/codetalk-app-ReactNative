import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';

const MessageCard = ({user}) => {
  const formattedDate = formatDistance(parseISO(user.date), new Date(), {
    addSuffix: true,
  });

  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <View style={styles.message_container}>
        <Text style={styles.message}>{user.message}</Text>
      </View>
    </View>
  );
};

export default MessageCard;

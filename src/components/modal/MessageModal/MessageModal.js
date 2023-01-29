import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './MessageModal.style';
import Button from '../../Button';

const RoomModal = ({visible, onClose, onSend, placeholder}) => {
  const [text, setText] = useState('');

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setText}
            multiline
          />
        </View>
        <View style={styles.button_container}>
          <Button text="Send" onPress={() => onSend(text)} theme="secondary" />
        </View>
      </View>
    </Modal>
  );
};

export default RoomModal;

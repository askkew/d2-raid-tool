import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{expanded ? <Icon name="arrowdown" size={17} color="white" /> : <Icon name="arrowup" size={17} color="white" />}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'transparent',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    position: 'absolute',
    top: '100%',
    left: -90,
    right: -90,
    backgroundColor: 'transparent',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    zIndex: 1,
  },
  content: {
    padding: 10,
    color: '#fff',
    width: '100%',
  },
});

export default Accordion;

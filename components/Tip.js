import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { borderRadius, shadow } from '../styles/MainStyles';

const Tip = ({ title, description, hexCode, code_snippet, votes }) => {
  const containerColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.tipBox, containerColor]}>
      <Text style={styles.headerText}>{title} </Text>

      <ScrollView style={styles.scroll} scrollEnabled={true}>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>Description: {description}</Text>
        </View>
        <View style={styles.codeSnippetBox}>
          <Text style={styles.codeSnippetText}>{code_snippet}</Text>
        </View>
      </ScrollView>

      <View>
        <Text> Up Voted {votes.length} Times</Text>
        <TouchableOpacity onPress={() => console.warn('pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tipBox: {
    ...shadow,
    flex: 1,
    height: 300,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontWeight: 'bold',
  },
  descriptionView: {
    ...borderRadius,
  },
  headerText: {
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 4,
    textDecorationLine: 'underline',
  },
  scroll: {
    flexGrow: 1,
  },
  codeSnippetBox: {
    ...borderRadius,
    backgroundColor: 'black',
    padding: 10,
  },
  codeSnippetText: {
    color: 'white',
  },
});

export default Tip;

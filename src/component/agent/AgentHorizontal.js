import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class AgentHorizontal extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={{ uri: 'https://fs.esf.fangdd.com/efab/FkQu8sRMjC89kKQyAXIz_MOEgb1s.png'}} style={styles.agent} />
        <View styles={styles.creditLevel}>
          <Text style={styles.creditLevelText}>信用优秀</Text>
        </View>
        <Text style={styles.name}>王明军</Text>
        <Text style={styles.name}>松江 - 松江新城</Text>
        <Text style={styles.link}>进店逛逛</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  creditLevel: {
    fontSize: 10,
  },
  agent: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
export default AgentHorizontal;
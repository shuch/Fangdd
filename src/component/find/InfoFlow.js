import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import InfoFlowAgent from './InfoFlowAgent';
import InfoFlowPicture from './InfoFlowPicture';
import InfoFlowLink from './InfoFlowLink';
import InfoFlowInteraction from './InfoFlowInteraction';

class InfoFlow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InfoFlowAgent />
        <InfoFlowPicture />
        <View style={styles.infoFlowComment}>
          <Text style={styles.infoFlowCommentText}>新鲜出炉房源照片：上海老同学晒新房，56㎡一室一厅，砸12万装修，附带大露台，快来围观！</Text>
        </View>
        <InfoFlowLink />
        <InfoFlowInteraction />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  infoFlowMedia: {
    // marginVertical: 15,
  },
  infoFlowComment: {

  },
  infoFlowCommentText: {
    fontSize: 16,
    color: '#333',
  },
});

export default InfoFlow;
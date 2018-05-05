import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import color from '../../common/color';

class InfoFlowAgent extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontalContainer]}>
        <Image source={require('../../img/find/agent_avatar.png')} style={styles.agentAvatar} />
        <View style={styles.infoContainer}>
          <View style={[styles.nameContainer, styles.horizontalContainer]}>
            <Text style={styles.name}>大丫头</Text>
            <View style={styles.creditLevelContainer}>
              <Text style={styles.creditLevel}>信用优秀</Text>
            </View>
          </View>
          <Text style={styles.subTitle}>上传房源图片</Text>
        </View>
        <View style={styles.followContainer}>
          <View style={[styles.followBtn, styles.horizontalContainer]}>
            <Image source={require('../../img/find/ic_add.png')} style={styles.plusIcon} />
            <Text style={[styles.followText, styles.primary]}>关注</Text>
          </View>
          <Text style={styles.followNumber}>1人已关注</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
  },
  container: {
  },
  agentAvatar: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    marginLeft: 8,
    flex: 1,
  },
  nameContainer: {
  },
  name: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
    lineHeight: 22,
  },
  creditLevelContainer: {
    backgroundColor: '#E2C380',
    height: 16,
    justifyContent: 'center',
    marginTop: 5,
    paddingHorizontal: 5,
    marginLeft: 5, 
  },
  creditLevel: {
    fontSize: 11,
    color: 'white',
  },
  followBtn: {
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  subTitle: {
    color: color.grey,
    fontSize: 12,
    lineHeight: 17,
  },
  primary: {
    color: color.primary,
  },
  plusIcon: {
    width: 10,
    height: 10,
    marginRight: 3,
  },
  followNumber: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
    lineHeight: 14,
    alignSelf: 'flex-end',
  },
});

export default InfoFlowAgent;
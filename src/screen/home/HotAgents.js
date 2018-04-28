import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Section from '../../component/common/Section';
import HorizontalList from '../../component/common/HorizontalList';
import AgentHorizontal from '../../component/agent/AgentHorizontal';

class HotAgents extends Component {
  render() {
    return (
      <Section more title={'明星网店推荐'}>
        <HorizontalList>
          <AgentHorizontal />
        </HorizontalList>
      </Section> 
    );
  }
}

export default HotAgents;
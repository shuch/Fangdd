import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import color from '../../common/color';

class Tabs extends Component {
  // init state
  state = {
    activeTab: 0,
  }

  render({ children } = this.props) {
    return (
      <View style={styles.container}>
        {/* Tab rows */}
        <View style={styles.tabsContainer}>
          {
            children.map(({ props: { title } }, index) => 
              <TouchableOpacity
                style={[
                  styles.tabContainer,
                  index === this.state.activeTab ? styles.activeTab : [],
                ]}
                onPress={() => { this.setState({ activeTab: index }) }}
                key={title}
              >
                <Text
                  style={[
                    styles.tabText,
                    index === this.state.activeTab ? styles.activeText: [],
                  ]}
                >{title}</Text>
              </TouchableOpacity>
            )
          }
        </View>
        {/* Content */}
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingTop: 32,
    paddingBottom: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginRight: -15,
    borderBottomWidth: 1,
    borderColor: '#CECECE',
  },
  tabContainer: {
    marginRight: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: color.primary,
  },
  tabText: {
    color: '#999',
    fontSize: 18,
    lineHeight: 24,
  },
  activeText: {
    color: '#333',
  },
  contentContainer: {
    flex: 1,
  },
});

export default Tabs;
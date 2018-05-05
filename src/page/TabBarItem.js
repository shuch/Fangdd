import React, { Component } from 'react';
import { Image } from 'react-native';
// import img from '../img/tabbar/home.png';

// type Props = {
//   tintColor: any,
//   normalImage: any,
//   selectedImage: any,
//   focused: boolean,
// }

class TabBarItem extends Component {
  render() {
    return (
      <Image
        source={this.props.focused
              ? this.props.selectedImage
              : this.props.normalImage}
        style={{ width: 24, height: 24 }}
      />
    ); 
  }
}

export default TabBarItem;
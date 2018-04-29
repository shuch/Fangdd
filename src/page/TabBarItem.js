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
        style={{ tintColor: this.props.tintColor, width: 20, height: 20 }}
      />
    ); 
  }
}

export default TabBarItem;
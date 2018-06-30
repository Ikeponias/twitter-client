import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';

import TweetComponent from './TweetComponent';

export default class TweetsListComponent extends Component {
  constructor(props) {
    super(props);
  }

  _keyExtractor = (item, index) => item.id.toString();
  render() {
    const { data, navigator } = this.props;
    console.log(data)
    return (
      <FlatList
        data={data}
        extraData={data}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <TweetComponent item={item} />}
        style={styles.flatList}
      />
    );
  }
}

// 各種デザイン要素
var styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#ffffff',
  },
});

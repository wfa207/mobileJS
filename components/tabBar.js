'use strict'

import React, {Component} from 'react';
import {
  TabBarIOS,
  Text,
  View
} from 'react-native'
import styles from './styles';

import {
  HomeRender,
  MapRender
} from './compiledRender';

var homeIcon = require('../resources/home.png');
var mapIcon = require('../resources/compass.png')
var chartIcon = require('../resources/pie-chart.png');
var settingsIcon = require('../resources/spanner.png');

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'Home'}
    this.centerOnUser = this.centerOnUser.bind(this);
  }

  _setTab(tabName) {
    console.log(this);
    this.setState({selectedTab: tabName});
  }

  _renderContent(text) {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    );
  }

  centerOnUser(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.refs.map.refs.node.animateToCoordinate(position.coords)
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <TabBarIOS
        style={styles.banner}
        unselectedTintColor="#929292"
        tintColor="#232323"
        itemPositioning="fill"
        translucent={true}
        barTintColor="#56545C">
        <TabBarIOS.Item
          title="Home"
          icon={homeIcon}
          selected={this.state.selectedTab === 'Home'}
          onPress={() => this._setTab('Home')}>
          <HomeRender/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Map"
          icon={mapIcon}
          selected={this.state.selectedTab === 'Map'}
          onPress={() => {
            this._setTab('Map')
            this.centerOnUser();
          }}>
          <MapRender/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Chart"
          icon={chartIcon}
          selected={this.state.selectedTab === 'Chart'}
          onPress={() => this._setTab('Chart')}>
          {this._renderContent('Chart Page')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={settingsIcon}
          selected={this.state.selectedTab === 'Settings'}
          onPress={() => this._setTab('Settings')}>
          {this._renderContent('Settings Page')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = TabBar;
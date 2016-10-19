'use strict';

import React, {Component} from 'react';
import {
  AsyncStorage,
  TabBarIOS,
  Text,
  View
} from 'react-native';
import styles from '../styles';
import NavBar from '../NavBar/NavBar';
import HomeButton from '../HomeButton/HomeButton';
import Map from '../Map/Map';
import Log from '../Log/Log';
import Chart from '../Chart/Chart';
import LogRightButtonLogic from '../Log/LogRightButtonLogic';
import Icon from 'react-native-vector-icons/Entypo';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'Home'};
  }

  _setTab(tabName) {
    this.setState({selectedTab: tabName});
  }

  _renderContent(text) {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
        style={styles.banner}
        unselectedTintColor="#929292"
        tintColor="#48BBEC"
        itemPositioning="fill"
        translucent={true}
        barTintColor="#56545C">
        <Icon.TabBarItemIOS
          title="Home"
          iconName="home"
          selectedIconName="home"
          selected={this.state.selectedTab === 'Home'}
          onPress={() => this._setTab('Home')}>
          <NavBar name='Home' component={HomeButton} title='DownTime'/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Map"
          iconName="map"
          selectedIconName="map"
          selected={this.state.selectedTab === 'Map'}
          onPress={() => this._setTab('Map')}>
          <NavBar name='Map' component={Map} title='Map'/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Log"
          iconName="book"
          selectedIconName="book"
          selected={this.state.selectedTab === 'Log'}
          onPress={() => this._setTab('Log')}>
          <NavBar name='Log' component={Log} title='Log' buttonLogic={LogRightButtonLogic}/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Chart"
          iconName="area-graph"
          selectedIconName="area-graph"
          selected={this.state.selectedTab === 'Chart'}
          onPress={() => this._setTab('Chart')}>
          <NavBar name='Chart' component={Chart} title='Chart'/>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

export default TabBar;
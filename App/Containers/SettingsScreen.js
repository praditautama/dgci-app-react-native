import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {
  View,
  Caption,
  Image,
  ListView,
  Tile,
  Title,
  Subtitle,
  TouchableOpacity,
  Screen,
  Divider,
  Row,
  DropDownMenu,
  Icon
} from '@shoutem/ui';
// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }


  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>SettingsScreen Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

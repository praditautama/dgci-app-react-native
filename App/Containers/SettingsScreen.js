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
  Icon,
  Overlay
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
        <Image
          styleName="large-banner"
          source={require('../Images/datsun.jpg')}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">Datsun GO+ Community Indonesia</Title>
            <Overlay styleName="solid-bright">
              <Subtitle styleName="sm-gutter-horizontal">v 2.0</Subtitle>
            </Overlay>
          </Tile>
        </Image>
        
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

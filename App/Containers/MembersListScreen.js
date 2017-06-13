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
import styles from './Styles/MembersListScreenStyle'

class MembersListScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  getUsers(user, rowNumber) {
    return require('../Fixtures/users.json');
  }

  renderRow(user, rowNumber) {
    const { navigate } = this.props.navigation
    //console.log(user)
    rowNumber++

    return (
      <TouchableOpacity onPress={() => navigate('MemberDetailsScreen', user)}>
        <Row>
          <Image
            styleName="small-avatar"
            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
          />
          <View styleName="vertical">
            <Subtitle>{user.full_name}</Subtitle>
            <Caption>{user.chapter}</Caption>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>

        <Divider styleName="line" />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <Screen>
        
        <ListView
          data={this.getUsers()}
          renderRow={(user, sectionID, rowNumber) => this.renderRow(user, rowNumber)}
          removeClippedSubviews={true}
          pageSize={20}
          initialListSize={100}
        />
      </Screen>
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

export default connect(mapStateToProps, mapDispatchToProps)(MembersListScreen)

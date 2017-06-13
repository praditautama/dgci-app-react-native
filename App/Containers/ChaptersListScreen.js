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
import styles from './Styles/ChaptersListScreenStyle'

class ChaptersListScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  
  getChapters(chapter, rowNumber) {
    return require('../Fixtures/chapters.json');
  }

  renderRow(chapter, rowNumber) {
    const { navigate } = this.props.navigation
    console.log(chapter)
    rowNumber++

    return (
      <TouchableOpacity onPress={() => navigate('ChapterDetailsScreen', chapter)}>
        <Row styleName="small">
          <Icon name="pin" />
          <View styleName="vertical">
            <Subtitle>{chapter.name}</Subtitle>
            <Text numberOfLines={1}>{chapter.total_member} anggota</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <Screen>
        
        <ListView
          data={this.getChapters()}
          renderRow={(chapter, sectionID, rowNumber) => this.renderRow(chapter, rowNumber)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ChaptersListScreen)

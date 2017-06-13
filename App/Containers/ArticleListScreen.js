import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import navigatePush from '../Redux/NavigationRedux'
import Api from '../Services/FixtureApi'
import ArticleDetailsScreen from './ArticleDetailsScreen'

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
  NavigationBar,
  Button,
  Text
} from '@shoutem/ui';
// Styles
import styles from './Styles/ArticleListScreenStyle'

class ArticleListScreen extends React.Component {
  static propTypes = {
    onButtonPress: React.PropTypes.func,
  };

  

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  getPosts() {
    return require('../Fixtures/posts.json');
  }

  openArticleDetails = (data) => {
    this.props.navigation.navigate('ArticleDetailsScreen', {data})
  }

  renderRow(post, rowNumber) {
    const { onButtonPress } = this.props;
    const { navigate } = this.props.navigation
    console.log(post)
    rowNumber++

    if (rowNumber > 1) {
      return (
        <TouchableOpacity onPress={() => navigate('ArticleDetailsScreen', post)}>
          <Row>
            <Image
              styleName="small rounded-corners"
              source={{ uri: post.featured_image_url }}
            />
            <View styleName="vertical stretch space-between">
              <Subtitle numberOfLines={3}>{post.title}</Subtitle>
              <View styleName="horizontal space-between">
                <Caption>{post.date}</Caption>
                <Caption>{post.categories[0]}</Caption>
              </View>
            </View>
          </Row>
          <Divider styleName="line" /> 
          
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => navigate('ArticleDetailsScreen', post)}>
            <Tile>
              <Image
                styleName="large-banner"
                source={{ uri: post.featured_image_url }} 
              />
              <View styleName="content">
                <Title>{post.title}</Title>
                <View styleName="horizontal space-between">
                  <Caption>{post.date}</Caption>
                  <Caption>{post.categories[0]}</Caption>
                </View>
              </View>
            </Tile>
            <Divider styleName="line" />
        </TouchableOpacity>
        
      )
    }   
  }

  render() {
    let rowNumber = 0;
    return (
      <Screen>
        
        <ListView
          data={this.getPosts()}
          renderRow={(post, sectionID, rowNumber) => this.renderRow(post, rowNumber)}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: (post) => {
    /*
    dispatch(navigatePush({
      key: 'PostDetails',
      title: 'Details',
    }, { post }));
    */
    console.log(post)
    console.log(this.props)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListScreen)

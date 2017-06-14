import React from 'react'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { StyleSheet } from 'react-native'
import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
  Tile,
  Screen,
  Caption,
  Lightbox,
  RichMedia
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

import HTMLView from 'react-native-htmlview';

// Styles
import styles from './Styles/ArticleDetailsScreenStyle'

export default class ArticleDetailsScreen extends React.Component {
  //constructor (props) {
  //   super(props)
  //   this.state = {}
  //}

  static propTypes = {
    post: React.PropTypes.object,
  };

  

  render() {
     const post  = this.props.navigation.state.params
     let htmlContent = post.content
     console.log(this.props.navigation.state.params)
     console.log(post)
    const webViewStyle = StyleSheet.create({ 
        p: {
            //margin
        }
    });
    return (
      <Screen style={styles.container.marginTop}>

        <ScrollView>
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
          
          <Screen styleName="paper">
            <View styleName="multiline">
              
              <RichMedia
                body={htmlContent}
              />
            </View>

            <Divider styleName="line" />

            <Row>
              <Image
                styleName="small-avatar"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
              />
              <View styleName="vertical">
                <Subtitle>Penulis</Subtitle>
                <Text numberOfLines={1}>{post.author}</Text>
              </View>
              <Icon styleName="disclosure" name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            


          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}
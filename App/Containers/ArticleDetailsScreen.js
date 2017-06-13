import React from 'react'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
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
  Caption
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
            
          
          <Screen styleName="paper">
            <View style={styles.mainContainer}>
              <HTMLView
                value={htmlContent}
              />
            </View>

            <Divider styleName="line" />

            <Row>
              <Icon name="laptop" />
              <View styleName="vertical">
                <Subtitle>Visit webpage</Subtitle>
                <Text numberOfLines={1}>http://www.adfad.com</Text>
              </View>
              <Icon styleName="disclosure" name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="pin" />
              <View styleName="vertical">
                <Subtitle>Address</Subtitle>
                <Text numberOfLines={1}>alamat</Text>
              </View>
              <Icon styleName="disclosure" name="right-arrow" />
            </Row>

            <Divider styleName="line" />

            <Row>
              <Icon name="email" />
              <View styleName="vertical">
                <Subtitle>Email</Subtitle>
                <Text numberOfLines={1}>email@tema.com</Text>
              </View>
            </Row>

            <Divider styleName="line" />
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}
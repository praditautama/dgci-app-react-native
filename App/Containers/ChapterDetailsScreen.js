import React from 'react'
import { ScrollView, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChapterDetailsScreenStyle'
import { Stage } from './Stage';
import {
  View,
  HorizontalPager,
  Tile,
  Image,
  Subtitle,
  Caption,
} from '@shoutem/ui';

class ChapterDetailsScreen extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const window = Dimensions.get('window');
    return (
          <View styleName="vertical collapsible">
            <Stage title="Horizontal Pager (with tiles as content)">
              <View style={{ height: 250, width: window.width }}>
                <HorizontalPager
                  data={[
                    { description: 'description', title: 'When The Morning Dawns - DJ Silver Sample Album', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }},
                    { description: 'description', title: 'When The Morning Dawns', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-2.png' }},
                    { description: 'description', title: 'DJ Silver Sample Album', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }},
                    { description: 'description', title: 'When The Morning Dawns - DJ Silver Sample Album', source: { uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }},
                  ]}
                  renderPage={(page) => {
                    return (
                      <Image
                        styleName="large-wide"
                        source={{ uri: page.source.uri }}
                      >
                        <Tile>
                          <Subtitle numberOfLines={2}>{page.title}</Subtitle>
                          <Caption>{page.description}</Caption>
                        </Tile>
                      </Image>
                    );
                  }}
                  showNextPage={true}
                  pageMargin={0}
                />
              </View>
            </Stage>
          </View>

          
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

export default connect(mapStateToProps, mapDispatchToProps)(ChapterDetailsScreen)

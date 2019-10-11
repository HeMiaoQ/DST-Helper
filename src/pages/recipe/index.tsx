import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import DISHES from '../../database/dishes'
import dishPictures from '../../assets/image/dishes'

interface dishItem {
  id: number,
  Picture: string,
  Name: string,
  enName: string,
  property: {
    Health: number,
    Hunger: number,
    Sanity: number,
    Perish: number
  }
}

interface State {
  dishesList: dishItem[]
}

export default class Index extends Component<{}, State> {
  config: Config = {
    navigationBarTitleText: '饥荒小助手'
  }

  constructor () {
    super()
    this.state = {
      dishesList: []
    } as State
  }

  componentWillMount () {
    this.setState({
      dishesList: DISHES
    })
  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  sortByProperty = (property, rule) => {
    this.setState({
      dishesList: DISHES.sort(this.compare(property, rule))
    })
  }

  compare (property, rule) {
    return function (a, b) {
      let value1 = a.property[property]
      let value2 = b.property[property]
      if (rule === 'up') {
        return value1 - value2
      } else {
        return value2 - value1
      }
    }
  }

  render () {
    return (
      <View className='index'>
        <View className='sort-bar-wrap'>
          {/*<View className='sort-bar' onClick={this.sortByProperty.bind(this, 'health','up')}>health升序</View>*/}
          {/*<View className='sort-bar' onClick={this.sortByProperty.bind(this, 'health','down')}>health降序</View>*/}
          {/*<View className='sort-bar' onClick={this.sortByProperty.bind(this, 'hunger','up')}>hunger升序</View>*/}
          {/*<View className='sort-bar' onClick={this.sortByProperty.bind(this, 'hunger','down')}>hunger降序</View>*/}
        </View>
        <View>
          {this.state.dishesList.map((item, index) => (
            <View key={index} className='flex justify-content-start'>
              <Image src={dishPictures[item.Picture]} className='dishes-img'></Image>
              {/*<Image src='/static/image/dishes/F_shark_fin_soup.png'></Image>*/}
              {/*<Image src={`../../assets/image/dishes/${item.Picture}.png`}></Image>*/}
              <View>
                <View className='flex'>
                  <Text>{item.property.Health}</Text>
                  <Text>{item.property.Hunger}</Text>
                  <Text>{item.property.Sanity}</Text>
                  <Text>{item.property.Perish}</Text>
                </View>
                <View>{item.Name}{item.enName}</View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}


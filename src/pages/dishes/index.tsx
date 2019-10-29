import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import DISHES from '../../database/dishes'
import dishPictures from '../../assets/image/dishes/index'

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

  state = {
    dishesList: DISHES.sort(this.compare('Health', 'down'))
  }

  componentWillMount () {}

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

  showRecipe = (id): void => {
    Taro.navigateTo({
      url: `/pages/recipe/index?id=${id}`
    })
  }

  render () {
    return (
      <View className='index'>
        <View>
          <View onClick={this.sortByProperty.bind(this, 'Health', 'up')}>Health up</View>
          <View onClick={this.sortByProperty.bind(this, 'Health', 'down')}>Health down</View>
          <View onClick={this.sortByProperty.bind(this, 'Hunger', 'up')}>Hunger up</View>
          <View onClick={this.sortByProperty.bind(this, 'Hunger', 'down')}>Hunger down</View>
          <View onClick={this.sortByProperty.bind(this, 'Sanity', 'up')}>Sanity up</View>
          <View onClick={this.sortByProperty.bind(this, 'Sanity', 'down')}>Sanity down</View>
        </View>

        <View>
          {this.state.dishesList.map((item, index) => (
            <View key={index} className='flex justify-content-start' onClick={this.showRecipe.bind(this, item.id)}>
              <Image src={dishPictures[item.Picture]} className='dishes-img'></Image>
              <View className='info-wrap'>
                <View className='dishes-name'>{item.Name}</View>
                <View className='dishes-name'>{item.enName}</View>
                <View className='flex property-wrap'>
                  <Text>{item.property.Health}</Text>
                  <Text>{item.property.Hunger}</Text>
                  <Text>{item.property.Sanity}</Text>
                  <Text>{item.property.Perish}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}


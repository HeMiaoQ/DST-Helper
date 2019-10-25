import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import DISHES from '../../database/dishes'
import dishPictures from '../../assets/image/dishes'
import foodsPicture from '../../assets/image/foods'
import { health, hunger, sanity } from '../../assets/image'

interface forbidItem {
  desc: string,
  name: string
}

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
  },
  recipe: string[],
  forbid: forbidItem[],
  Introduce: string
}

interface State {
  dishesData: dishItem
}

export default class Index extends Component<{}, State> {
  config: Config = {
    navigationBarTitleText: '菜谱'
  }

  state = {
    dishesData: DISHES[0]
  } as State

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { dishesData } = this.state
    return (
      <View className='index'>
        <View className='dishes-info'>
          <Image src={dishPictures[dishesData.Picture]}></Image>
          <View>
            <View>中文名</View>
            <View>英文名</View>
            <View className='dishes-property flex justify-content-start'>
              <View className='flex justify-content-start'>
                <Image src={health}></Image>
                <View>10</View>
              </View>
              <View className='flex justify-content-start'>
                <Image src={hunger}></Image>
                <View>10</View>
              </View>
              <View className='flex justify-content-start'>
                <Image src={sanity}></Image>
                <View>10</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


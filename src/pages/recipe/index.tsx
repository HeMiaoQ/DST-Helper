import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import { ImgWrap } from '../components/index'

import DISHES from '../../database/dishes'
import dishPictures from '../../assets/image/dishes/index'
import foodsPicture from '../../assets/image/foods'
import { health, hunger, sanity, perish } from '../../assets/image/index'

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
  recipe: string[][],
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
    dishesData: {} as dishItem
  }

  componentWillMount () {
    const { id } = this.$router.params
    this.setState({
      dishesData: DISHES.find((item) => item.id === +id)
    } as State)
  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { dishesData } = this.state
    return (
      <View className='index'>
        <View className='dishes-info flex justify-content-start'>
          <ImgWrap width={235} height={235} img={dishPictures[dishesData.Picture]}></ImgWrap>
          <View>
            <View>{dishesData.Name}</View>
            <View>{dishesData.enName}</View>
            <View className='dishes-property flex justify-content-start'>
              <View className='property-item'>
                <Image className='property-img' src={health}></Image>
                <View>{dishesData.property.Health}</View>
              </View>
              <View className='property-item'>
                <Image className='property-img' src={hunger}></Image>
                <View>{dishesData.property.Hunger}</View>
              </View>
              <View className='property-item'>
                <Image className='property-img' src={sanity}></Image>
                <View>{dishesData.property.Sanity}</View>
              </View>
              <View className='property-item'>
                <Image className='property-img' src={perish}></Image>
                <View>{dishesData.property.Perish}</View>
              </View>
            </View>
          </View>
        </View>
        <View>
          {dishesData.recipe.map((item, index) => (
            <View key={index} className='flex justify-content-start'>
              <ImgWrap width={120} height={120} img={foodsPicture[item[0]]}></ImgWrap>
              <ImgWrap width={120} height={120} img={foodsPicture[item[1]]}></ImgWrap>
              <ImgWrap width={120} height={120} img={foodsPicture[item[2]]}></ImgWrap>
              <ImgWrap width={120} height={120} img={foodsPicture[item[3]]}></ImgWrap>
            </View>
          ))}
        </View>
        <View>
          <View>禁忌</View>
          {dishesData.forbid.length && <View className='flex justify-content-start'>
            {dishesData.forbid.map((item, index) => (
              <View key={index} className='flex justify-content-start'>
                <Text>{item.desc}</Text>
                <Image className='no-bg-img' src={foodsPicture[item.name]}></Image>
              </View>
            ))}
          </View>}
          {!dishesData.forbid.length && <View>无</View>}
        </View>
        <View>{dishesData.Introduce}</View>
      </View>
    )
  }
}


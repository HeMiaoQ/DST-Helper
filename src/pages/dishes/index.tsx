import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

import { ImgWrap } from '../components/index'

import DISHES from '../../database/dishes'
import dishPictures from '../../assets/image/dishes/index'
import { health, hunger, sanity, perish, CP_CrockPot, tabBg } from '../../assets/image/index'

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
  dishesList: dishItem[],
  sortType: string
}

export default class Index extends Component<{}, State> {
  config: Config = {
    navigationBarTitleText: '饥荒小助手'
  }

  state = {
    dishesList: DISHES.sort(this.compare('Health', 'down')),
    sortType: 'HealthDown'
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  sortByProperty = (property, rule) => {
    this.setState({
      dishesList: DISHES.sort(this.compare(property, rule)),
      sortType: `${property}${rule}`
    })
  }

  compare (property, rule) {
    return function (a, b) {
      let value1 = a.property[property]
      let value2 = b.property[property]
      if (rule === 'Up') {
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
    const classHealthUp = `iconfont icon-arrow-up ${this.state.sortType === 'HealthUp' ? 'checked' : ''}`
    const classHealthDown = `iconfont icon-arrow-down ${this.state.sortType === 'HealthDown' ? 'checked' : ''}`
    const classHungerUp = `iconfont icon-arrow-up ${this.state.sortType === 'HungerUp' ? 'checked' : ''}`
    const classHungerDown = `iconfont icon-arrow-down ${this.state.sortType === 'HungerDown' ? 'checked' : ''}`
    const classSanityUp = `iconfont icon-arrow-up ${this.state.sortType === 'SanityUp' ? 'checked' : ''}`
    const classSanityDown = `iconfont icon-arrow-down ${this.state.sortType === 'SanityDown' ? 'checked' : ''}`
    const classPerishUp = `iconfont icon-arrow-up ${this.state.sortType === 'PerishUp' ? 'checked' : ''}`
    const classPerishDown = `iconfont icon-arrow-down ${this.state.sortType === 'PerishDown' ? 'checked' : ''}`
    return (
      <View className='index'>
        <View className='tab-wrap'>
          <Image className='tab-bg' src={tabBg}></Image>
          <View className='sort-tab flex justify-content-start'>
            <Image className='smart-pot' src={CP_CrockPot}></Image>
            <View className='sort-item-wrap flex justify-content-start'>
              <View className='sort-item flex'>
                <Image className='property-img' src={health}></Image>
                <View className='flex justify-content-start flex-flow-column'>
                  <View className={classHealthUp} onClick={this.sortByProperty.bind(this, 'Health', 'Up')}></View>
                  <View className={classHealthDown} onClick={this.sortByProperty.bind(this, 'Health', 'Down')}></View>
                </View>
              </View>
              <View className='sort-item flex'>
                <Image className='property-img' src={hunger}></Image>
                <View className='flex justify-content-start flex-flow-column'>
                  <View className={classHungerUp} onClick={this.sortByProperty.bind(this, 'Hunger', 'Up')}></View>
                  <View className={classHungerDown} onClick={this.sortByProperty.bind(this, 'Hunger', 'Down')}></View>
                </View>
              </View>
              <View className='sort-item flex'>
                <Image className='property-img' src={sanity}></Image>
                <View className='flex justify-content-start flex-flow-column'>
                  <View className={classSanityUp} onClick={this.sortByProperty.bind(this, 'Sanity', 'Up')}></View>
                  <View className={classSanityDown} onClick={this.sortByProperty.bind(this, 'Sanity', 'Down')}></View>
                </View>
              </View>
              <View className='sort-item flex'>
                <Image className='property-img' src={perish}></Image>
                <View className='flex justify-content-start flex-flow-column'>
                  <View className={classPerishUp} onClick={this.sortByProperty.bind(this, 'Perish', 'Up')}></View>
                  <View className={classPerishDown} onClick={this.sortByProperty.bind(this, 'Perish', 'Down')}></View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          {this.state.dishesList.map((item, index) => (
            <View key={index} className='flex justify-content-start' onClick={this.showRecipe.bind(this, item.id)}>
              <ImgWrap img={dishPictures[item.Picture]}></ImgWrap>
              <View className='info-wrap'>
                <View className='dishes-name'>{item.Name}</View>
                <View className='dishes-enName'>{item.enName}</View>
                <View className='flex property-wrap'>
                  <Text className='health-text'>{item.property.Health}</Text>
                  <Text className='hunger-text'>{item.property.Hunger}</Text>
                  <Text className='sanity-text'>{item.property.Sanity}</Text>
                  <Text className='perish-text'>{item.property.Perish}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}


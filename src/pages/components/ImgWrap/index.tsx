import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import { imgBg, unknown } from '../../../assets/image/index'

interface Props {
  className?: string,
  img: string,
  width?: number,
  height?: number,
}

export default class extends Component<Props, {}> {
  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    className: '',
    img: unknown,
    width: 200,
    height: 200
  }

  render () {
    const className = `img-wrap ${this.props.className}`
    const style = {
      width: Taro.pxTransform(this.props.width as number),
      height: Taro.pxTransform(this.props.height as number)
    }
    return (
      <View className={className} style={style}>
        <Image className='img-bg' src={imgBg}></Image>
        <Image className='content-img' src={this.props.img}></Image>
      </View>
    )
  }
}


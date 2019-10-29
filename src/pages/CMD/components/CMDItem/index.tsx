import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

interface Props {
  data: {
    name: string,
    cmd: string
  }
}

export default class extends Component<Props, {}> {
  static options = {
    addGlobalClass: true
  }

  state = {
    showDetail: false
  }

  handleTitleClick = (): void => {
    this.setState({
      showDetail: !this.state.showDetail
    })
  }

  copy = (): void => {
    Taro.setClipboardData({
      data: this.props.data.cmd
    })
  }

  render () {
    const iconRotate: string = this.state.showDetail ? 'rotate-180' : ''
    return (
      <View>
        <View className='cmd-wrap cmd-title-wrap flex justify-content-between' onClick={this.handleTitleClick.bind(this)}>
          <View>{this.props.data.name}</View>
          <View className={`iconfont icon-ic-arrowx1 ${iconRotate}`}></View>
        </View>
        {this.state.showDetail && <View className='cmd-wrap cmd-text-wrap flex justify-content-between'>
          <View className='cmd-text'>{this.props.data.cmd}</View>
          <AtButton className='mini-button' size='small' type='primary' onClick={this.copy.bind(this)}>复制</AtButton>
        </View>}
      </View>
    )
  }
}


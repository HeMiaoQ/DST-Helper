import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'

import { AtTabs, AtTabsPane  } from 'taro-ui'
import { CMDItem } from './components/index'

import { TAB_LIST, CMD, MATERIALS, TOOL, WEAPON, WARE, BUILDING, FOOD, PLANT, ANIMAL } from '../../database/cmd'

interface State {
  current: number
}

export default class Index extends Component<{}, State> {
  config: Config = {
    navigationBarTitleText: '控制台命令'
  }

  state = {
    current: 0
  } as State

  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (index) {
    this.setState({
      current: index
    })
  }

  render () {
    return (
      <AtTabs
        scroll
        current={this.state.current}
        tabList={TAB_LIST}
        onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0}>
          {CMD.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          {MATERIALS.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          {TOOL.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          {WEAPON.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          {WARE.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
          {BUILDING.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={6}>
          {FOOD.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={7}>
          {PLANT.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={8}>
          {ANIMAL.map((item, index) => (
            <CMDItem data={item} key={index}></CMDItem>
          ))}
        </AtTabsPane>
      </AtTabs>
    )
  }
}


import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/dishes/index'

import './app.scss'
import './assets/iconfont/iconfont.css'
import './taroUI.scss'

class App extends Component {

  config: Config = {
    pages: [
      'pages/dishes/index',
      'pages/recipe/index',
      'pages/CMD/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '饥荒小助手',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#d41919",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
        pagePath: "pages/dishes/index",
        text: "菜谱",
        // iconPath: "./assets/image/smartpot.png",
        // selectedIconPath: "./assets/image/smartpot.png"
        },
        {
          pagePath: "pages/CMD/index",
          text: "命令",
          // iconPath: "./assets/images/tabBar/sell.png",
          // selectedIconPath: "./assets/images/tabBar/sell.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

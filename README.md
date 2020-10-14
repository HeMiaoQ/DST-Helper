# DST-Helper
饥荒助手微信小程序。

## 体验
![小程序码](./src/assets/image/qrCode.jpg)

## 开发
```
│  .editorconfig
│  .eslintrc
│  .gitignore
│  global.d.ts
│  package.json
│  project.config.json
│  README.md
│  tsconfig.json
│
├─config
│
└─src
    │  app.scss
    │  app.tsx
    │  index.html
    │  taroUI.scss
    │
    ├─assets
    │  ├─iconfont           // 阿里iconfont
    │  │
    │  └─image              // 图片
    │      │
    │      ├─dishes         // 菜色图片
    │      │    
    │      ├─foods          // 食材图片
    │      │    
    │      └─seeds          // 种子图片
    │
    ├─database              // 数据库
    │      ├─cmd.ts         // 命令行数据
    │      │    
    │      └─dishes.ts      // 菜谱数据
    │
    └─pages                 // 页面
        ├─CMD               // 命令行页面
        │
        ├─components        // 公共组件
        │
        ├─dishes            // 菜谱列表页面
        │
        └─recipe            // 菜谱详情页面

```
### 1.0.0
当前数据均来自写死的json文件。计划后期使用NodeJS开发接口，在云服务器搭建数据库存储数据。  
功能：  
1. 菜谱  
提供菜谱的查询功能。
2. 命令行  
提供控制台命令的查询和复制功能。
  
### 1.0.1
新功能规划开发中...



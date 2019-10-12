
// 1. npm install swiper --save
// 2. 在主入口文件中引入 swiper.js  import Swiper from 'swiper'
// 3. import './js/swiper.scss'
// 4. axios.get
// 5. new Swiper('')
// 6. 创建index.html文件，写入swiper的dom结构
import Swiper from 'swiper'
import './js/swiper.scss'
import axios from 'axios'
const swiperWrapper = document.querySelector('.swiper-wrapper');
axios.get('/getCanrouselist').then(res => {
  swiperWrapper.innerHTML = res.data.map(item => {
     return `<div class="swiper-slide"> <img src=${item.img} > </div>`
   }).join('')
})
new Swiper('.swiper-container', {})


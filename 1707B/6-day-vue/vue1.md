<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 19:36:39
 * @LastEditTime: 2019-10-09 19:36:39
 * @LastEditors: your name
 -->



# vue是什么？
渐进式框架

MVVM是Model-View-ViewModel的简写 即模型-视图-视图模型。

【模型】指的是后端传递的数据。
【视图】指的是所看到的页面。
【视图模型】mvvm模式的核心，它是连接view和model的桥梁。
  它有两个方向：
  一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。
  二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。

  总结：在MVVM的框架下视图和模型是不能直接通信的。
     它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。


2.观察者-订阅者（数据劫持）：vueObserver 数据监听器，把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用Object.defineProperty()方法把这些属性全部转成setter、getter方法。当data中的某个属性被访问时，则会调用getter方法，当data中的属性被改变时，则会调用setter方法。

     Compile指令解析器，它的作用对每个元素节点的指令进行解析，替换模板数据，并绑定对应的更新函数，初始化相应的订阅。
     Watcher 订阅者，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数。
     Dep 消息订阅器，内部维护了一个数组，用来收集订阅者（Watcher），数据变动触发notify 函数，再调用订阅者的 update 方法。


# 指令
{{}}

const vm = new Vue({
  el: '#app',
  data() {
    return {
      // 变量 数据
      count: 1,
      inputVal: ""
    }
  },
  methods: {
    //方法
  },
  // 计算属性
  computed: {
     // 方法
    getCount() {
      return 1 + 1
    }  
  },
  watch: {
    // 方法/函数
    inputVal(v) {

    },
    count(v) {
      console.log(v)
    }
  }
})

  指令：
    1. 循环 v-for="(item,index) in list"   {{item.test}}
    2. 动态绑定指令 v-bind  简写形式： :变量  :class :title  :msg  :style="{}"
    3. 事件指令：v-on:事件名   简写形式： @click/mouseover/
    4. 条件判断：v-if  v-else
    5. 显示隐藏 v-show  (display:block/none)
    6. v-model  input 双向数据绑定功能  单选框 复选框 下拉框

    class绑定 三种方法：
      1.字符串 "变量"
      2.对象  "{类名：变量}"
      3.数组  "[变量，变量，变量]"

      :style



效果：tab切换
 在data中绑定tabindex 通过tabindex和下标匹配来绑定class
模糊搜索
 v-model

生命周期：函数




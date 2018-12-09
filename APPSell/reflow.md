************** PATH ********************
## path模块提供了一些工具函数，用于处理文件与目录的路径。可以通过以下方式使用：

# path.join()方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径

# path.resolve([...paths])
# ...paths <String> 一个路径或路径片段的序列
# 返回：<String>

# path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。

# path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

# 如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径。

****** 用SVG矢量图 制作图标字体 工具 IconMoon.io 制作 ****

******* @font-face *********
@font-face {
  font-family: 'example';
  src: url(example.ttf);
  font-style: normal;
  font-weight: normal;
  unicode-range: U+0025-00FF;
}
font-family可以看成是一个字体变量，名称可以非常随意
如：
    @font-face {
    font-family: '$';
    src: local("Microsoft Yahei");
    }
# 这时候，对普通HTML元素，你设置其font-family属性值为'$'，
# 则其字体表现就变成了“微软雅黑”（如果本地有这个字体）

@font-face {
  font-family: 'Microsoft Yahei';
  src: local(SimSun);
}
从此“微软雅黑”字体就变成了“宋体”。当然，有时候我们说不定就需要这种覆盖，比如说新来了一个设计主管，平生最看不惯“微软雅黑”，希望换成其他字体，这个时候我们就可以使用这个变量覆盖轻轻松松完成整站的字体变更

@font-face {
  font-family: BASE;
  src: local("HelveticaNeue-Light"), local("Helvetica Neue Light"),  local("PingFang SC"), local("Microsoft YaHei"), local(sans-serif);
}
于是我们用字体的时候直接：

body {
    font-family: BASE;
}
.xxxx {
    font-family: BASE;
}

### mac 上运行httpserver的问题
    sudo apachectl start 
    然后 ，ls执行查看下目录，cd到你要的文件夹内执行如下代码：
    python -m SimpleHTTPServer 


###  express 
(1) var app = express()：生成一个express实例 app。

(2)app.set('views', path.join(__dirname, 'views’))：设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,__dirname 为全局变量,存储当前正在执行的脚本所在的目录。

(3)app.set('view engine', 'ejs’)：设置视图模板引擎为 ejs。

(4)app.use(favicon(__dirname + '/public/favicon.ico’))：设置/public/favicon.ico为favicon图标。

(5)app.use(logger('dev’))：加载日志中间件。

(6)app.use(bodyParser.json())：加载解析json的中间件。

(7)app.use(bodyParser.urlencoded({ extended: false }))：加载解析urlencoded请求体的中间件。

(8)app.use(cookieParser())：加载解析cookie的中间件。

(9)app.use(express.static(path.join(__dirname, 'public')))：设置public文件夹为存放静态文件的目录。

(10)app.use('/', routes);和app.use('/users', users)：路由控制器。

路由规则
express 封装了多种 http 请求方式，我们主要只使用 get 和  post 两种，即  app.get() 和 app.post() 。

app.get() 和  app.post() 的第一个参数都为请求的路径，第二个参数为处理请求的回调函数，回调函数有两个参数分别是 req 和 res，代表请求信息和响应信息 

# req.query
GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse  
req.query.order ==>"desc"

#req.body
POST user[name]=tobi&user[email]=tobi@learnboost.com  
req.body.user.name ==>"tobi"

# req.params
 GET /user/tj  
req.params.name  
// => "tj"  

 GET /file/javascripts/jquery.js  
req.params[0]  
// => "javascripts/jquery.js"  

# req.param(name)
// ?name=tobi  
req.param('name')  
// => "tobi"  

 POST name=tobi  
req.param('name')  
// => "tobi"  

 /user/tobi for /user/:name   
req.param('name')  
// => "tobi" 
# req.query ： 处理 get 请求，获取 get 请求参数
# req.params ： 处理 /:xxx 形式的 get 或 post 请求，获取请求参数
# req.body ： 处理 post 请求，获取 post 请求体
# req.param() ： 处理 get 和 post 请求，但查找优先级由高到低为 req.params→req.body→req.query




************** VS Code setting ************
 首选项设置中 用户片段 输入 vue 找到 vue.json  配置
 在.vue 文件中输入 vue +Enter 会出来设置好的模板

********** vueRouter **************
https://router.vuejs.org/zh/installation.html
       <!-- 使用 router-link 组件来导航. -->
       <!-- 通过传入 `to` 属性指定链接. -->
       <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
   <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
   <router-view></router-view>

   ***********  草料二维码 ******
   https://cli.im/

   #用本地ip 访问时出问题  在config文件的index.js 中修改 hotst 为：0.0.0.0 

    ***** 1像素问题 *******
    在pc上浏览是1px border 但是放到 手机端 DPI iPhone6 上就是2倍大小 如何做到一像素
    伪类 + transform 
    原理是把原先元素的 border 去掉，然后利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位




 *********** 异步请求  axios  ********
https://github.com/axios/axios


********** vue 数据传递 ************
# 父级传递给子级(prop)
export default {
  props:['message']
  props:{
      message:{
          type:String
      }
  }
css 中不能用alias 路径 只能用于 js

# css sticky-footer 布局
 <div class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main"></div>
      </div>
      <div class="detail-close"></div>
</div>
 .detail
    position: fixed
    z-index :100
    width:100%
    height 100%
    overflow :hidden
    background:rgba(7,17,27,0.8)
    left:0
    top:0
    .detail-wrapper
      min-height :100%
      .detail-main
        margin-top:64px
        padding-bottom:64px
    .detail-close
      position: relative
      width:32px
      height:32px
      margin: -64px auto  0 auto 
      clear:both
      font-size:32px
      color:rgba(255,255,255,.5)

##flex属性是flex-grow、flex-shrink和flex-basis三属性的简写总和。
flex:0 0  80px // 不放大 不缩小 占据 80px空间
flex-grow 默认值为0 不放大 定义了当flex容器有多余空间时，item是否放大。默认值为0，即当有多余空间时也不放大；可能的值为整数，表示不同item的放大比例
flex-shrink 默认值为1，表示当空间不足时，item自动缩小 定义了当容器空间不足时，item是否缩小。默认值为1，表示当空间不足时，item自动缩小，其可能的值为整数，表示不同item的缩小比例
flex-basis 表示项目在主轴上占据的空间，默认值为auto

###  菜单左右联动
1. 依赖右侧滚动实时 Y值落到哪个区间对应的左侧menu的区间
2. 记录右侧每个区间的高度  计算每个区间整体高度 形成数组
3. 监听滚动Y坐标 对比坐标落在那个区间 得到索引值 对应左侧 位置

## 计算右侧列表高度
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0 
      this.listHeight.push(height)
      for(let i=0; i<foodList.length;i++){
        let item =foodList[i];
        height+=item.clientHeight
        this.listHeight.push(height)
      }
      console.log(this.listHeight)
    }
    computed:{
      currentIndex() {
        for(let i=0;i<this.listHeight.length;i++){
          let height1 =this.listHeight[i];
          let height2 = this.listHeight[i+1];
          // 如果不是最后一个 在h1 和 h2区间 curIndex = i  ！height2 为true也就是最后一个了
          if(!height2 || this.scrollY >= height1 && this.scrollY < height2){
            return i;
          }
        }
        return 0;
      }
  }
   ## 绑定 滚动事件
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper,{
        click:true // 默认阻止点击
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
        probeType : 3, // 监听滚动Y位置
        click:true
      })
      this.foodsScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y))
        //console.log(this.scrollY,'scroll')
      })

  ##  菜单点击事件
    selectMenus(index,event) {
      // 区分浏览器还是手机端点击
       if (!event._constructed) {
          return;
        }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index]
      // 滚动到 food 位置
      this.foodsScroll.scrollToElement(el,300)
    }
## Vue.js 不能检测到对象属性的添加或删除。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 data 对象上才能让 Vue.js 转换它，才能让它是响应的。
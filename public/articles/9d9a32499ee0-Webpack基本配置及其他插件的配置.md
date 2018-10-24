# Webpack基本配置及其他插件的配置

### webpack配置

+ **安装webpack及一些插件**

  ```
  npm install webpack webpack-cli webpack-dev-server -g
  ```

  **建议不要安装全局的webpack**

+ **先创建一个总的文件夹**

  ​

+ **在该文件夹中创建两个目录，一个是<u>dist</u>,一个是<u>src</u>**

  ​

+ **在<u>src</u>文件夹中创建一个文件叫做<u>main.js</u>**

  ​

+ **在总文件夹下创建一个文件叫：<u>webpack.config.js</u>**

  ​

+ **然后在其中输入以下内容**

  ~~~javascript
  const path = require('path')
  module.exports = {
    mode: 'development',             //用于打包环境
    entry: path.join(__dirname, './src/main.js'),   //入口，表示你当前所要打包的文件
    output: {									
      path: path.resolve(__dirname,'dist'),   //出口，表示要打包到你指定的文件夹
      filename: 'bundle.js'                     //文件名
    }
  }

  ~~~

  ​

+ **npm init -y，然后你就可以用<u>webpack</u>命令进行打包**

  ​

+ **这时你会发现<u>dist</u>文件夹中躺着一个叫做<u>bundle.js</u>的文件**



> 但是这种方法并不好，每次更新代码，都需要手动写一遍webpack运行，所以需要下面的方法辅助我们写代码





### webpack-dev-server 配置



+ **前面我们已经安装好了webpack-dev-server**



+ **先删掉之前<u>dist</u>里面生成的<u>bundle.js</u>**

  ​

+ **在package.json里面加入下面的代码**

  ~~~json
    "scripts": {
      "dev": "webpack-dev-server --open --port 3000 --contentBase src   --hot"
    }
  ~~~

  ​

+ **解释一下里面代码的作用**

  ~~~
  --open   		    自动打开浏览器
  --port 3000		    端口为3000
  --contentBase src 	根目录为src
  --hot        	    热更新，可以无刷新更新页面 还可以局部更新
  ~~~

  ​

+ **然后我们可以在命令行中输入<u>npm run dev</u>来进行项目打包，你只需要写好代码保存即可**

  ​

### html-webpack-plugin插件配置



+ **注意：安装此插件，不能安装全局的webpack，要局部安装webpack**



+ **这个插件主要用来把浏览器的运行放在内存中，提高运行速度**

  ​

+ **先安装该插件<u>npm i html-webpack-plugin -D</u>**

  ​


+ **修改<u>webpack.config.js</u>**

  ~~~javascript
  const path = require('path')
  const htmlWebpackPlugin = require('html-webpack-plugin')  //引入模块
  module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js'
    },
    plugins: [                   //用来配置插件
      new htmlWebpackPlugin({   //创建一个在内存中生成html页面的插件
        template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来会根据路径，去生成内存中的页面
        filename: 'index.html'   //指定页面名称
      })
    ]
  }
  ~~~

  ​

+ **注意启用了该插件，不需要我们在页面引用/bundle.js，插件会自动帮我们引用,我们只用关心页面问题**

+ **作用：自动在内存中根据指定页面生成一个内存的页面；自动把打包好的bundle.js追加到页面**



### style-loader和css-loader的配置

+ **用来加载CSS样式的插件，例如**

  ~~~javascript
  import './css/index.css'  //正常情况不会被加载，会报错
  ~~~

  ​

+ **安装插件**

  ~~~
  npm i style-loader css-loader -D
  ~~~

  ​

+ **打开<u>webpack.config.js</u>，在里面新增一个配置节点，在module上有一个rules属性，是一个数组，这个数组中存放了所有第三方文件的匹配和处理规则**

  ​

+ **配置<u>webpack.config.js</u>**

  ~~~javascript
  const path = require('path')
  const htmlWebpackPlugin = require('html-webpack-plugin')  //引入模块
  module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js'
    },
    plugins: [                   //用来配置插件
      new htmlWebpackPlugin({ //创建一个在内存中生成html页面的插件
        template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来会根据路径，去生成内存中的页面
        filename: 'index.html'   //指定页面名称
      })
    ],
    module: {  //这个节点，用来配置所有第三方模块加载器
      rules: [  //所有第三方模块的匹配规则
        {
          test: /\.css$/,use: ['style-loader','css-loader']             //匹配所有以.css结尾的文件
        }
      ] 
    }
  }
  ~~~

  ~~~javascript
  //注意上面代码中的如下代码
  test: /\.css$/,use: ['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] 
  //modules表示为普通的css设置模块化
  ~~~

  

### less-loader的配置

+ **使用前提：安装less**

+ **安装less-loader插件**

  ~~~
  npm i less-loader
  ~~~

  ​

+ **配置<u>webpack.config.js</u>**

  ~~~javascript
  const path = require('path')
  const htmlWebpackPlugin = require('html-webpack-plugin')  //引入模块
  module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js'
    },
    plugins: [                   //用来配置插件
      new htmlWebpackPlugin({ //创建一个在内存中生成html页面的插件
        template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来会根据路径，去生成内存中的页面
        filename: 'index.html'   //指定页面名称
      })
    ],
    module: {  //这个节点，用来配置所有第三方模块加载器
      rules: [  //所有第三方模块的匹配规则,  从左到右加载
        {
          test: /\.css$/,use: ['style-loader','css-loader']             //匹配所有以.css结尾的文件
        },
        {
          test: /\.less$/, use: ['style-loader', 'css-loader','less-loader']
        }
      ] 
    }
  }
  ~~~

  ​

### sass-loader的配置

+ **和less的配置相同，参见上面的配置**












### url-loader和file-loader的配置

+ **默认情况，webpack无法处理css文件中的url地址，不管是图片还是字体库**

  ​

+ **需要依赖第三方模块**

  ​

+ **安装第三方模块**

  ~~~
  npm i url-loader file-loader -D
  ~~~

  ​

+ **配置**

  ~~~javascript
  {
     test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'
  }
  ~~~

  ​

+ **注意，这个模块会自动将图片转为base64的图片，避免二次请求**


  ~~~javascript
  {
     test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=（大于等于该图片字节大小）'
  }
    //这样写就不会以base64来引入图片，图片大小单位是byte
  ~~~

  

+ **注意，这个模块会随机给图片起名字，也可以通过url参数来指定继续使用之前的名字**

  ~~~javascript
  {
     test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=（大于等于该图片字节大小）&name=[hash:8]-[name].[ext]'
  }
  ~~~

  ​





### Babel的配置

+ **用来将高级语法转化为低级语法,一个javascript编译器**



+ **安装两套包**

  ~~~
  npm i babel-core babel-loader babel-plugin-transform-runtime -D
  ~~~

  ~~~
  npm i babel-preset-env babel-preset-stage-0 -D
  ~~~

  ​

+ **打开webpack配置文件，在module节点下的rules数组中添加一个新的规则**

  ~~~
  {
  	test: /\.js$/, use: 'babel-loader', exclude:/node_modules/
  }
  ~~~

  ​

+ **在项目根目录中新建一个叫做 .babelrc  的babel配置文件，这个文件属于json格式**



+ **配置如下：**

  ~~~
  {
      "presets": ["env","stage-0"],
      "plugins": ["transform-runtime"]
  }
  ~~~

  





### 配置webpack设置默认根目录

~~~javascript
  resolve: {
    alias: {              
      '@': path.join(__dirname,'./src')
    }
  }
~~~


# MongoDB安装及操作

### 官网下载对应操作系统的预编译二进制包并安装

[mongodb官网](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.2-signed.msi/download)



### 创建数据目录

&gt; MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。

&gt; ```
&gt; c:\&gt;cd c:\
&gt; 
&gt; c:\&gt;mkdir data
&gt; 
&gt; c:\&gt;cd data
&gt; 
&gt; c:\data&gt;mkdir db
&gt; 
&gt; c:\data&gt;cd db
&gt; 
&gt; c:\data\db&gt;
&gt; ```

### 命令行下运行 MongoDB 服务器

&gt; 为了从命令提示符下运行 MongoDB 服务器，你必须从 MongoDB 目录的 bin 目录中执行 mongod.exe 文件。

~~~
mongod --dbpath c:\data\db
~~~

&gt; 如果执行成功，会输出如下信息：

~~~
2015-09-25T15:54:09.212+0800 I CONTROL  Hotfix KB2731284 or later update is not
installed, will zero-out data files
2015-09-25T15:54:09.229+0800 I JOURNAL  [initandlisten] journal dir=c:\data\db\j
ournal
2015-09-25T15:54:09.237+0800 I JOURNAL  [initandlisten] recover : no journal fil
es present, no recovery needed
2015-09-25T15:54:09.290+0800 I JOURNAL  [durability] Durability thread started
2015-09-25T15:54:09.294+0800 I CONTROL  [initandlisten] MongoDB starting : pid=2
488 port=27017 dbpath=c:\data\db 64-bit host=WIN-1VONBJOCE88
2015-09-25T15:54:09.296+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/W
indows Server 2008 R2
2015-09-25T15:54:09.298+0800 I CONTROL  [initandlisten] db version v3.0.6
……
~~~



### 连接MongoDB

~~~
C:\mongodb\bin\mongo.exe
~~~



---

**下面的配置和上面的配置任选一**

### 配置 MongoDB 服务

&gt;**管理员模式打开命令行窗口**
&gt;
&gt;创建目录，执行下面的语句来创建数据库和日志文件的目录

~~~
mkdir c:\data\log
~~~



&gt; **创建配置文件**
&gt;
&gt; 创建一个配置文件。该文件必须设置 systemLog.path 参数，包括一些附加的配置选项更好。
&gt;
&gt; 例如，创建一个配置文件位于 C:\mongodb\bin\mongo.config。具体配置内容如下：

~~~
dbpath=D:\software\MongoDB\data\db
logpath=D:\software\MongoDB\data\log\mongo.log
~~~



### 安装 MongoDB服务

&gt; 通过执行mongod.exe，使用--install选项来安装服务，使用--config选项来指定之前创建的配置文件。

~~~
C:\mongodb\bin\mongod.exe --config "C:\mongodb\mongod.cfg" --install
~~~



&gt; 启动MongoDB服务

~~~
net start MongoDB
~~~



&gt; 关闭MongoDB服务

~~~
net stop MongoDB
~~~



&gt; 移除 MongoDB 服务

~~~
C:\mongodb\bin\mongod.exe --remove
~~~





### 命令行操作

+ 使用数据库

  ~~~
  use test
  ~~~


+ 查看当前使用的数据库

  ~~~
  db
  ~~~


+ 查看所有数据库

  ~~~
  show dbs
  ~~~


+ 查看当前数据库所有集合

  ~~~
  show collections
  ~~~


+ 创建集合

  ~~~
  db.createCollection('name')
  ~~~

+ 删除集合

  ~~~
  db.集合名.drop()
  ~~~


+ 在集合中**插入**数据

  ~~~
  db.集合名.insert({})
  ~~~


+ 查询数据

  ~~~
  db.集合名.find()
  db.集合名.find( { a : 1 } )
  ~~~


+ 更新数据

  ~~~
  db.集合名.update({name: 'hr'}, {$set:{name:'hys'}})
  ~~~

+ 删除数据

  ~~~
  db.集合名.remove({age: 132});
  ~~~



### 前方高能

&gt; `可以写js代码，前面的代码可以拜拜了`

~~~
db.集合名.find({$where:function(){return this.age &gt; 2}})
~~~

&gt; `1代表显示，0代表隐藏，查询结果只会选择隐藏的`

~~~
db.集合名.find({},{name:1,age:0})
~~~

&gt; `limit,只查看限定的数据`

~~~
db.集合名.find().limit(1)
db.集合名.find().skip(1) //跳过一条数据
~~~

&gt; `sort对结果排序`

~~~
db.集合名.find().sort({age: 1}) //升序
db.集合名.find().sort({age: -1}) //降序
~~~

&gt; `count用于统计个数`

~~~
db.集合名.find(条件).count()
~~~

&gt; `distinct消除重复`

~~~
db.集合名.distinct('去重属性'，{条件})
~~~

&gt; `aggregate聚合`

~~~
db.集合名.aggregate([{管道:{表达式}}])


常用管道
$project：修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。
$match：用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作。
$limit：用来限制MongoDB聚合管道返回的文档数。
$skip：在聚合管道中跳过指定数量的文档，并返回余下的文档。
$unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。
$group：将集合中的文档分组，可用于统计结果。
$sort：将输入文档排序后输出。
$geoNear：输出接近某一地理位置的有序文档。

表达式
$sum：计算总和。
$avg：计算平均值
$min：获取集合中所有文档对应值得最小值
$max：获取集合中所有文档对应值得最大值
$push：在结果文档中插入值到一个数组中
$addToSet：在结果文档中插入值到一个数组中，但不创建副本
$first：根据资源文档的排序获取第一个文档数据
$last：根据资源文档的排序获取最后一个文档数据


样例
db.stu.aggregate([
    {
        $group:
        {
            _id:'$gender'  //字段，即属性，按照gender分组
            counter:{$sum:1} 
        }
    }
])
~~~



&gt; `创建大量数据`

~~~
for (i=0;i &lt; 100000;i++){
    db.集合名.insert({name:'test' + i, age: i})
}
~~~



&gt; `数据查找性能分析`

~~~
//使用explain()命令进行查询性能分析
db.集合名.find({name:"fanyihui"}).explain('executionStats')
~~~



&gt; `索引`

~~~
db.集合名.ensureIndex({属性:1})   //1代表升序
db.集合名.ensureIndex({属性:1})	//-1代表降序

//创建索引有利于提高性能

db.集合名.ensureIndex({属性:1}, {"unique": true})
//建立位移索引

db.集合名.getIndexs()
//查看所有索引

db.集合名.dropIndexs('索引名')
//删除索引
~~~



&gt; `创建超级管理员`

~~~
use admin
db.createUser({
    user:'admin',
    pwd:'123',
    roles: [{role: 'root', db:'admin'}]
})
~~~



&gt; `创建普通用户`

~~~
use test1
db.createUser({
    user:'admin',
    pwd:'123',
    roles: [{role: 'readWrite', db:'test1'}]
})
~~~





&gt; `备份`

~~~
mongodump -h dbhost -d dbname -o dbdirectory

-h:服务器地址，也可以指定端口号
-d:需要备份的数据库名称
-o:备份的数据存放位置，此目录中存放着备份出来的数据

例子
mongodump -h 192.168.196.128:27017 -d test1 -o d:/test1bak
~~~



&gt; `恢复`

~~~
mongorestore -h dbhost -d dbname --dir dbdirectory

-h: 服务器地址
-d:需要恢复的数据库实例
--dir:备份数据所在位置

例子
mongorestore -h 192.168.1.100:27017 -d test2 --dir d:/test
~~~


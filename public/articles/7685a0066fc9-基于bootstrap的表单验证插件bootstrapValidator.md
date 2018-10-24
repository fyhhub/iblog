# 基于bootstrap的表单验证插件bootstrapValidator
+ 下载地址
 - [Github](https://github.com/nghuuphuoc/bootstrapvalidator)
 - [官网](https://www.bootcdn.cn/bootstrap-validator/)

> 直接上代码，应该很容易理解

```htmlbars
<form id="defaultForm" role="form" class="form-signin" action="registerAccount.do"
                method="post">
                <h2 class="form-signin-heading">请输入注册信息：</h2>

                <div class="form-group">
                    <label for="username">用户名：</label><input class="form-control"
                        type="text" name="username" id="username" />
                </div>
                <div class="form-group">
                    <label for="password">密码：</label><input class="form-control"
                        type="password" name="password" id="password"/>
                </div>
                <div class="form-group">
                    <label for="repassword">确认密码：</label><input class="form-control"
                        type="password" name="repassword" id="repassword" />
                </div>
                <div class="form-group">
                    <label for="phone">手机号码：</label><input class="form-control"
                        type="text" name="phone" id="phone" />
                </div>
                <div class="form-group">
                    <label for="email">email:</label><input class="form-control"
                        type="email" name="email" id="email" />
                </div>
                <div class="form-group">
                    <label for="invite">邀请码：</label><input class="form-control"
                        type="text" name="invite" id="invite">
                </div>
                <div class="form-group">
                        <button class="btn btn-lg btn-primary btn-block" type="submit">确认注册</button>
                        <a class="btn btn-lg btn-primary btn-block" href="../">返回首页</a>
                    </div>
            </form>
```



```javascript
$(function(){/* 文档加载，执行一个函数*/
     $('#defaultForm')
     .bootstrapValidator({
         message: 'This value is not valid',
         feedbackIcons: {/*input状态样式图片*/
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
         },
         fields: {/*验证：规则*/
             username: {//验证input项：验证规则
                 message: 'The username is not valid',
                
                 validators: {
                     notEmpty: {//非空验证：提示消息
                         message: '用户名不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '用户名长度必须在6到30之间'
                     },
                     threshold :  6 , //有6字符以上才发送ajax请求，（input中输入一个字符，插件会向服务器发送一次，设置限制，6字符以上才开始）
                     remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}  
                         url: 'exist2.do',//验证地址
                         message: '用户已存在',//提示消息
                         delay :  2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                         type: 'POST'//请求方式
                         /**自定义提交数据，默认值提交当前input value
                          *  data: function(validator) {
                               return {
                                   password: $('[name="passwordNameAttributeInYourForm"]').val(),
                                   whatever: $('[name="whateverNameAttributeInYourForm"]').val()
                               };
                            }
                          */
                     },
                     regexp: {
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '用户名由数字字母下划线和.组成'
                     }
                 }
             },
             password: {
                 message:'密码无效',
                 validators: {
                     notEmpty: {
                         message: '密码不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '用户名长度必须在6到30之间'
                     },
                     identical: {//相同
                         field: 'password', //需要进行比较的input name值
                         message: '两次密码不一致'
                     },
                     different: {//不能和用户名相同
                         field: 'username',//需要进行比较的input name值
                         message: '不能和用户名相同'
                     },
                     regexp: {
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: 'The username can only consist of alphabetical, number, dot and underscore'
                     }
                 }
             },
             repassword: {
                 message: '密码无效',
                 validators: {
                     notEmpty: {
                         message: '用户名不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '用户名长度必须在6到30之间'
                     },
                     identical: {//相同
                         field: 'password',
                         message: '两次密码不一致'
                     },
                     different: {//不能和用户名相同
                         field: 'username',
                         message: '不能和用户名相同'
                     },
                     regexp: {//匹配规则
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: 'The username can only consist of alphabetical, number, dot and underscore'
                     }
                 }
             },
             email: {
                 validators: {
                     notEmpty: {
                         message: '邮件不能为空'
                     },
                     emailAddress: {
                         message: '请输入正确的邮件地址如：123@qq.com'
                     }
                 }
             },
             phone: {
                 message: 'The phone is not valid',
                 validators: {
                     notEmpty: {
                         message: '手机号码不能为空'
                     },
                     stringLength: {
                         min: 11,
                         max: 11,
                         message: '请输入11位手机号码'
                     },
                     regexp: {
                         regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                         message: '请输入正确的手机号码'
                     }
                 }
             },
             invite: {
                 message: '邀请码',
                 validators: {
                     notEmpty: {
                         message: '邀请码不能为空'
                     },
                     stringLength: {
                         min: 8,
                         max: 8,
                         message: '请输入正确长度的邀请码'
                     },
                     regexp: {
                         regexp: /^[\w]{8}$/,
                         message: '请输入正确的邀请码(包含数字字母)'
                     }
                 }
             },
         }
     })
     .on('success.form.bv', function(e) {//点击提交之后
         // Prevent form submission
         e.preventDefault();

         // Get the form instance
         var $form = $(e.target);

         // Get the BootstrapValidator instance
         var bv = $form.data('bootstrapValidator');

         // Use Ajax to submit form data 提交至form标签中的action，result自定义
         $.post($form.attr('action'), $form.serialize(), function(result) {
//do something...
});
     });
});
```

> 其他样例

```javascript
$(function(){
    /*前端校验功能  bootstrap validator*/
    /*1.完整的表单结构  form   input  submit 这些元素*/
    /*2.表单元素需要对应的名字 name="username" */
    /*3.初始化表单验证组件 插件*/
    /*4.配置组件功能*/
    /*5.配置具体的属性需要的校验规则*/
    $('#login').bootstrapValidator({
        /*提示的图标*/
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        /*属性对应的是表单元素的名字*/
        fields:{
            /*配置校验规则*/
            username:{
                /*规则*/
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    /*设置错误信息 和规则无关 和后台校验有关系*/
                    callback: {
                        message: '用户名错误'
                    }
                }
            },
            password:{
                validators:{
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength:{
                        min:6,
                        max:18,
                        message:'密码在6-18个字符内'
                    },
                    callback: {
                        message: '密码不正确'
                    }
                }
            }
        }
        /*7.表单校验成功*/
    }).on('success.form.bv', function(e) {
        /*禁用默认提交的事件 因为要使用ajax提交而不是默认的提交方式*/
        e.preventDefault();
        /*获取当前的表单*/
        var $form = $(e.target);
        /*发送登录请求*/
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$form.serialize(),
            dataType:'json',
            success:function(data){
                if(data.success){
                    /*后台管理员 root 123456*/
                    /*登录成功*/
                    location.href = 'index.html';
                }else{
                    /*登录不成功*/
                    /*8.恢复可提交的按钮*/
                    $form.data('bootstrapValidator').disableSubmitButtons(false);
                    /*9.指定某一个表单元素的错误提示*/
                    /* NOT_VALIDATED, VALIDATING, INVALID or VALID */
                    if(data.error == 1000){
                        $form.data('bootstrapValidator').updateStatus('username','INVALID','callback');
                    }else if(data.error == 1001){
                        $form.data('bootstrapValidator').updateStatus('password','INVALID','callback');
                    }
                }
            }
        });
    });
    /*重置功能*/
    $('[type="reset"]').on('click',function(){
        /*6.重置验证*/
        $('#login').data('bootstrapValidator').resetForm();
    });

});
```

> 以上代码能基本掌握插件使用，详情可百度
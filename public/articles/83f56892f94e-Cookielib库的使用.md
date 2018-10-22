# Cookielib库的使用

### 获取登录后的Cookie

~~~python
import urllib.request
import http.cookiejar
import urllib
# 通过CookieJar来构建一个cookiejar对象，用来保存cookie
cookie = http.cookiejar.CookieJar()

urllib2 = urllib.request

# 构建处理器对象，用来处理cookie
cookie_handler = urllib2.HTTPCookieProcessor(cookie)


opener = urllib2.build_opener(cookie_handler)

opener.addheaders = [({"User-Agent": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.50"})]

data = {"email": "....", "password": "fanyihui"}

data = urllib.parse.urlencode(data)


url = "http://www.renren.com/SysHome.do"


request = urllib2.Request(url, data)

response = opener.open(request)

print(response.read())


~~~


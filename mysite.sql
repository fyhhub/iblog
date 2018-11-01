/*
Navicat MySQL Data Transfer

Source Server         : fanyihui
Source Server Version : 80012
Source Host           : localhost:3308
Source Database       : mysite

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2018-11-01 19:34:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` smallint(6) NOT NULL,
  `manager_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `manager_password` varchar(20) NOT NULL,
  `manager_login_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'fanyihui', '2018-11-1  18:24:55');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` varchar(30) DEFAULT NULL,
  `article_author` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_tags` varchar(20) DEFAULT NULL,
  `article_time` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_read` smallint(6) DEFAULT NULL,
  `article_url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_check` tinyint(4) DEFAULT NULL,
  `article_introduce_img` varchar(200) DEFAULT NULL,
  `article_introduce` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('81225cd62507', 'admin', 'Canvas', '2018-10-24  20:47:17', 'Canvas基础简介及入门', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\81225cd62507-Canvas基础简介及入门.md', '1', '/images/articleImg/81225cd62507-r11bbzx3c1a.jpg', 'Canvas简单入门，介绍了一些样例');
INSERT INTO `article` VALUES ('7a0af171d660', 'admin', 'JS', '2018-10-24  20:50:15', 'EventUtil——跨浏览器的事件对象', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\7a0af171d660-EventUtil——跨浏览器的事件对象.md', '1', '/images/articleImg/7a0af171d660-1540280391981891.jpg', '封装了能够兼容多种浏览器的对象，它能够获取事件对象，并能够给dom元素绑定时间和解绑事件等');
INSERT INTO `article` VALUES ('9d9a32499ee0', 'admin', 'Vue', '2018-10-24  20:55:51', 'Webpack基本配置及其他插件的配置', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\9d9a32499ee0-Webpack基本配置及其他插件的配置.md', '1', '/images/articleImg/9d9a32499ee0-zd01.jpg', 'webpack基本配置，还有一些loader的安装，能解决基本的webpack的使用');
INSERT INTO `article` VALUES ('7685a0066fc9', 'admin', '插件', '2018-10-24  21:26:47', '基于bootstrap的表单验证插件bootstrapValidator', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\7685a0066fc9-基于bootstrap的表单验证插件bootstrapValidator.md', '1', '/images/articleImg/7685a0066fc9-1540187846648763.jpg', 'bootstrapValidator是一款基于bootstrap，很好用并且简单的前端表单验证插件，但只是在前端进行验证');

-- ----------------------------
-- Table structure for info
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `name` varchar(20) DEFAULT NULL,
  `net_name` varchar(20) DEFAULT NULL,
  `career` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `contact` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES ('admin', 'Fun范', 'web初学者', '1131153523@qq.com', 'QQ1131153523', '已入坑前端7个月，会经常分享自己学习笔记和心得，热心前端方向，爱看技术文章。', '/images/avatar/admin-avatar.jpg');

-- ----------------------------
-- Table structure for links
-- ----------------------------
DROP TABLE IF EXISTS `links`;
CREATE TABLE `links` (
  `link_id` varchar(50) DEFAULT NULL,
  `link_name` varchar(50) DEFAULT NULL,
  `link_url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of links
-- ----------------------------

-- ----------------------------
-- Table structure for nav
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `id` varchar(20) NOT NULL,
  `nav_name` varchar(10) NOT NULL,
  `nav_url` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('2', '首页', '/');
INSERT INTO `nav` VALUES ('3', '学无止境', '/learn');
INSERT INTO `nav` VALUES ('4', '生活', '/life');
INSERT INTO `nav` VALUES ('5', '留言板', '/gbook');
INSERT INTO `nav` VALUES ('1539776686423.9695', '关于我', '/about');

-- ----------------------------
-- Table structure for tools
-- ----------------------------
DROP TABLE IF EXISTS `tools`;
CREATE TABLE `tools` (
  `tool_id` varchar(30) NOT NULL,
  `tool_name` varchar(50) DEFAULT NULL,
  `tool_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`tool_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tools
-- ----------------------------
INSERT INTO `tools` VALUES ('1', '前端文档工具', 'http://www.css88.com/nav/');
INSERT INTO `tools` VALUES ('20f0939f4621', '一套绝佳的图标字体库和CSS框架', 'http://fontawesome.dashgame.com/');
INSERT INTO `tools` VALUES ('39635176f48a', '30 秒就能理解的 JavaScript 代码片段', 'http://www.css88.com/30-seconds-of-code/#tomorrow');
INSERT INTO `tools` VALUES ('59216621dd35', 'Animate.css', 'https://daneden.github.io/animate.css/');
INSERT INTO `tools` VALUES ('655f3b8dbcff', 'ECMAscript 6入门', 'http://es6.ruanyifeng.com/');
INSERT INTO `tools` VALUES ('7a1378d4c1de', 'https://developer.mozilla.org/zh-CN/docs/Web', 'https://developer.mozilla.org/zh-CN/docs/Web');
INSERT INTO `tools` VALUES ('b9f0cbe8ce1c', 'CodePen', 'https://codepen.io/');
INSERT INTO `tools` VALUES ('e85b2b14d028', '前端开发资源库', 'https://www.awesomes.cn/');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(15) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------

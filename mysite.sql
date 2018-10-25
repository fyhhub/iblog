/*
Navicat MySQL Data Transfer

Source Server         : fanyihui
Source Server Version : 80012
Source Host           : localhost:3308
Source Database       : mysite

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2018-10-25 22:50:04
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
INSERT INTO `admin` VALUES ('1', 'admin', 'fanyihui', '2018-10-25  21:53:10');

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

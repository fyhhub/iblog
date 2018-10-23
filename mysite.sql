/*
Navicat MySQL Data Transfer

Source Server         : fanyihui
Source Server Version : 80012
Source Host           : localhost:3308
Source Database       : mysite

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2018-10-23 23:09:56
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
INSERT INTO `admin` VALUES ('1', 'admin', '123456', '2018-10-23  21:25:55');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` varchar(30) DEFAULT NULL,
  `article_author` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_tags` varchar(20) DEFAULT NULL,
  `article_time` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_title` varchar(30) DEFAULT NULL,
  `article_read` smallint(6) DEFAULT NULL,
  `article_url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_check` tinyint(4) DEFAULT NULL,
  `article_introduce_img` varchar(200) DEFAULT NULL,
  `article_introduce` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('9898809270d5', 'admin', 'python', '2018-10-22  20:50:11', 'urllib2库的使用(爬虫)', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\9898809270d5-urllib2库的使用(爬虫).md', '1', '/images/articleImg/9898809270d5-text01.jpg', 'urllib2库的使用(爬虫)urllib2库的使用(爬虫)urllib2库的使用(爬虫)urllib2库的使用(爬虫)urllib2库的使用(爬虫)');
INSERT INTO `article` VALUES ('ee67be064607', 'admin', 'Python', '2018-10-22  21:16:53', 'Python之进程', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\ee67be064607-Python之进程.md', '1', '/images/articleImg/ee67be064607-t03.jpg', 'Python之进程Python之进程Python之进程Python之进程Python之进程Python之进程Python之进程Python之进程Python之进程');
INSERT INTO `article` VALUES ('83f56892f94e', 'admin', 'Python', '2018-10-22  22:11:13', 'Cookielib库的使用', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\83f56892f94e-Cookielib库的使用.md', '1', '/images/articleImg/83f56892f94e-t02.jpg', 'Cookielib库的使用Cookielib库的使用Cookielib库的使用Cookielib库的使用');
INSERT INTO `article` VALUES ('dd1b82676f27', 'admin', 'asd', '2018-10-23  21:45:17', 'asd', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\dd1b82676f27-asd.md', '0', '', 'asd');
INSERT INTO `article` VALUES ('7b551bef79d9', 'admin', 'asda', '2018-10-23  21:45:27', 'asd', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\7b551bef79d9-asd.md', '0', '', 'sdad');
INSERT INTO `article` VALUES ('65cce3ffbd58', 'admin', 'sdas', '2018-10-23  21:45:35', 'asda', '0', 'C:\\Users\\Administrator\\Desktop\\mysite\\public\\articles\\65cce3ffbd58-asda.md', '0', '', 'dasd');

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

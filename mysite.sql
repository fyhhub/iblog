/*
Navicat MySQL Data Transfer

Source Server         : fanyihui
Source Server Version : 80012
Source Host           : localhost:3308
Source Database       : mysite

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2018-10-18 21:19:48
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
INSERT INTO `admin` VALUES ('1', 'admin', '123456', '2018-10-18  19:47:10');

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
  `article_url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `article_check` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1539868635418', 'admin', 'aasfasf', '2018-10-18  21:17:15', 'asfasf', '0', '.../../source/article/asfasf---1539868635418.md', '0');

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

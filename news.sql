/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 100119
Source Host           : localhost:3306
Source Database       : news

Target Server Type    : MYSQL
Target Server Version : 100119
File Encoding         : 65001

Date: 2017-03-11 09:36:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `title_img` varchar(255) DEFAULT NULL,
  `click` int(255) unsigned DEFAULT '0',
  `CreateTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('31', '天123123', '<p>12312312天</p><p><br></p>', 'images/82D2O8GRUP3WLKrN1XYf1iKB.png', '8', '2017-02-27 09:51:28', '2017-02-28 18:58:07');
INSERT INTO `news` VALUES ('32', '123123', '<p>123123123</p>', 'images/jDl44i7DoK9hPIoK8LiS1Hkr.jpeg', '2', '2017-02-27 10:11:50', '2017-02-28 18:58:11');
INSERT INTO `news` VALUES ('33', '阿斯打扫大', '<p>阿斯打扫大阿斯打扫大阿斯打扫大阿斯打扫大</p><p>阿斯打扫大阿斯打扫大阿斯打扫大</p><p>阿斯打扫大阿斯打扫大阿斯打扫大<img src=\"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif\"></p><p><br></p>', 'images/2fjQ64D6uGpS6PdhVflBdqEt.png', '2', '2017-02-28 18:58:35', '2017-02-28 18:58:51');
INSERT INTO `news` VALUES ('34', '天啊，(｀･ω･´)ゞ敬礼っ', '<p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p>天啊，(｀･ω･´)ゞ敬礼っ天啊，(｀･ω･´)ゞ敬礼っ</p><p><br></p>', 'images/z3X679lsYDnY-AYP_xWlcbrL.jpeg', '3', '2017-02-28 19:02:08', '2017-02-28 19:50:40');
INSERT INTO `news` VALUES ('35', '123123', '<p><br></p><p>123123123</p>', 'images/saawNKa0i9GYWcjhEkx-Wr3b.png', '0', '2017-02-28 20:13:35', '2017-02-28 20:13:35');
INSERT INTO `news` VALUES ('36', '123123123123', '<p>123123123123123131231231231231231312312312312312313<br></p><p>123123123123123131231231231231231312312312312312313<br></p><p>12312312312312313</p><p>12312312312312313</p><p><br></p>', 'images/5QOYrCadxR75xL36SCC62E5g.png', '0', '2017-02-28 20:39:47', '2017-02-28 20:39:47');
INSERT INTO `news` VALUES ('37', 'o_O234234啊', '<p>o_O234234啊o_O234234啊o_O234234啊o_O234234啊o_O234234啊</p><p><br></p>', 'images/6Wbx7AtlkYSiq9eviPzWPgUY.png', '0', '2017-02-28 20:57:47', '2017-02-28 20:57:47');
INSERT INTO `news` VALUES ('38', '123o_O', '<p>123o_O123o_O123o_O123o_O123o_O</p><p><br></p>', 'images/v0gnkLqM9gSrQiGrUC11qRsD.png', '0', '2017-02-28 20:59:06', '2017-02-28 20:59:06');
INSERT INTO `news` VALUES ('39', '阿斯达o_O', '<p>阿斯达o_O阿斯达o_O阿斯达o_O阿斯达o_O</p><p><br></p>', 'images/7Kn4KCxAtxGrT2DT73RDUY41.png', '0', '2017-02-28 20:59:43', '2017-02-28 20:59:43');
INSERT INTO `news` VALUES ('40', '阿斯打扫打扫的', '<p>阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的</p><p><br></p><p><br></p><p><br></p><p>阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的阿斯打扫打扫的</p><p><br></p>', 'images/q5XUhcRKY11DGu64DGw_FPC9.jpeg', '0', '2017-02-28 21:33:20', '2017-02-28 21:33:20');
INSERT INTO `news` VALUES ('41', '速度阿斯打扫大', '<p>速度阿斯打扫大速度阿斯打扫大速度阿斯打扫大速度阿斯打扫大</p><p><br></p>', 'images/sdKk9ZmNBpF_qkWfMiZWqdzn.png', '0', '2017-02-28 21:39:55', '2017-02-28 21:39:55');
INSERT INTO `news` VALUES ('42', '才vlbjkbermcuv', '<p>才vlbjkbermcuv才vlbjkbermcuv才vlbjkbermcuv才vlbjkbermcuv才vlbjkbermcuv才vlbjkbermcuv</p><p><br></p>', 'images/Y59K86acRAecVPyp8teGhp0H.jpeg', '0', '2017-02-28 21:44:31', '2017-02-28 21:44:31');
INSERT INTO `news` VALUES ('43', '123123123', '<p>123123123123123123123123123123123123123123123</p><p><br></p>', 'images/UOKYmqc8lrxqXgfYfNW8Cs3P.jpeg', '0', '2017-02-28 21:45:24', '2017-02-28 21:45:24');
INSERT INTO `news` VALUES ('44', '123123123123123', '<p>123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123</p><p><br></p>', 'images/3bBL4ZbUXsO3UWQXxIlKTC1W.jpeg', '0', '2017-02-28 21:46:04', '2017-02-28 21:46:04');
INSERT INTO `news` VALUES ('45', '阿萨德开幕式kgi叫什么地块', '<p>阿萨德开幕式kgi叫什么地块阿萨德开幕式kgi叫什么地块阿萨德开幕式kgi叫什么地块阿萨德开幕式kgi叫什么地块阿萨德开幕式kgi叫什么地块</p><p><br></p>', 'images/ynPgv_2BCN8QkBxZxEkwF5NO.jpeg', '0', '2017-02-28 21:46:41', '2017-02-28 21:46:41');
INSERT INTO `news` VALUES ('46', ' 不明白你们不那么', '<p>&nbsp;不明白你们不那么 不明白你们不那么 不明白你们不那么 不明白你们不那么 不明白你们不那么 不明白你们不那么 不明白你们不那么 不明白你们不那么 不明白你们不那么</p><p><br></p>', 'images/QZLo5AdHahm-kSE6k0zGBh64.png', '0', '2017-03-01 16:40:21', '2017-03-01 16:40:21');
INSERT INTO `news` VALUES ('47', '阿斯打扫大', '<p>阿斯打扫大阿斯打扫大阿斯打扫大阿斯打扫大</p><p><br></p>', 'images/TY_BG_GSdFwy12ctLHL7Ey6H.jpeg', '1', '2017-03-02 09:21:10', '2017-03-02 09:21:42');
INSERT INTO `news` VALUES ('48', '规划局冰女', '<p>阿斯打扫大阿斯打扫大<img src=\"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif\"></p><p><br></p>', 'images/qpvR4Tx0c1qSskxVMPqvtNR1.png', '1', '2017-03-02 09:55:41', '2017-03-02 09:55:58');

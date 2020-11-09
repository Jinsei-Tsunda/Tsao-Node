-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 11 月 03 日 08:17
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ruby`
--

-- --------------------------------------------------------

--
-- 資料表結構 `Order_Info`
--

CREATE TABLE `Order_Info` (
  `Order_id` int(11) NOT NULL,
  `Order_State` int(11) NOT NULL,
  `Order_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Member_id` int(11) NOT NULL,
  `Member_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_deliver_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_deliver_store` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_package_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_pay` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Order_CreatedTime` datetime NOT NULL,
  `Order_Amount` int(11) NOT NULL,
  `Order_TotalPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `Order_Info`
--

INSERT INTO `Order_Info` (`Order_id`, `Order_State`, `Order_code`, `Member_id`, `Member_name`, `Order_name`, `Order_mobile`, `Order_deliver_type`, `Order_deliver_store`, `Order_package_id`, `Order_address`, `Order_pay`, `Order_CreatedTime`, `Order_Amount`, `Order_TotalPrice`) VALUES
(1, 1, '20043UUHWGGI', 1, 'Bunny', 'Mandy', '0933193827', 'a', '大安門市', 'SALW00291', '', 'a10', '0000-00-00 00:00:00', 6, 2800),
(2, 2, '20043CLDOGIQ', 1, 'Bunny', 'Wendy', '0983716483', 'c', '大安門市', 'SALW00402', '', 'c20', '0000-00-00 00:00:00', 4, 1800),
(3, 2, '20043CDKCFVR', 1, 'Bunny', 'Sandy', '0973638174', 'b', '大安門市', 'SALW00204', '', 'b40', '0000-00-00 00:00:00', 4, 1550),
(4, 1, '20043UUHUROW', 1, 'Bunny', 'Max', '0948371934', 'd', '大安門市', 'SALW4819', '', 'd30', '0000-00-00 00:00:00', 6, 2500),
(5, 1, '20043UUHWGGI', 49, 'Peggy', 'Ann', '0938271849', 'a', '大安門市', 'DAFW00291', '', 'a10', '0000-00-00 00:00:00', 0, 0),
(6, 2, '23013UUHWDIW', 49, 'Peggy', 'Yuan', '0983719372', 'c', '大安門市', 'SALW00402', '', 'c20', '0000-00-00 00:00:00', 0, 0),
(7, 2, '20043CDKCFV', 49, 'Peggy', 'Lee', '0938192837', 'b', '大安門市', 'SALW00204', '', 'b40', '0000-00-00 00:00:00', 0, 0),
(8, 1, '20020ODHWGGI', 49, 'Peggy', 'Tina', '0938271044', 'd', '大安門市', 'SALW4819', '', 'd30', '0000-00-00 00:00:00', 0, 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `Order_Info`
--
ALTER TABLE `Order_Info`
  ADD PRIMARY KEY (`Order_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `Order_Info`
--
ALTER TABLE `Order_Info`
  MODIFY `Order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

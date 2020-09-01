-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 01, 2020 at 10:32 PM
-- Server version: 5.7.31-0ubuntu0.18.04.1
-- PHP Version: 7.2.28-3+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo_items`
--

CREATE TABLE `todo_items` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item` text NOT NULL,
  `status` int(11) NOT NULL,
  `doc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todo_items`
--

INSERT INTO `todo_items` (`id`, `user_id`, `item`, `status`, `doc`) VALUES
(14, 5, 'test', 0, '2020-08-25 14:28:56'),
(15, 5, 'test', 0, '2020-08-25 14:28:57'),
(16, 5, 'test', 0, '2020-08-25 14:28:59'),
(17, 5, 'test', 0, '2020-08-25 14:28:59'),
(19, 4, 'Learn React', 0, '2020-09-01 14:49:02'),
(20, 4, 'Prepare interview questions', 0, '2020-09-01 14:50:19'),
(21, 4, 'Update Resume', 0, '2020-09-01 14:51:07'),
(22, 4, 'Get Job', 0, '2020-09-01 14:51:26'),
(23, 4, 'Put resignation', 0, '2020-09-01 14:51:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `doc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `doc`) VALUES
(4, 'sankar.nyros', 'sankar.nyros@gmail.com', '2020-08-15 06:36:35'),
(5, 'sam', 'sam@yopmail.com', '2020-08-25 14:27:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo_items`
--
ALTER TABLE `todo_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todo_items`
--
ALTER TABLE `todo_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

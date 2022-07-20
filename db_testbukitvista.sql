-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2022 at 10:43 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_testbukitvista`
--

-- --------------------------------------------------------

--
-- Table structure for table `favourite_movies`
--

CREATE TABLE `favourite_movies` (
  `id` int(10) NOT NULL,
  `title` varchar(20) NOT NULL,
  `user_id` int(10) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favourite_movies`
--

INSERT INTO `favourite_movies` (`id`, `title`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 'batman', 1, '2022-07-20', '2022-07-20'),
(2, 'superman', 1, '2022-07-20', '2022-07-20'),
(3, 'naruto', 2, '2022-07-20', '2022-07-20'),
(4, 'cinderella', 3, '2022-07-20', '2022-07-20');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(12) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'ishak', 'ishak123', '2022-07-19', '2022-07-19'),
(2, 'fahri', 'fahri123', '2022-07-20', '2022-07-20'),
(3, 'nabil', 'nabil123', '2022-07-20', '2022-07-20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourite_movies`
--
ALTER TABLE `favourite_movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favourite_movies`
--
ALTER TABLE `favourite_movies`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

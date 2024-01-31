<?php 
$host = "localhost";
$dbuser = "root";
$dbpwd = "";
$dbname = "";

/**
 * Connection can be done in two way majourly
 * - (PHP MySQL) = MySQL query itself (recommended)
 * - (PDO) = Object concept to accept any DBMS lately (i.e.: MySQL, ProstGreSQL, SQL etc)
 * -------------------------------
 * PDO = PHP Data Objects
 * SQL = Structured Query Language
 * MySQL = Database Management System
 * phpmyadmin = GUI Platform to use MySQL 
 * 
 * Note1: We recommend MySQL queries on our project considering performance. Because, we are using MySQL DBMS, where lets not use Generalized Query standard like PDO.
 * 
 * Note2: Using PHP/MySQL, there are also two methods of connection
 * - procedural/function based (i.e.: mysqli_connect())
 * - object oriented / instance based (i.e.: new mysqli())
 * 
 * Here, use instance based which is new method
 * - mysqli = MySQL instance (old has mylsql only as a term)
 */

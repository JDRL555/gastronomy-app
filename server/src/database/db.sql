CREATE DATABASE gastronomy_app_db;
USE gastronomy_app_db;

CREATE TABLE users(
  id_user INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_user TEXT NOT NULL,
  lastName_user TEXT NOT NULL,
  user_name VARCHAR(30) NOT NULL UNIQUE,
  email_user VARCHAR(30) NOT NULL UNIQUE,
  password_user VARCHAR(255) NOT NULL
);

CREATE TABLE courses(
  id_course INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name_course VARCHAR(20) NOT NULL,
  description_course TEXT NOT NULL,
  category_course SET ("comidas saladas", "dulces") NOT NULL,
  hours_course FLOAT NOT NULL,
  price_course INT DEFAULT 0,
  type_course SET ("presencial", "virtual") DEFAULT "virtual"
);

CREATE TABLE viewed_courses(
  user_id INT UNSIGNED,
  course_id INT UNSIGNED,
  progress_course INT DEFAULT 0,
  completed_course BOOLEAN DEFAULT 0,
  CONSTRAINT FOREIGN KEY(user_id) REFERENCES users(id_user),
  CONSTRAINT FOREIGN KEY(course_id) REFERENCES courses(id_course)
);
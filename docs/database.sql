CREATE DATABASE prueba_database

DROP TABLE IF EXISTS charges;
CREATE TABLE charge (
	id_charge SERIAL PRIMARY KEY,
	name_charge VARCHAR(200)
);


DROP TABLE IF EXISTS sector;
CREATE TABLE sector (
	id_sector SERIAL PRIMARY KEY,
	name_sector VARCHAR(200)
);


DROP TABLE IF EXISTS course_status;
CREATE TABLE course_status (
	id_statu SERIAL PRIMARY KEY,
	name_statu VARCHAR(200)
);


DROP TABLE IF EXISTS course_type;
CREATE TABLE course_type (
	id_typeC SERIAL PRIMARY KEY,
	name_type VARCHAR(200)
);


DROP TABLE IF EXISTS registration_type;
CREATE TABLE registration_type (
	id_typeR SERIAL PRIMARY KEY,
	name_registration VARCHAR(200)
);


DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
	id_role SERIAL PRIMARY KEY,
	name_role VARCHAR(200)
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id_user SERIAL PRIMARY KEY,
	name_user VARCHAR(200) NOT NULL,
	email VARCHAR(200) UNIQUE NOT NULL,
	password_user TEXT NOT NULL,
	id_role INT,
	
	FOREIGN KEY (id_role) REFERENCES roles(id_role) 
	ON DELETE RESTRICT 
	ON UPDATE CASCADE
);


DROP TABLE IF EXISTS company;
CREATE TABLE company (
	id_company SERIAL PRIMARY KEY,
	name_company VARCHAR(250) NOT NULL,
	nit VARCHAR(250) UNIQUE NOT NULL,
	addres VARCHAR(250) NOT NULL,
	id_sector INT,
	
	FOREIGN KEY (id_sector) REFERENCES sector(id_sector)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);


DROP TABLE IF EXISTS personalized_courses;
CREATE TABLE personalized_courses (
	id_courseP SERIAL PRIMARY KEY,
	title_courseP VARCHAR(250) UNIQUE NOT NULL,
	description TEXT DEFAULT 'No description',
	duration TIME NOT NULL,
	id_company INT,
	
	FOREIGN KEY (id_company) REFERENCES company(id_company)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);


DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
	id_course SERIAL PRIMARY KEY,
	title_course VARCHAR(200),
	description TEXT DEFAULT 'No description',
	duration TIME NOT NULL, 
	id_statu INT,
	id_typeC INT, 
	
	FOREIGN KEY (id_statu) REFERENCES course_status(id_statu)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,
	
	FOREIGN KEY (id_typeC) REFERENCES course_type(id_typeC)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);


DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
	id_employee SERIAL PRIMARY KEY,
	id_charge INT,
	id_user INT,
	id_company INT,
	
	FOREIGN KEY (id_charge) REFERENCES charge(id_charge)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,
	
	FOREIGN KEY (id_user) REFERENCES users(id_user)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	FOREIGN KEY (id_company) REFERENCES company(id_company)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
	
);



DROP TABLE IF EXISTS registrations;
CREATE TABLE registrations (
	id_registration SERIAL PRIMARY KEY,
	id_employee INT,
	id_course INT,
	id_courseP INT,
	id_typeR INT,
	start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	end_date TIMESTAMP NOT NULL,

	FOREIGN KEY (id_employee) REFERENCES employees(id_employee)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	FOREIGN KEY (id_course) REFERENCES courses(id_course)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	FOREIGN KEY (id_courseP) REFERENCES personalized_courses(id_courseP)
	ON DELETE RESTRICT 
	ON UPDATE CASCADE,

	FOREIGN KEY (id_typeR) REFERENCES registration_type(id_typeR)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
	
);
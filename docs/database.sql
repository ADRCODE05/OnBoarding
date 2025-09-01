/*DROP DATABASE IF EXISTS onboarding_db;
CREATE DATABASE onboarding_db;
USE onboarding_db;*/

-- Table structure for sector
DROP TABLE IF EXISTS sector;
CREATE TABLE sector (
    sector_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_sector VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for companies
DROP TABLE IF EXISTS companies;
CREATE TABLE companies (
    company_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(200) NOT NULL,
    nit VARCHAR(100) NOT NULL,
    adress VARCHAR(250),
    contact VARCHAR(60) NOT NULL,
    sector_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sector_id)
        REFERENCES sector (sector_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for charges
DROP TABLE IF EXISTS charges;
CREATE TABLE charges (
    charge_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_charge VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for roles
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_role VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for users
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(350) NOT NULL,
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (role_id)
        REFERENCES roles (role_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for employees
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(200) NOT NULL,
    identification_number VARCHAR(90) NOT NULL,
    phone VARCHAR(60) NOT NULL,
    charge_id INT NOT NULL,
    company_id INT NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (charge_id)
        REFERENCES charges (charge_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
        
	FOREIGN KEY (company_id)
        REFERENCES companies (company_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
        
	FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);


-- Table structure for courses_states
DROP TABLE IF EXISTS courses_states;
CREATE TABLE courses_states (
    state_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_state VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for courses_type
DROP TABLE IF EXISTS courses_type;
CREATE TABLE courses_type (
    type_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_type VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for courses
DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
    course_id INT NOT NULL PRIMARY KEY,
	title VARCHAR(250) NOT NULL,
	description TEXT NOT NULL,
    duration TIME,
    state_id INT,
	type_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
	FOREIGN KEY (state_id)
        REFERENCES courses_states (state_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
        
	FOREIGN KEY (type_id)
        REFERENCES courses_type (type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for personalized_courses
DROP TABLE IF EXISTS personalized_courses;
CREATE TABLE personalized_courses (
    coursep_id VARCHAR(60) NOT NULL PRIMARY KEY,
	title VARCHAR(250) NOT NULL,
	description TEXT NOT NULL,
    duration TIME,
    company_id INT,
	state_id INT,
	type_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (state_id)
        REFERENCES courses_states (state_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
        
	FOREIGN KEY (type_id)
        REFERENCES courses_type (type_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    
    FOREIGN KEY (company_id)
        REFERENCES companies (company_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for registrations
DROP TABLE IF EXISTS registrations;
CREATE TABLE registrations (
    registration_id INT NOT NULL PRIMARY KEY,
	employee_id INT,
	start_date DATETIME,
    end_date DATETIME,
    coursep_id VARCHAR(60),
    course_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (employee_id)
        REFERENCES employees (employee_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
        
	FOREIGN KEY (coursep_id)
        REFERENCES personalized_courses (coursep_id)
        ON DELETE RESTRICT ON UPDATE CASCADE,
        
	FOREIGN KEY (course_id)
        REFERENCES courses (course_id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);
/*DROP DATABASE IF EXISTS onboarding_db;
CREATE DATABASE onboarding_db;
USE onboarding_db;*/

-- Table structure for sector
DROP TABLE IF EXISTS sector;

CREATE TABLE sector (
    sector_id SERIAL PRIMARY KEY,
    name_sector VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for companies
DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    full_name VARCHAR(200) NOT NULL,
    nit VARCHAR(100) NOT NULL,
    adress VARCHAR(250),
    contact VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sector_id) REFERENCES sector (sector_id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for charges
DROP TABLE IF EXISTS charges;

CREATE TABLE charges (
    charge_id SERIAL PRIMARY KEY,
    name_charges VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for roles
DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    name_role VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table structure for users
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(350) NOT NULL,
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles (role_id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for employees
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    full_name VARCHAR(200) NOT NULL,
    identification_number VARCHAR(90) NOT NULL,
    phone VARCHAR(60) NOT NULL,
    charge_id INT NOT NULL,
    company_id INT NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (charge_id) REFERENCES roles (charge_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (company_id) REFERENCES companies (company_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Table structure for registrations
DROP TABLE IF EXISTS registrations;

CREATE TABLE registrations (
    registration_id VARCHAR(60) NOT NULL PRIMARY KEY,
    employee_id INT NOT NULL,
    start_date DATETIME,
    end_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees (employee_id) ON DELETE SET NULL ON UPDATE CASCADE
);


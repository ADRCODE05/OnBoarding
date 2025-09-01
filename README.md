# 🚀 Onboarding Platform

## 📌 Description

The **Onboarding Platform** is an employee onboarding and training management system.
Its main objective is to **organize and automate** the onboarding process for new employees and track courses/training within the company.

The platform adapts to the **user role**, displaying specific modules and features based on the assigned profile (Employee, HR, or Admin).

---

## 🛠 Technologies Used

- **Node.js + Express** → Backend and REST API
- **MySQL** → Relational Database
- **HTML, JavaScript, Tailwind CSS** → Frontend
- **JWT** → Authentication and Authorization
- **Swagger** → API Documentation
- **Postman** → API Testing

---

## 👥 Team Members

- **Scrum Master:** Hernando Lopez
- **Product Owner:** Melanie Rivera Giron
- **Developer:** Hector Daniel Vargas Cassiani
- **Developer:** Carlos Adrian Vellojin Vellojin

---

## 🔑 Testing Credentials by Role

| Role     | email                      | password                   |
| -------- | -------------------------- | -------------------------- |
| Employee | employee@example.com       | employee123                |
| HR       | humanresources@example.com | humanresources@example.com |
| Admin    | admin@example.com          | admin123                   |

---

## 📂 Platform Modules

1. **Dashboard** → General statistics and progress (HR and Admin only).
2. **Courses** → General and custom course management (All).
3. **Reports** → Employee monitoring and participation (HR and Admin).
4. **Documents** → Access to relevant documentation.
5. **Profile** → User profile management and viewing.

---

## 👤 Roles and Features

### 🧑 Employee

- View available courses.
- Enroll in and out of courses.
- View your profile and documentation.

### 🧑‍💼 HR (Human Resources)

- All employee features.
- Reports and employee progress monitoring.
- Access to statistics and dashboards.

### 👨‍💻 Admin

- Complete CRUD for users, employees, courses, and records.
- Full access to all modules and statistics.

---

## 📂 Project Structure

```

├── backend
│ ├── .env # Environment variables
│ ├── app.js # Main Express file
│ ├── server.js # Server
│ ├── package.json
│ ├── db
│ │ └── db.js # Database connection
│ └── src
│ ├── controllers # API controllers
│ ├── middleware # Auth and role middleware
│ ├── models # Queries to the database
│ ├── routes # API routes
│ ├── services # Business logic
│ ├── swagger # Swagger documentation
│ └── utils # Helper functions (JWT, etc.)
├── docs
│ ├── api-spec.md
│ ├── architecture.md
│ ├── database-schema.md
│ ├── database.sql
│ └── README.md
└── frontend
├── index.html
└── src
├── assets # Resources such as images and styles
├── components # Reusable components
├── js # Frontend scripts
└── pages # System HTML pages
```

---

## 🗄 Database

The database is defined in `docs/database.sql` and includes the following main tables:

- **Users** (users)
- **Roles** (roles)
- **Employees** (employees)
- **Companies** (companies)
- **Charges** (charges)
- **General courses** (courses)
- **Custom courses** (personalized_courses)
- **Registration records** (registrations)

### 📊 Relational Diagram

👉 [Link to the diagram] [Relational](./docs/MODELO_RELACIONAL.png)

### 🗺 Navigation Map

👉 [Link to navigation map](./docs/diagrama-navegacion-p.-m..png)

### ⚙️ Component Diagram

👉 [Link to component diagram](./docs/image.png)

---

## 📄 Main Endpoints

### 🔹 Users

- `POST /login` → Log in
- `GET /users` → List all users
- `GET /users/id/:user_id` → Search user by ID
- `POST /users/create` → Create user
- `DELETE /users/delete/id/:user_id` → Delete user

### 🔹 Employees

- `GET /employees` → List Employees
- `POST /employees/new/employee` → Create employee
- `PUT /employees/update/id/:employee_id` → Update employee
- `DELETE /employees/delete/id/:employee_id` → Delete employee

### 🔹 Courses

- `GET /courses` → List courses
- `POST /courses/create` → Create course
- `PUT /courses/update/:course_id` → Update course
- `DELETE /courses/delete/id/:course_id` → Delete course

### 🔹 Custom Courses

- `GET /courses/personalized` → List custom courses
- `POST /courses/personalized/new` → Create custom course

### 🔹 Course Registrations

- `GET /registration` → List registrations
- `POST /registration/new` → Register current employee
- `DELETE /registration/delete/:registration_id` → Delete registration

---

## ⚡ How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/ADRCODE05/OnBoarding.git
```

2. Install dependencies:

```bash
cd backend
npm install
```

3. Configure environment variables:

- Copy `.env.example` to `.env` and set database credentials.

4. Create the database with the script:

```bash
mysql -u root -p < docs/database.sql
```

5. Start the server (port **4000**):

```bash
npm run start
```

6. Open the frontend from `frontend/index.html` or deploy it to a web server.

---

## 📖 API Documentation

Swagger available at:
👉 [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

---

## 👤 Project Information

- **Group Project** – Onboarding Platform

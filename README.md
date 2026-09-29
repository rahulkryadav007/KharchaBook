# 💰 KharchaBook — Expense Management System

A beginner-friendly **Java Full-Stack Expense Management System** built with **Java 21, Spring Boot, Spring Data JPA, Hibernate, MySQL, HTML, CSS and JavaScript**.

KharchaBook lets users **create, view, update and delete expenses** through a simple web interface. The project is designed as a practical learning reference for understanding how a Java Full-Stack application works from the browser to the database.

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Application Architecture](#-application-architecture)
- [Project Structure](#-project-structure)
- [How the Application Works](#-how-the-application-works)
- [Database Design](#-database-design)
- [REST API Documentation](#-rest-api-documentation)
- [Important Spring Boot Concepts](#-important-spring-boot-concepts)
- [Setup and Installation](#-setup-and-installation)
- [Testing with Postman](#-testing-with-postman)
- [CRUD Flow](#-crud-flow)
- [Interview Perspective](#-interview-perspective)
- [Common Interview Questions](#-common-interview-questions)
- [How to Explain This Project](#-how-to-explain-this-project-in-an-interview)
- [Learning Path](#-learning-path)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

## 📖 Project Overview

KharchaBook is a web-based expense management application. It demonstrates the complete basic flow of a Java Full-Stack application:

```text
Frontend
   ↓
REST API
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
JPA / Hibernate
   ↓
MySQL
```

A user can add an expense, retrieve all expenses, retrieve an expense by ID, update an expense, and delete an expense.

## ✨ Features

- Create an expense
- View all expenses
- View an expense by ID
- Update an expense
- Delete an expense
- Store expense data in MySQL
- REST API based backend
- Simple HTML/CSS/JavaScript frontend
- Postman-compatible API endpoints

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Java 21 | Backend programming language |
| Spring Boot | Backend application framework |
| Spring Web | REST API development |
| Spring Data JPA | Database/repository abstraction |
| Hibernate | ORM / JPA implementation |
| MySQL | Relational database |
| HTML5 | Frontend structure |
| CSS3 | Frontend styling |
| JavaScript | Frontend logic and API communication |
| Maven | Build and dependency management |
| Postman | API testing |
| Git | Version control |
| GitHub | Source-code hosting |

## 🧠 Core Technology Definitions

### Java
Java is a high-level, object-oriented programming language. In this project it is used to implement the backend application and business logic.

### Spring Boot
Spring Boot simplifies the development of Java applications by providing auto-configuration, embedded server support and easy integration with Spring technologies.

### REST API
A REST API allows software systems to communicate over HTTP using resources and standard HTTP methods such as GET, POST, PUT and DELETE.

### Spring Data JPA
Spring Data JPA provides repository abstractions for working with relational databases without writing basic CRUD SQL manually.

### JPA
JPA (Java Persistence API) is a specification that defines how Java objects are persisted to relational databases.

### Hibernate
Hibernate is an ORM framework and a popular implementation of JPA. It maps Java objects to database tables and handles persistence operations.

Simple interview memory trick:

```text
JPA      = Specification / Rules
Hibernate = Implementation
```

### ORM
ORM means Object Relational Mapping. It maps application objects to relational database data.

```text
Java Object  →  Database Table
```

### MySQL
MySQL is a relational database management system used here to permanently store expense records.

### JSON
JSON is a lightweight text format used to exchange data between the frontend and backend.

## 🏗️ Application Architecture

KharchaBook uses a simple layered architecture:

```text
                    USER
                     │
                     ▼
              HTML / CSS / JS
                     │
                HTTP Request
                     │
                     ▼
              REST CONTROLLER
                     │
                     ▼
                  SERVICE
                     │
                     ▼
                REPOSITORY
                     │
                     ▼
              JPA / HIBERNATE
                     │
                     ▼
                  MYSQL
```

### Layer Responsibilities

**Controller:** receives HTTP requests and returns HTTP responses/data.

**Service:** contains application/business logic and coordinates operations between controller and repository.

**Repository:** communicates with the database through Spring Data JPA.

**Entity:** represents persistent data as a Java object.

**Frontend:** collects user input, displays data and communicates with the REST API using JavaScript.

## 📂 Project Structure

```text
kharchabook/
│
├── .mvn/
├── src/
│   ├── main/
│   │   ├── java/com/kharchabook/
│   │   │   ├── KharchabookApplication.java
│   │   │   ├── controller/
│   │   │   │   └── ExpenseController.java
│   │   │   ├── entity/
│   │   │   │   └── Expense.java
│   │   │   ├── repository/
│   │   │   │   └── ExpenseRepository.java
│   │   │   └── service/
│   │   │       └── ExpenseService.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── style.css
│   │       │   └── script.js
│   │       └── application.properties
│   └── test/
├── pom.xml
├── mvnw
├── mvnw.cmd
└── .gitignore
```

## 🔄 How the Application Works

For example, when a user adds an expense:

```text
User enters expense
        ↓
JavaScript sends POST request
        ↓
ExpenseController receives JSON
        ↓
ExpenseService processes request
        ↓
ExpenseRepository saves entity
        ↓
Hibernate generates database operation
        ↓
MySQL stores the expense
        ↓
Response returns to frontend
```

Example JSON:

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "description": "Lunch with friends",
  "expenseDate": "2026-09-29"
}
```

## 🗄️ Database Design

Database:

```text
kharchabook
```

Main table:

```text
expense
```

| Column | Typical Type | Description |
|---|---|---|
| id | BIGINT | Primary key |
| title | VARCHAR | Expense title |
| amount | FLOAT/DOUBLE | Expense amount in the current implementation |
| category | VARCHAR | Expense category |
| description | VARCHAR | Expense description |
| expense_date | DATE | Expense date |

> **Money note:** for production financial applications, `BigDecimal` is generally preferred over floating-point types because it provides decimal arithmetic suitable for monetary values.

## 🔌 REST API Documentation

Base URL:

```text
http://localhost:8080/api/expenses
```

### 1. Create Expense

```http
POST /api/expenses
```

Request body:

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "description": "Lunch",
  "expenseDate": "2026-09-29"
}
```

### 2. Get All Expenses

```http
GET /api/expenses
```

Returns all stored expenses.

### 3. Get Expense By ID

```http
GET /api/expenses/{id}
```

Example:

```http
GET /api/expenses/1
```

### 4. Update Expense

```http
PUT /api/expenses/{id}
```

Example:

```http
PUT /api/expenses/1
```

### 5. Delete Expense

```http
DELETE /api/expenses/{id}
```

Example:

```http
DELETE /api/expenses/1
```

## 🔄 CRUD Flow

CRUD stands for:

| Operation | Meaning | HTTP Method |
|---|---|---|
| Create | Add data | POST |
| Read | Retrieve data | GET |
| Update | Modify data | PUT |
| Delete | Remove data | DELETE |

KharchaBook implements all four basic CRUD operations.

## 🎯 Important Spring Boot Concepts

### `@RestController`
Marks a class as a REST controller whose methods can return data directly as HTTP responses.

### `@RequestMapping`
Defines a common URL prefix, for example:

```java
@RequestMapping("/api/expenses")
```

### `@GetMapping`
Maps an HTTP GET request to a controller method.

### `@PostMapping`
Maps an HTTP POST request to a controller method.

### `@PutMapping`
Maps an HTTP PUT request to a controller method.

### `@DeleteMapping`
Maps an HTTP DELETE request to a controller method.

### `@RequestBody`
Converts incoming JSON request data into a Java object.

```java
@RequestBody Expense expense
```

### `@PathVariable`
Reads a value from the URL.

```java
@GetMapping("/{id}")
public Expense getExpenseById(@PathVariable Long id)
```

For `/api/expenses/10`, the value of `id` is `10`.

### `@Service`
Marks a class as a Spring service component.

### `@Entity`
Marks a class as a JPA entity that can be mapped to a database table.

### Dependency Injection
Spring creates and supplies required dependencies instead of the application manually constructing them. This project uses constructor-based dependency injection.

## 🧪 Testing With Postman

Test the backend independently using Postman:

```text
POST   /api/expenses
GET    /api/expenses
GET    /api/expenses/1
PUT    /api/expenses/1
DELETE /api/expenses/1
```

Testing the API independently helps separate backend problems from frontend problems.

## ⚙️ Configuration

The database configuration is kept in:

```text
src/main/resources/application.properties
```

Typical local configuration:

```properties
spring.application.name=kharchabook

spring.datasource.url=jdbc:mysql://localhost:3306/kharchabook
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**Security:** never commit a real database password, API key, token or other secret to a public GitHub repository. Use environment variables or external configuration for real projects.

## 🚀 Setup and Installation

### Prerequisites

Install:

- Java 21
- MySQL 8+
- Maven (or use the included Maven wrapper)
- Git
- Postman
- VS Code, IntelliJ IDEA or Eclipse

### Step 1 — Clone the Repository

```bash
git clone https://github.com/rahulkryadav007/KharchaBook.git
cd KharchaBook
```

### Step 2 — Create the Database

In MySQL Workbench:

```sql
CREATE DATABASE kharchabook;
```

### Step 3 — Configure MySQL

Update `application.properties` with your local MySQL username/password.

### Step 4 — Run the Application

Using the Maven wrapper on Windows:

```bash
mvnw.cmd spring-boot:run
```

Or run `KharchabookApplication.java` from your IDE.

### Step 5 — Open the Application

```text
http://localhost:8080
```

## 🎤 Interview Perspective

A project is interview-ready when you can explain not only **what** you wrote, but **why** you designed it that way and how a request travels through the application.

Be ready to explain:

```text
What did you build?
Why did you build it?
Which technologies did you use?
Why did you choose them?
How does a request flow through the application?
How is data persisted in MySQL?
How does CRUD work?
What is the role of each layer?
What problems did you face?
What would you improve next?
```

## ❓ Common Interview Questions

### 1. What is KharchaBook?

KharchaBook is a Java Full-Stack expense management application that allows users to create, view, update and delete expense records. The backend uses Spring Boot, Spring Data JPA and Hibernate, MySQL is used for persistence, and the frontend uses HTML, CSS and JavaScript.

### 2. Why did you use Spring Boot?

Spring Boot reduces configuration and makes it easier to build REST APIs and Java applications with features such as auto-configuration and an embedded server.

### 3. Why did you use Spring Data JPA?

It provides repository abstractions and ready-made CRUD operations, reducing boilerplate database code.

### 4. What is the role of the Controller?

The Controller receives HTTP requests, calls the appropriate service method and returns the response.

### 5. Why use a Service layer?

The Service layer keeps application/business logic separate from HTTP handling and database access, making the code easier to maintain and test.

### 6. What is the Repository layer?

It provides the database access abstraction. In this project it extends `JpaRepository<Expense, Long>`.

### 7. JPA vs Hibernate?

JPA is a specification; Hibernate is an ORM framework and a commonly used JPA implementation.

### 8. What is Dependency Injection?

Dependency Injection means a class receives its dependencies from the framework instead of creating them itself. Spring manages these dependencies through its IoC container.

### 9. What is `JpaRepository`?

`JpaRepository` is a Spring Data interface that provides common CRUD and JPA-related operations such as `save`, `findAll`, `findById` and `delete`.

### 10. What happens when `save()` is called?

The entity is passed to Spring Data JPA, which delegates persistence to JPA/Hibernate. Hibernate then generates the required SQL and persists the data in MySQL.

### 11. POST vs PUT?

POST is generally used to create a new resource. PUT is generally used to update or replace an existing resource at a known URI.

### 12. What happens when a user creates an expense?

```text
Frontend
   ↓
POST Request
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Hibernate
   ↓
MySQL
```

## 🧑‍💻 How to Explain This Project in an Interview

> I developed a Java Full-Stack Expense Management System called KharchaBook. It allows users to add, view, update and delete expenses. I developed the REST API using Spring Boot, used Spring Data JPA and Hibernate for persistence, and MySQL as the relational database. The frontend was built using HTML, CSS and JavaScript. I followed a layered architecture with Controller, Service, Repository and Entity layers. I also tested the REST APIs using Postman. The main learning objective was to understand the complete request flow from the frontend through the backend layers to database persistence.

## 📚 How to Rebuild This Project Yourself

A beginner can recreate the project in this order:

### Phase 1 — Create Spring Boot Project

Add dependencies:

```text
Spring Web
Spring Data JPA
MySQL Driver
```

### Phase 2 — Create Database

```sql
CREATE DATABASE kharchabook;
```

### Phase 3 — Create Entity

Create `Expense.java` with:

```text
id
title
amount
category
description
expenseDate
```

### Phase 4 — Create Repository

```java
ExpenseRepository extends JpaRepository<Expense, Long>
```

### Phase 5 — Create Service

Implement:

```text
saveExpense()
getAllExpenses()
getExpenseById()
updateExpense()
deleteExpense()
```

### Phase 6 — Create Controller

Expose:

```text
POST
GET
GET /{id}
PUT /{id}
DELETE /{id}
```

### Phase 7 — Test Backend

Use Postman to test every endpoint.

### Phase 8 — Build Frontend

Create:

```text
index.html
style.css
script.js
```

Connect JavaScript to the REST API.

### Phase 9 — Test Full Application

```text
Frontend
   ↓
Backend
   ↓
Database
```

### Phase 10 — Push to GitHub

```bash
git add .
git commit -m "Update project"
git push
```

## 🧠 Learning Path After This Project

Once the basic project is understood, the next useful Spring Boot concepts are:

1. Validation
2. Exception handling
3. `ResponseEntity`
4. HTTP status codes
5. DTOs
6. `BigDecimal` for monetary values
7. Pagination
8. Sorting
9. Searching and filtering
10. Spring Security
11. JWT authentication
12. Role-based authorization
13. Unit and integration testing
14. Deployment

These should be learned gradually rather than adding unnecessary complexity to the beginner version.

## 🚀 Future Enhancements

Possible future versions can add:

- User registration and login
- JWT authentication
- Multiple users
- Monthly expense reports
- Category-wise reports
- Search and filtering
- Pagination
- Expense charts
- CSV/PDF export
- Budget management
- Email notifications
- Dashboard
- Cloud deployment

## 📌 Key Learning Outcomes

After completing this project, a learner should understand:

- Java backend fundamentals
- Spring Boot fundamentals
- REST API development
- HTTP methods
- CRUD operations
- Dependency Injection
- Spring Data JPA
- Hibernate and ORM
- MySQL integration
- Entity mapping
- Layered architecture
- Frontend-backend communication
- JSON
- Postman API testing
- Git and GitHub

## ⭐ Learning Philosophy

Do not just copy the code. Try to understand:

```text
Why?
 ↓
How?
 ↓
What happens internally?
 ↓
Can I write it myself?
 ↓
Can I explain it in an interview?
```

That is the real goal of KharchaBook.

## 👨‍💻 Author

**Rahul Kumar Yadav**  
Java Developer | Technical Trainer

GitHub: [rahulkryadav007](https://github.com/rahulkryadav007)

---

⭐ If you are learning Java Full-Stack development, feel free to use this project as a practical reference. Learn the concepts, build it yourself, and then modify it with your own ideas.
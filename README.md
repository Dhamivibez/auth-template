# Auth Template

A robust authentication template built with Node.js, Express, and MongoDB. This template provides essential features for user authentication, including signup, login, password hashing, and JWT-based token generation.

## Features

- User signup with validation for username, email, and password.
- User login with support for both username and email as identifiers.
- Password hashing using `bcryptjs` for secure storage.
- JWT-based authentication for session management.
- Rate limiting to prevent abuse of authentication endpoints.
- Centralized error handling for consistent API responses.
- MongoDB integration using Mongoose for user data storage.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Dhamivibez/auth-template.git
   cd auth-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   dbName=<your-database-name>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication Routes

#### Signup

- **URL:** `/api/auth/signup`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Account Created Successfully"
  }
  ```

#### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "identifier": "johndoe",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login Successful"
  }
  ```

## Project Structure

```
src/
├── app.js                 # Main application entry point
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   └── auth.controller.js # Authentication controllers
├── middlewares/
│   ├── authLimiter.js     # Rate limiter middleware
│   ├── authValidation.js  # Request validation middleware
│   └── errorHandler.js    # Centralized error handler
├── models/
│   └── User.js            # User model
├── routes/
│   ├── auth.route.js      # Authentication routes
│   └── routes.js          # Main router
├── services/
│   └── auth.service.js    # Authentication services
├── utils/
│   ├── jwtUtils.js        # JWT utility functions
│   └── passwordUtils.js   # Password hashing and comparison utilities
├── validations/
│   └── auth.validation.js # Joi validation schemas
└── .env                   # Environment variables (not included in repo)
```

## Technologies Used

- **Backend Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT and bcryptjs
- **Validation:** Joi
- **Rate Limiting:** express-rate-limit

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Joi](https://joi.dev/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

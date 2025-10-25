# Online Bookstore

A full-stack web application for an online bookstore built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (login/register)
- Browse books by genre
- Search functionality
- Book details with reviews
- Shopping cart functionality
- Responsive design

## Technology Stack

### Frontend

- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- Heroicons for icons

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running locally
- Git

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd book-store
```

2. Install backend dependencies:

```bash
cd server
npm install
```

3. Set up environment variables:
   Create a `.env` file in the `server` directory (you can copy `.env.example`) with the following content:

```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/bookstore
JWT_SECRET=your-secret-key
```

4. Install frontend dependencies:

```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend development server:

```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
book-store/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   └── App.tsx       # Main application component
│   └── package.json
└── server/                # Backend Node.js application
    ├── models/           # MongoDB models
    ├── routes/          # API routes
    ├── middleware/      # Custom middleware
    ├── server.js        # Server entry point
    └── package.json
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Books

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `GET /api/books/genre/:genre` - Get books by genre
- `GET /api/books/search/:query` - Search books
- `POST /api/books/:id/reviews` - Add a review to a book

### Orders

- `POST /api/orders` - Create a new order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Professionalization & Git hygiene

I added repository hygiene and CI helpers to make the project ready for a professional workflow. Please follow these steps to clean up the repo if `node_modules` or other files were previously committed.

1. Add the new `.gitignore` and stop tracking generated files (run from project root):

```powershell
git rm -r --cached node_modules
git rm -r --cached client/node_modules
git rm -r --cached server/node_modules
git add .
git commit -m "chore: remove node_modules from repository and add .gitignore"
git push
```

2. Use the provided `.env.example` files in `server/` and `client/` as templates; never commit your real `.env`.

3. Continuous Integration: a basic GitHub Actions workflow `.github/workflows/ci.yml` is included to install dependencies and build the frontend on push/PR to `main`.

4. Formatting & linting: `.prettierrc`, `.eslintrc.json`, and `.editorconfig` were added to help standardize code style across contributors.

5. License: MIT license added to the repository.

If you'd like I can also:

- Remove `node_modules` from the git history (more invasive) using `git filter-repo` or `git filter-branch` and push the cleaned history.
- Add prettier/eslint pre-commit hooks via `husky` + `lint-staged`.

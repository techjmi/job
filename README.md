# Job Board Application

This is a full-stack job board application that scrapes job postings from Remotive.io and displays them in a responsive UI. The application includes user authentication (signup, login, profile update) using JWT but does not impact job fetching or searching.

## Live Demo
[Job Board Live](https://job-application-o7oi.onrender.com)

## GitHub Repository
[GitHub Repo](https://github.com/techjmi/job)

---

## Features
- Fetch job listings from an external API.
- Store job data in a MongoDB database.
- Display job listings with filters and search functionality.
- User authentication (JWT-based login, signup, profile update).
- Responsive UI with Skeleton loading.
- API routes for job fetching and user authentication.

## Technologies Used
- **Frontend:** React.js, Tailwind CSS, React Router, Axios, Toast notifications, Skeleton UI.
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT authentication.
- **Deployment:** Render.com

---

## Folder Structure
```
job/
│── client/               # Frontend React Application
│   ├── src/
│   │   ├── components/   # Reusable React Components
│   │   ├── App.js        # Main Application File
│   │   ├── main.jsx      # ReactDOM Render
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│
│── server/               # Backend Node.js Application
│   ├── controller/       # API Controllers
│   ├── database/         # MongoDB Connection
│   ├── middleware/       # Authentication Middleware
│   ├── models/          # Mongoose Schemas
│   ├── routes/          # API Routes
│   ├── utils/           # Utility Functions
│   ├── .env             # Environment Variables (Ignored)
│   ├── index.js         # Entry Point
│   ├── package.json
│
│── .gitignore            # Ignore node_modules, .env, build files
│── README.md             # Project Documentation
```

---

## API Routes
### Authentication Routes (`/api/auth`)
- **POST** `/register` - Register a new user.
- **POST** `/login` - Login user and return JWT token.
- **GET** `/profile` - Fetch user profile (Requires authentication).
- **PUT** `/profile` - Update user profile (Requires authentication).

### Job Routes (`/api/jobs`)
- **GET** `/` - Fetch jobs from the database.
- **POST** `/scrape` - Fetch jobs from Remotive API and store them in the database.

---

## Testing in Postman
You can test the following endpoints using Postman:
1. **Signup** (`POST` `/api/auth/register`)
2. **Login** (`POST` `/api/auth/login`)
3. **Get User Profile** (`GET` `/api/auth/profile`) - Requires JWT token.
4. **Update Profile** (`PUT` `/api/auth/profile`) - Requires JWT token.
5. **Fetch Jobs** (`GET` `/api/jobs`)

---

## Installation & Setup
### Backend Setup
```sh
cd server
npm install
npm start
```

### Frontend Setup
```sh
cd client
npm install
npm run dev
```

---

## Future Enhancements
- Implement infinite scrolling or pagination.
- Auto-refresh job listings every 24 hours.
- Job detail page with an apply button.

---

## License
This project is open-source and available under the MIT License.

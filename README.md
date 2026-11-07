# Online Assessment and Contest Platform 🚀

A comprehensive, full-stack MERN web application built for conducting timed online assessments, competitive programming contests, placement preparation MCQ tests, and AI-assisted interview tutoring.

---

## 🌟 Key Features

### 🎯 Online Contests & Assessments
- **Timed Assessments**: Real-time synchronized countdown timers with automatic submission when time expires.
- **Contest Life Cycle**: Upcoming, active, and completed contest states with participant registration and eligibility checks.
- **Interactive Test Interface**: Clean, distraction-free interface with question navigation, mark-for-review, and instant answer saving.
- **Comprehensive Results**: Instant grading, time spent, score calculation, and detailed solution reviews.

### 🏆 Live Contest Leaderboards
- **Real-Time Rankings**: Leaderboards ranked dynamically based on score, elapsed time, and submission timestamps.
- **Podium Highlights**: Distinctive styling for top 3 rankers (Gold, Silver, Bronze) with full participant listings.

### 🤖 AI Tutor & Interview Assistant
- **Powered by Google Gemini**: Integrated with `@google/genai` using Google Gemini models.
- **Interview Preparation Expert**: Specialized in Data Structures & Algorithms, System Design, OOP, DBMS, OS, Computer Networks, and Full-Stack Engineering.
- **Rich Markdown & Code Highlighting**: Formatted code blocks with syntax highlighting, copy-to-clipboard functionality, and structured markdown tables.

### 📝 Subject-Wise & Mock Practice Tests
- **Targeted Practice**: Generate tests by subject (e.g., DSA, Java, DBMS, Operating Systems, Web Development).
- **Customizable Mock Tests**: Configurable question pools and difficulty levels for placement test simulations.
- **Attempt History**: Full record of past attempts with score summaries, accuracy percentages, and question-level breakdowns.

### 📊 Analytics & Dashboard
- **Performance Overview**: Track total tests completed, average scores, and accuracy metrics.
- **Recent Activity**: Quick access to recent contest results and practice attempts.
- **User Profile**: Profile management and user statistics.

### 🛡️ Admin Management Panel
- **Question Bank CRUD**: Add, view, filter, edit, and delete questions with options and explanations.
- **Contest Management**: Create, schedule, and configure contests with specific question sets, durations, and start/end windows.
- **Role-Based Access Control**: Protected routes and API middleware separating regular participants from administrators.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Markdown & Code Highlighting**:
  - `react-markdown` & `remark-gfm`
  - `react-syntax-highlighter`
  - `react-copy-to-clipboard`
- **Styling**: Modern, responsive CSS3 with CSS variables and custom design system

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose 9](https://mongoosejs.com/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API)
- **Security & Authentication**:
  - JSON Web Tokens (`jsonwebtoken`)
  - Password Hashing (`bcrypt`)
  - Cross-Origin Resource Sharing (`cors`)
  - Environment Management (`dotenv`)

---

## 📂 Project Structure

```text
online-assessment-and-contest-platform/
├── Backend/
│   ├── src/
│   │   ├── config/              # MongoDB connection setup (db.js)
│   │   ├── controllers/         # Request handlers
│   │   │   ├── aiController.js
│   │   │   ├── authController.js
│   │   │   ├── contestAttemptController.js
│   │   │   ├── contestController.js
│   │   │   ├── dashboardController.js
│   │   │   ├── LeaderboardController.js
│   │   │   ├── questionController.js
│   │   │   ├── testAttemptController.js
│   │   │   └── testController.js
│   │   ├── middleware/          # authMiddleware & adminMiddleware
│   │   ├── models/              # Mongoose schemas (User, Question, Contest, ContestAttempt, TestAttempt)
│   │   ├── routes/              # Express API route declarations
│   │   └── services/            # aiService (Google Gemini integration)
│   ├── .env.example             # Backend environment template
│   ├── index.js                 # Express application entry point
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── api/                 # Axios client and API helpers (ai.js, axios.js)
│   │   ├── assets/              # Icons, logos, and images
│   │   ├── components/          # Reusable components (Navbar, ChatInput, ChatMessage, ProtectedRoute)
│   │   ├── context/             # AuthContext (user session & authentication state)
│   │   ├── pages/               # Application views
│   │   │   ├── admin/           # Admin views (AddQuestion, EditQuestion, ShowQuestions, AdminDashboard)
│   │   │   ├── AdminContest.jsx # Contest management
│   │   │   ├── AITutor.jsx      # Interactive AI preparation chat
│   │   │   ├── AttemptDetails.jsx
│   │   │   ├── ContestDetails.jsx
│   │   │   ├── ContestResult.jsx
│   │   │   ├── Contests.jsx
│   │   │   ├── ContestTest.jsx
│   │   │   ├── CreateContest.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Result.jsx
│   │   │   ├── StartTest.jsx
│   │   │   └── TestPage.jsx
│   │   ├── styles/              # CSS stylesheets corresponding to pages & components
│   │   ├── App.jsx              # Client router definitions
│   │   └── main.jsx             # React DOM root entry
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas connection URI)
- [Google Gemini API Key](https://aistudio.google.com/) (for AI Tutor)

---

### 1. Clone the Repository

```bash
git clone https://github.com/anmolavhad/online-assessment-and-contest-platform.git
cd online-assessment-and-contest-platform
```

---

### 2. Backend Configuration & Setup

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `Backend` directory (refer to `.env.example`):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the backend development server:
   ```bash
   npm run dev
   # or with nodemon:
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

---

### 3. Frontend Configuration & Setup

1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend application will be accessible at `http://localhost:5173`.

---

## 📡 API Endpoints Overview

| Module | Method | Endpoint | Description | Auth Required |
|---|---|---|---|---|
| **Auth** | `POST` | `/api/auth/register` | Register a new user | No |
| | `POST` | `/api/auth/login` | Authenticate user & retrieve JWT | No |
| **Questions** | `GET` | `/api/questions` | Fetch questions (filterable) | Yes |
| | `POST` | `/api/questions` | Create question | Admin |
| | `PUT` | `/api/questions/:id` | Update question | Admin |
| | `DELETE` | `/api/questions/:id` | Remove question | Admin |
| **Tests** | `GET` | `/api/tests/generate` | Generate random subject/mock test | Yes |
| | `POST` | `/api/test-attempts/submit` | Submit practice test answers | Yes |
| | `GET` | `/api/test-attempts/history` | Get user test attempt history | Yes |
| | `GET` | `/api/test-attempts/:id` | Get details of a specific attempt | Yes |
| **Contests** | `GET` | `/api/contests` | List available contests | Yes |
| | `POST` | `/api/contests` | Create new contest | Admin |
| | `GET` | `/api/contests/:id` | Get contest details | Yes |
| | `POST` | `/api/contest-attempts/start/:id` | Start a contest attempt | Yes |
| | `POST` | `/api/contest-attempts/submit/:id` | Submit contest answers | Yes |
| **Leaderboard** | `GET` | `/api/leaderboard/:contestId` | Get live contest leaderboard | Yes |
| **AI Tutor** | `POST` | `/api/ai/chat` | Query AI Tutor for interview guidance | Yes |
| **Dashboard** | `GET` | `/api/dashboard/stats` | Fetch user performance statistics | Yes |

---

## 🔒 Security & Best Practices

- **Password Encryption**: All passwords are automatically hashed with salted bcrypt before database persistence.
- **Token Verification**: Protected routes require valid Bearer JWT tokens in the `Authorization` header.
- **Admin Verification**: Strict middleware guarantees administrative endpoints cannot be accessed by normal user accounts.
- **Input Sanitization**: Request bodies are validated and processed safely via Express and Mongoose schemas.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

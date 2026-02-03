
# 🤖 AI Chat Application (Gemini API)

## 📌 Overview
An AI-powered chat application built as a Single Page Application (SPA) using React and Redux Toolkit, integrated with the Google Gemini API.  
The application enables real-time AI conversations and efficient chat history management, similar to modern AI chat platforms.

This project focuses on production-level frontend development, including state management, scalable architecture, and real-world UI features.

---

## ✨ Key Features
- Real-time AI chat using Google Gemini API
- Create new chat sessions and continue existing conversations
- Chat history management:
  - Search existing chats
  - Rename chat titles
  - Delete chats
  - Archive chats
  - Export chat history
- Sidebar-based chat navigation
- Auto-scroll to latest messages
- Error handling for API responses
- Responsive and clean UI

---

## 🛠️ Tech Stack
- Frontend: React, JavaScript (ES6+)
- State Management: Redux Toolkit
- API Integration: Google Gemini API
- Styling: CSS
- Build Tool: Vite
- Version Control: Git & GitHub

---

## 🧱 Architecture & Design
- Component-based architecture using React
- Centralized global state management with Redux slices
- Reusable components for chat input, messages, and sidebar
- Dedicated service layer for Gemini API communication
- Modular and scalable folder structure

---

## 📂 Project Structure
src/
├── Components/
│   ├── Chats/
│   │   ├── chatInput.jsx
│   │   └── chatMessages.jsx
│   └── Sidebar/
│       └── sidebar.jsx
├── Redux/
│   └── chatSlice.jsx
├── Services/
│   └── geminiApi.js
├── App.jsx
└── main.jsx

---

## ⚙️ Installation & Setup
1. Clone the repository:
   git clone https://github.com/PuduSravani19/Gemini-AI-Chat-Application.git

2. Navigate to the project directory:
   cd ai-chat-app

3. Install dependencies:
   npm install

4. Create a .env file in the root directory:
   VITE_GEMINI_API_KEY=your_gemini_api_key

5. Start the development server:
   npm run dev

---

## 🎯 Learning Outcomes
- Hands-on experience with Redux Toolkit for complex state management
- Real-world integration of AI APIs
- Improved understanding of scalable frontend architecture
- Practical experience with debugging and error handling
- Strengthened Git and GitHub workflow

---

## 🚀 Future Enhancements
- User authentication and authorization
- Cloud-based chat history storage
- Streaming AI responses
- Dark / Light theme support
- Mobile-first UI improvements

---

## ⭐ Why This Project Matters
This project demonstrates production-ready frontend skills, including React and Redux integration, API handling, UI state management, and scalable application design.  
It is well-suited for Frontend Developer and React Developer roles.

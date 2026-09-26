# 🎓 ed_tech

A modern **Learning Management System (LMS)** frontend that allows users to explore courses, search for courses, view course details, preview course content, and access complete course modules after enrollment.

The application provides a simple and interactive learning experience with **Clerk authentication** for secure user registration and login.

---

## 📌 About The Project

**LMS_Protel** is a frontend-based Learning Management System designed to provide users with an easy way to discover and learn from online courses.

Users can browse the available courses, search for specific courses, view detailed course information, and preview course content before enrolling.

For users who have enrolled in a course, the platform provides access to the complete course modules and learning videos.

---

## ✨ Features

### 🔐 Authentication

Authentication is handled using **Clerk**.

- User registration
- User login
- Secure authentication
- User session management
- Protected learning experience for authenticated users

---

### 🏠 Home Page

The home page provides an introduction to the LMS platform and allows users to explore available courses.

- Clean and responsive UI
- Course discovery
- Navigation to course listings
- Easy access to authentication

---

### 📚 Course List

Users can browse all available courses from the course listing page.

- Display available courses
- Course information
- Course thumbnails
- Course titles
- Easy navigation to course details

---

### 🔍 Search Courses

Users can search for courses using the search functionality.

```text
Search → Find Course → View Course Details
```

---

## 📖 Course Details

Users can open a course to view detailed information before deciding to enroll.

The course details page provides information such as:

- Course title
- Course description  
- Course content
- Course modules
- Course videos
- Enrollment status

---

## 🎥 Course Preview

Users who are not enrolled in a course can watch a preview video.

This allows users to understand the course content before enrolling.

 Not Enrolled
      ↓
Course Details
      ↓
 Preview Video
      ↓
    Enroll

---

## 🎓 Enrolled Course

After enrolling in a course, users can access the complete course content.

Enrolled users can:

-  Watch all course videos
-  Access complete modules
-  Continue learning through the course
-  Navigate between different modules
  
    Enrolled
       ↓
  Course Details
       ↓
  Complete Course
       ↓
Module 1 → Module 2 → Module 3 → ...

---

## 🛠️ Tech Stack
### Frontend
 - React.js
 - JavaScript
 - HTML5
 - CSS3
 - Tailwind CSS
### Authentication
 - Clerk
### Development Tools
 - Vite
 - Git
 - GitHub
 - VS Code
   
 ---

 ## 🚀 Getting Started
### 1. Clone the Repository
   git clone https://github.com/SouravKJ/LMS_Protel.git
### 2. Navigate to the Project
   cd LMS_Protel
### 3. Install Dependencies
   npm install
### 4. Configure Environment Variables
   Create a .env file in the root directory.
      VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
### 5. Run the Development Server
    npm run dev
  
  The application will usually be available at:
      
      http://localhost:5173     
---

## 🔄 Application Flow
  The basic user flow of LMS_Protel is:

                      ┌──────────────┐
                    │  Home Page   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Course List  │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │ Search Course│
                    └──────┬───────┘
                           │
                           ▼
                   ┌───────────────┐
                   │ Course Detail │
                   └───────┬───────┘
                           │
                ┌──────────┴──────────┐
                │                     │
                ▼                     ▼
          Not Enrolled             Enrolled
                │                     │
                ▼                     ▼
         Preview Video         Complete Course
                                      │
                                      ▼
                              All Course Modules
  
  ---

  ## 📸 Screenshots 
  
  ### 🏠 Home Page

  

  ### 🔐 Login / Registration

  

  ### 📚 Course List

  

  ### 🔍 Course Search

  

  ### 📖 Course Details

  

  🎥 Course Preview

  

  🎓 Enrolled Course

  

  📚 Course Modules


---

## 🔐 Authentication
  
  LMS_Protel uses Clerk for authentication.

  The authentication system provides:

  - Sign Up
  - Sign In
  - User session management
  - Authentication state
  - Secure access to enrolled course content

## 🎯 Learning Experience

  The platform follows a simple learning model:

   - Discover
     Users browse the available courses.
     
   - Search
     Users can search for a specific course.
     
   - Explore
     Users open the course details page to learn more about the course.
     
   - Preview
     Non-enrolled users can watch a preview video.
     
   - Enroll
     Users can enroll in the course.
     
   - Learn
     After enrollment, users can access the complete course and watch all available modules.

---

## 🚧 Future Improvements

   Some possible improvements for future versions include:

   - 💳 Online course payment
   - 📊 Student progress tracking
   - 🏆 Course completion certificates
   - 📝 Course quizzes and assessment
   - 💬 Student discussion section
   - ⭐ Course ratings and reviews
   - 🔔 Learning notifications
   - 📱 Mobile application
   - 📈 Student learning analytics
   - 🎯 Personalized course recommendations
   - 🌙 Dark mode

---

## 🤝 Contributing

  Contributions are welcome.

  ### Fork the repository
     git fork
  ### Create a new branch
     git checkout -b feature/new-feature
  ### Commit your changes
     git commit -m "Add new feature"
  ### Push your changes
     git push origin feature/new-feature
  Then open a Pull Request.

---

## 👨‍💻 Author
 - Sourav Kumar Jha
 - GitHub: [https://github.com/SouravKJ/ed_tech/tree/main ]

---

## ⭐ Support
  If you like this project, consider giving it a ⭐ on GitHub.

---

## 📄 License
    This project is created for educational and learning purposes.

---


    

  
   

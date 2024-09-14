# 🏆 Work Evaluation Dashboard

This is a React project bootstrapped with Vite. The application is a simple dashboard for managing users, with features such as searching, editing, and displaying detailed user information.

## 🚀 Features

- **User Search**: Filter users by their name or username 🔍.
- **View User Details**: Click on a user to view more detailed information such as email, role, and username 👤.
- **Edit User**: Modify user details (name, email, role) and save changes ✏️💾.
- **Responsive Design**: Works across a range of device sizes 📱💻.
- **Real-time Clock**: A clock that displays the current time on the dashboard ⏰.
- **Notifications**: Provides real-time feedback for actions like saving a user using React Toastify 🎉.
- **Authentication**: Mock authentication flow with hardcoded credentials for demo purposes 🔐.

## 🛠 Tech Stack

- **Vite**: Fast build tool and development server ⚡.
- **React**: JavaScript library for building user interfaces ⚛️.
- **TypeScript**: Adds static typing to JavaScript, improving code quality 📝.
- **React Router**: For handling navigation between login and dashboard pages 🚪.
- **Tailwind CSS**: Utility-first CSS framework for styling 🎨.
- **DaisyUI**: Tailwind CSS components for UI elements 🧩.
- **React Toastify**: Notifications and alerts 📢.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sathaphorn-S/admin_dashboard.git
   cd admin_dashboard-main

2. Install the dependencies:

   ```bash
    npm install

2. Start the development server:

   ```bash
    npm run dev

Open your browser and visit: http://localhost:5173/

⚙️ Available Scripts
npm run dev : Start the Vite development server 🚀.
npm run build : Build the project for production 📦.
npm run preview : Preview the production build locally 👁️.

🧑‍💻 How to Use

Login Page:

Use the following credentials:
Username: admin
Password: 123456

Once logged in, you'll be redirected to the dashboard.

Dashboard Page:

Search Users: Use the search bar to filter users by their username 🔍.
View Details: Click on any user to view more detailed information 👤.
Edit Details: Click the "Edit" button to modify a user’s information. Click "Save" to apply changes ✏️💾.
Logout: Click the logout button at the top right to return to the login page 🚪.


🌟 Project Structure

📦 src
 ┣ 📂components
 ┃ ┣ 📜BackgroundVideo.tsx    # Displays background video 🎞️
 ┃ ┣ 📜Clock.tsx             # Displays current time ⏰
 ┃ ┣ 📜UserDetail.tsx         # Shows detailed user info and edit form 📝
 ┃ ┣ 📜UserList.tsx           # Renders the list of users 📜
 ┣ 📂data
 ┃ ┗ 📜mockData.ts            # Mock user data 🗂️
 ┣ 📂pages
 ┃ ┣ 📜Dashboard.tsx          # Main dashboard page 📊
 ┃ ┗ 📜Login.tsx              # Login page 🔑
 ┣ 📂routes
 ┃ ┗ 📜AppRoutes.tsx          # Route handling for the app 🛣️
 ┗ 📜main.tsx                 # Entry point of the application 🚪


✨ Dependencies
React: ^18.0.0 ⚛️
React Router DOM: ^6.0.0 🚪
Vite: ^4.0.0 ⚡
TypeScript: ^5.0.0 📝
Tailwind CSS: ^3.0.0 🎨
DaisyUI: ^3.0.0 🧩
React Toastify: ^9.1.1 📢
👩‍💻 Author
Sathaphorn Sinlapee

# 🔐 Password Manager

A simple, user-friendly **Password Manager** built with **React**. It allows users to save, view, and manage usernames, passwords, and associated website URLs locally using the browser's `localStorage`.

## 🚀 Features

- 🔒 Save username, password, and website URL
- 👁️ Toggle password visibility
- 📋 Copy to clipboard functionality for username, password, and URL
- 🗑️ Delete saved entries
- 💾 Data is stored persistently using `localStorage`
- 🎉 Toast notifications for feedback (add, copy, delete)

## 🛠️ Technologies Used

- React JS
- Tailwind CSS (for styling)
- React Toastify (for notifications)
- UUID (for unique IDs)
- LocalStorage API (for persistent storage)

## 📸 Screenshots

> Add screenshots here (optional, if you want to visually show how your app looks)

## 📂 Folder Structure

```
src/
├── assets/
│   ├── copy.svg
│   ├── hide.svg
│   ├── remove.svg
│   └── show.svg
├── App.css
├── App.jsx
└── index.js
```

## 🧠 How it Works

1. The user fills out the username, password, and website URL.
2. On clicking **Add**, the data is saved to `localStorage` with a unique ID.
3. Saved data is displayed in a table with options to:
   - Copy each field to clipboard
   - Toggle password visibility
   - Delete entries

## 🧪 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/password-manager.git
   cd password-manager
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm start
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔧 Dependencies

- [React](https://reactjs.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Tailwind CSS](https://tailwindcss.com/)

Install these using:
```bash
npm install react-toastify uuid
```

> Tailwind should already be set up. If not, follow Tailwind setup guide [here](https://tailwindcss.com/docs/guides/create-react-app)

## ⚠️ Note

- This app stores data in `localStorage`, so it's only accessible in your browser and on your current device.
- No backend is used, so passwords are not encrypted or sent anywhere.

## 🙋‍♂️ Author

**Muhammad Aman**  
GitHub: [@muhammad-aman-dev](https://github.com/muhammad-aman-dev)

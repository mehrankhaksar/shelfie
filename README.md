📚 Shelfie

Shelfie is a simple React Native (Expo) reading list app where users can register, log in, and manage their personal book collection.

🚀 Features
🔐 Authentication (Register / Login / Logout)
📖 Create and manage a personal reading list
📝 Add books with title, author, and description
📋 View all saved books in a clean list
👤 User profile screen
🧭 Tab-based navigation (Profile / Books / Create)
🛠 Tech Stack
React Native (Expo)
Expo Router (file-based routing)
Context API (User & Books state management)
TypeScript/JavaScript (depending on setup)
Custom themed UI components
📂 Project Structure
/app – Routes (auth + dashboard)
/components – Reusable UI components
/contexts – User & Books providers
/hooks – Custom hooks (useUser, useBooks)
/constants – Theme & colors
## ▶️ Getting Started

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npx expo start
```

## 📦 Build

Production build:

```bash
eas build
```
🧠 Notes
Uses protected routes (UserOnly, GuestOnly)
Tabs only available for authenticated users
Keyboard-aware forms for better UX on mobile

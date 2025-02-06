📝 Notes App

A simple and efficient Notes App built with Next.js, TypeScript, Tailwind CSS, and RxDB.  
This app allows users to fetch, create, edit, and delete notes, while also storing them locally in RxDB for offline access.

## 🚀 Features

✅ Fetch a list of notes from an API (JSONPlaceholder).  
✅ Create, edit, and delete notes.  
✅ Store notes locally in RxDB for persistence.  
✅ Notes remain available after page refresh.  
✅ Offline mode – notes work even without an internet connection.  
✅ Modern UI with Tailwind CSS.  

## 📦 Tech Stack

Next.js – for a fast and efficient React-based framework.  
TypeScript – for type safety and better development experience.  
Tailwind CSS – for styling with utility-first classes.  
RxDB – for local storage and offline support.  
JSONPlaceholder – as a mock API.  

## 📂 Folder Structure

```plaintext
notes-app/  
│── public/                     # Static assets  
│── src/                        # Main source code  
│   ├── components/             # UI components  
│   │   ├── notes.tsx           # Notes list component  
│   │   ├── noteForm.tsx        # Add/Edit form  
│   │   ├── noteCard.tsx        # single note card  
│   ├── lib/                    # Business logic  
│   │   ├── db.ts               # RxDB setup  
│   │   ├── useNotes.ts         # Custom hook for notes logic  
│   ├── pages/                  # Next.js pages  
│   │   ├── index.tsx           # Main page  
│   ├── styles/                 # Global styles  
│   │   ├── globals.css         # Tailwind styles  
│── .gitignore                  # Git ignore file  
│── package.json                # Dependencies  
│── tailwind.config.js          # Tailwind CSS config  
│── tsconfig.json               # TypeScript config  
│── README.md                   # Documentation  
```

## 🛠️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Dychkevych90/test-note-app.git  
cd notesapp  

2️⃣ Install Dependencies  

npm install  

3️⃣ Start the Development Server  

npm run dev  

The app will be available at http://localhost:3000.  

🔧 How It Works  

1️⃣ Fetching Notes – On the first load, the app fetches notes from JSONPlaceholder and stores them in RxDB.  
2️⃣ Local Storage – All notes are stored locally in RxDB, so they persist even after a page refresh.  
3️⃣ Offline Mode – Since notes are stored in the browser, you can access them without an internet connection.  
4️⃣ CRUD Operations – You can add, edit, and delete notes dynamically.  

## 🚀 Happy Coding! 🎉  
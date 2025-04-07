# Emerging Tech - Final Assignment 

This app, **Generic Note Taker (GNT)**, is a simple and intuitive note-taking application built with Vue 3 and Vite. It allows users to create, view, edit, and delete notes. The app features a responsive design, making it accessible on various devices. Notes are stored locally using IndexedDB, enabling offline functionality. Key features include:

- **Add Notes**: Create new notes with a title and content.
- **View Notes**: Display notes in a card-based layout with expandable details.
- **Edit Notes**: Update the title and content of existing notes.
- **Delete Notes**: Remove unwanted notes with ease.
- **Offline Support**: Access and manage notes without an internet connection.

This app is ideal for users looking for a lightweight, offline-capable note-taking solution.

---

## Tech Stack

| Technology         | Purpose                                            |
|--------------------|----------------------------------------------------|
| **Vue.js**         | Frontend framework for building reactive UI        |
| **Pinia**          | State management for the notes system              |
| **Bulma**          | CSS framework for clean, responsive styling        |
| **IndexedDB**      | Client-side database for offline storage           |
| **Workbox**        | Service worker setup for PWA support and caching   |
| **Vite Plugin PWA**| Enables Progressive Web App (PWA) features of Workbox |
| **JavaScript**     | Logic and functionality                            |
| **Vite**           | Build tool and development server                 |

---

## Features

1. **Responsive Design**: The app is styled using Bulma, ensuring it works well on all screen sizes.
2. **Offline Functionality**: Notes are stored in IndexedDB, allowing users to access and manage them without an internet connection.
3. **Progressive Web App (PWA)**: The app can be installed on devices and used like a native app, thanks to Workbox and `vite-plugin-pwa`.
4. **Dynamic State Management**: Pinia manages the state of notes efficiently.
5. **Modern Development Stack**: This stack is built with Vue 3 and Vite for fast development and optimized builds.

---

## Project Setup

### 1. Scaffold the Project with Vite + Vue

```bash
npm create vite@latest
```

**Options selected:**
- Framework: `Vue`
- Variant: `JavaScript`
- Project name: `note_taker`

---

### 2. Install Dependencies

```bash
cd note_taker
npm install
```

>  Note: Warning shown about Node version (`v21.7.2`) not matching Vite’s recommended engines. The app still runs normally.

---

### 3. Run the Dev Server

```bash
npm run dev
```
##Folder Structure**
```bash
.gitignore
[index.html](http://_vscodecontentref_/0)
[package.json](http://_vscodecontentref_/1)
[README.md](http://_vscodecontentref_/2)
[vite.config.js](http://_vscodecontentref_/3)
.vscode/
    [extensions.json](http://_vscodecontentref_/4)
public/
    icons/
        app-development.png
        notes-svgrepo-com.svg
src/
    [App.vue](http://_vscodecontentref_/5)
    [main.js](http://_vscodecontentref_/6)
    [router.js](http://_vscodecontentref_/7)
    [style.css](http://_vscodecontentref_/8)
    assets/
        vue.svg
    stores/
        [noteStore.js](http://_vscodecontentref_/9)
    utils/
        [indexedDB.js](http://_vscodecontentref_/10)
    views/
        [Home.vue](http://_vscodecontentref_/11)
```

> Local development server starts at: `http://localhost:5173/`
---
**Key Files:**
- vite.config.js: `Configures Vite and sets up the PWA plugin with Workbox.`
- src/utils/indexedDB.js: `Handles all IndexedDB operations for storing, retrieving, and deleting notes.`
- src/stores/noteStore.js: `Manages the state of notes using Pinia.`
- src/views/Home.vue: `The main view where notes are displayed and managed.`
- src/style.css: `Contains custom styles for the app.`
---
**Additional Notes**
 - Icons: `The app uses icons from the public/icons folder for branding and UI elements.`
 - Browser Compatibility: `The app is designed to work on modern browsers that support IndexedDB and service workers.`
- PWA Installation: `Users can install the app on their devices by clicking "Add to Home Screen" in supported browsers.`
- Future Improvements: `Features like note categorization, search functionality, and cloud sync can be added in future updates.`
---
## Authors

**Stephen Landrigan**  
GitHub: [@StepheninSchool](https://github.com/StepheninSchool)

**Mai Ibrahim**
GitHub: [@Mai](https://github.com/W0496269)

**Jacob Poirier**
GitHub: [@Uncreative01](https://github.com/Uncreative01)


🌐 Portfolio Website

### 📝 Overview

This is a full-stack portfolio website showcasing the projects, skills, and achievements of Anshika Chaudhary, a Computer Science undergraduate. It combines a responsive front-end with a Node.js/Express backend and MongoDB Atlas for data storage, offering interactive features like a contact form and dynamic content display.

---

### 🛠️ Technologies Used

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MongoDB Atlas (for contact form and optional data storage)
* Environment Management: .env for configuration
* Routing & APIs: Express routes (routes/contact.js)
* Deployment Tools: Heroku / Render / Vercel / Railway
* Other Tools: Git for version control

---

### 📂 Project Structure

```
portfolio-website/
│
├── node_modules/              # Installed Node.js packages
├── routes/
│   └── contact.js             # Backend route for contact form
├── server.js                  # Node.js server entry point
├── package.json               # Project configuration and dependencies
├── package-lock.json          # Dependency tree
├── .env                       # Environment variables
│
├── frontend/
│   ├── index.html             # Home page
│   ├── about.html             # About me section
│   ├── projects.html          # Projects showcase
│   ├── contact.html           # Contact form page
│   ├── skills.html            # Skills section
│   ├── style.css              # Stylesheet for entire site
│   ├── JS/
│   │   └── script.js          # Frontend JavaScript
│   └── images/
│       └── Good_photo1.jpg    # Personal photo
│       └── Anshika_Resume.pdf # Resume PDF for download
```

---

### ✨ Features

* Full-stack architecture: Frontend + Backend + Database integration
* Fully responsive UI/UX design for desktop and mobile
* Interactive contact form connected to MongoDB Atlas
* Project showcase with descriptions, images, and external links
* Resume download functionality
* Organized skills section highlighting technical expertise
* Modular and scalable architecture for easy updates and extensions
* Deployment-ready with cloud hosting platforms like Heroku, Render, Vercel, or Railway

---

### 🚀 Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder and install dependencies:

```bash
npm install
```

3. Set up a `.env` file with your MongoDB Atlas connection string and any other environment variables:

```
MONGO_URI=<your-mongodb-atlas-uri>
PORT=5000
```

4. Start the server:

```bash
node server.js
```

5. Open `http://localhost:5000` in your browser

---

Do you want me to do that?

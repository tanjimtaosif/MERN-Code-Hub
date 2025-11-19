# Emergency Service Directory 🇧🇩

A clean, simple, and user-friendly web application that displays important government emergency hotline numbers for Bangladesh in one place. Users can copy hotline numbers, simulate calls, track call history, and interact with gamified counters like hearts, coins, and copy counts.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

---

## 📸 Screenshot

![Emergency Service Directory Screenshot](./screenshot.png)

*(Note: Ensure you place a `screenshot.png` file in your project root directory for this image to appear.)*

---

## ✨ Main Features

* **Centralized Hotlines:** All major emergency numbers (Police, Fire, Ambulance, Electricity, etc.) in one card-based layout.
* **One-Click Copy:** Instantly copy hotline numbers to your clipboard.
* **Interactive Call Simulation:** A "Call Now" button that simulates dialing, deducts virtual coins, and logs the call.
* **Gamified Interaction:** Click hearts to "like" services; counters track Hearts, Coins, and Copies in real-time.
* **Call History:** A dedicated panel tracking recent simulated calls with a clear-history option.
* **Responsive Design:** Fully mobile-responsive UI built with TailwindCSS and DaisyUI.

---

## 🛠️ Technologies Used

* **HTML5** - Semantic structure.
* **TailwindCSS** (via CDN) - Utility-first styling.
* **DaisyUI** (via CDN) - Component classes.
* **Vanilla JavaScript** - Logic for counters, clipboard, and history.
* **Google Fonts** - Typography (Hind Madurai & Roboto).
* **Font Awesome** - Iconography.

---

## 📦 Dependencies

This project relies on CDNs (Content Delivery Networks). No `npm install` is required.

* **Tailwind CSS:** `https://cdn.tailwindcss.com`
* **DaisyUI:** `https://cdn.jsdelivr.net/npm/daisyui@5.0.0/dist/full.css`
* **Font Awesome:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`

---

## 📁 Project Structure

```text
/project-root
├── index.html       # Main HTML structure
├── script.js        # Logic for interactions
├── assets/          # Folder for logos and icons
│   ├── logo.png
│   └── ...
└── screenshot.png   # Preview image for README
# InnoByte-AI-Hackathon
# 🎓 EduVerse — Student Course Enrollment Platform

> A modern, responsive multi-page web application for students to browse courses, enroll digitally, track their progress, and earn achievements.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Pages](#live-pages)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page-by-Page Guide](#page-by-page-guide)
- [Shared Architecture](#shared-architecture)
- [Technologies Used](#technologies-used)
- [Data Persistence](#data-persistence)
- [Responsive Design](#responsive-design)
- [Customization Guide](#customization-guide)
- [Screenshots](#screenshots)
- [Browser Support](#browser-support)

---

## Overview

**EduVerse** is a fully client-side, three-page student portal built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no backend required. Students can explore 12 courses across 4 academic categories, enroll with a single click, monitor their registered subjects on a personal dashboard, and unlock achievements as they progress.

All enrollment data is stored in the browser's `localStorage`, meaning state persists across page navigations and browser sessions without any server or database.

---

## Live Pages

| # | File | Title | Description |
|---|------|--------|-------------|
| 1 | `index.html` | 🔭 Browse Courses | Discover, search, filter, and enroll in courses |
| 2 | `dashboard.html` | 📊 My Dashboard | View registered subjects and track progress |
| 3 | `achievements.html` | 🏆 Achievements | Earn XP, unlock badges, and climb the leaderboard |

All three pages share a consistent sidebar navigation that links between them.

---

## Features

### 🔭 Browse Courses (index.html)
- **12 courses** across Science, Technology, Arts, and Business categories
- **Live search** — filters results as you type
- **Category filter buttons** — quickly narrow by subject area
- **Course cards** showing icon, rating, duration, level, and price
- **Detail modal** — click any card or "Details" to view full course info
- **One-click enrollment** — enroll or drop directly from the card or modal
- **Real-time stats bar** — shows total available courses and your enrolled count
- **Badges** for New, Popular, and Free courses

### 📊 My Dashboard (dashboard.html)
- **Summary stats** — active subjects, total credits, study hours, average progress
- **Quick access cards** — links to Browse Courses and Achievements
- **Category breakdown** — animated progress bars showing enrollment ratio per category (Science, Technology, Arts, Business)
- **Registered subjects list** — full list of enrolled courses with:
  - Course icon, title, category, level, and credit count
  - Individual progress bars
  - "Continue" and "Drop" action buttons
- **Empty state** with a direct link to Browse Courses when no courses are enrolled

### 🏆 Achievements (achievements.html)
- **XP & Level System** — earn XP by unlocking badges; progress through 8 levels from *Freshman Explorer* to *Grand Sage*
- **Animated XP ring** — circular progress indicator showing level completion percentage
- **16 unlockable badges** across 4 rarity tiers:
  - 🩶 Common — easy to earn by enrolling
  - 🔵 Rare — category-specific or course-specific badges
  - 🟣 Epic — advanced enrollment goals
  - 🟡 Legendary — maximum achievements
- **3 tabbed views:**
  - **Badges** — full badge grid with locked/unlocked states
  - **Milestones** — 8 progress-tracked goals with visual progress bars
  - **Leaderboard** — 8-student ranked table with your live XP position
- **Recent badges preview** in the XP banner

---

## Project Structure

```
eduverse/
│
├── index.html          # Page 1: Browse & enroll in courses
├── dashboard.html      # Page 2: Personal dashboard & registered subjects
├── achievements.html   # Page 3: Badges, milestones, XP & leaderboard
│
├── style.css           # Shared stylesheet for all three pages
└── shared.js           # Shared data, state management & utility functions
```

### File Responsibilities

| File | Role |
|------|------|
| `style.css` | All visual styles — layout, components, animations, responsive breakpoints |
| `shared.js` | Course & badge data arrays, localStorage helpers, XP calculator, level data, toast notifications |
| `index.html` | Course grid rendering, search/filter logic, enrollment toggle, detail modal |
| `dashboard.html` | Dashboard stats, category breakdown charts, enrolled subject list, drop functionality |
| `achievements.html` | XP banner, badge grid, milestones list, leaderboard rendering, tab switching |

---

## Getting Started

### Option 1 — Open Directly (Recommended)

1. Download and unzip `eduverse-website.zip`
2. Open the `eduverse/` folder
3. Double-click `index.html` to open in your browser
4. Navigate between pages using the sidebar

> No installation, no server, no dependencies required.

### Option 2 — Local Dev Server

If you prefer a local server (avoids any browser file:// restrictions):

```bash
# Using Python
cd eduverse/
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080` in your browser.

---

## Page-by-Page Guide

### Page 1 — Browse Courses (`index.html`)

**How to use:**
- Use the **search bar** (top right) to find courses by title, category, or description keyword
- Click a **category filter** button to narrow results
- Click **"Details"** on any card to open the full course modal
- Click **"Enroll"** to register for a course — the button changes to **"✓ Enrolled"**
- Click an enrolled course's button again to drop it
- Stats at the top update in real time

**Courses available:**

| Category | Courses |
|----------|---------|
| 🔬 Science | Quantum Physics, Molecular Biology, Astrophysics |
| 💻 Technology | Full-Stack Web Dev, Machine Learning & AI, Python, Cybersecurity |
| 🎨 Arts | Digital Illustration, UI/UX Design, Creative Writing |
| 💼 Business | Entrepreneurship & Startups, Financial Markets |

---

### Page 2 — My Dashboard (`dashboard.html`)

**How to use:**
- View your **enrollment summary** at the top (subjects, credits, hours, progress)
- Use **Quick Access cards** to jump to Browse Courses or Achievements
- The **category breakdown** section shows how many courses you've taken per category
- Scroll down to see your **Registered Subjects** list
- Click **"Continue ▶"** to simulate opening a course
- Click **"Drop"** to remove a course from your enrollment

---

### Page 3 — Achievements (`achievements.html`)

**How to use:**
- The **XP banner** at the top shows your current level, XP total, and progress to the next level
- Switch between tabs using the tab bar:
  - **Badges** — see all 16 badges; greyed-out ones are still locked
  - **Milestones** — track progress toward 8 goals
  - **Leaderboard** — see where "YOU" rank among 8 students
- Earn more XP by enrolling in more courses (go back to Browse Courses)

**XP Levels:**

| Level | Title | XP Required |
|-------|-------|-------------|
| 1 | Freshman Explorer | 0 XP |
| 2 | Curious Learner | 150 XP |
| 3 | Rising Scholar | 350 XP |
| 4 | Knowledge Seeker | 600 XP |
| 5 | Dedicated Student | 900 XP |
| 6 | Academic Ace | 1,300 XP |
| 7 | Master Scholar | 1,800 XP |
| 8 | Grand Sage | 2,500 XP |

---

## Shared Architecture

### State Management (`shared.js`)

All enrollment state is stored in `localStorage` under two keys:

```javascript
localStorage.getItem('ev_enrolled')  // JSON array of enrolled course IDs, e.g. [1, 4, 7]
localStorage.getItem('ev_progress')  // JSON object of progress %, e.g. {"1": 32, "4": 18}
```

Helper functions handle reading and writing:

```javascript
getEnrolled()       // Returns a Set of enrolled course IDs
getProgress()       // Returns an object of { courseId: progressPercent }
saveEnrolled(set)   // Saves the enrolled Set to localStorage
saveProgress(obj)   // Saves the progress object to localStorage
```

Because all pages read from the same `localStorage` keys, enrollment on one page is immediately visible on all others.

### XP Calculation

XP is derived from which badges are currently unlocked. Badges are re-evaluated every time a page loads or the enrolled set changes:

```javascript
calcXP(enrolled)        // Returns total XP earned from unlocked badges
getCurrentLevel(xp)     // Returns the level object matching the current XP
```

### Navigation Badges

The sidebar navigation badges (enrolled count and badge count) are refreshed by calling `refreshNavBadges()`, which reads the current state and updates both `#dash-badge` and `#achieve-badge` elements.

---

## Technologies Used

| Technology | Usage |
|------------|-------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Layouts (Flexbox & Grid), animations, CSS variables, responsive design |
| **Vanilla JavaScript (ES6+)** | DOM manipulation, state management, event handling |
| **Google Fonts** | *Syne* (headings) + *DM Sans* (body text) |
| **localStorage API** | Client-side data persistence across pages |
| **CSS Custom Properties** | Consistent theming via `:root` variables |
| **CSS Animations** | Ambient orb effects, card hover transitions, modal entrance, fade-up reveals |

No frameworks. No build tools. No npm. No server.

---

## Data Persistence

EduVerse uses the browser's built-in `localStorage` to remember your enrollment between sessions.

| Behaviour | Details |
|-----------|---------|
| Enroll in a course | Saved immediately to localStorage |
| Drop a course | Removed immediately from localStorage |
| Close and reopen the browser | Enrollment is fully restored |
| Open a different page | Enrollment state is already in sync |
| Clear browser data | Enrollment will be reset |

> **Note:** localStorage is scoped to the origin (file path or domain). If you move the files to a different location or server, the state may not carry over.

---

## Responsive Design

EduVerse is fully responsive across all screen sizes:

| Breakpoint | Behaviour |
|------------|-----------|
| **Desktop (> 768px)** | Fixed sidebar always visible; multi-column course grid |
| **Tablet / Mobile (≤ 768px)** | Sidebar hidden by default; hamburger menu button (☰) appears top-left; single-column layout |

The hamburger menu opens/closes the sidebar with a smooth slide animation. Tapping any nav link also closes the sidebar automatically.

---

## Customization Guide

### Adding a New Course

Open `shared.js` and add an entry to the `COURSES` array:

```javascript
{
  id: 13,                         // Unique integer ID
  title: 'My New Course',
  cat: 'Technology',              // 'Science' | 'Technology' | 'Arts' | 'Business'
  icon: '🧪',                     // Emoji displayed on the course card
  color: 'linear-gradient(135deg, #1a1a3e, #2d1b69)',  // CSS gradient for banner
  desc: 'A full description of the course content...',
  duration: '10 weeks',
  level: 'Beginner',              // 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  credits: 3,
  students: 500,
  rating: 4.7,
  price: '$99',                   // Use 'Free' for free courses
  badge: 'new',                   // 'new' | 'pop' | 'free' | null
}
```

### Changing the Color Theme

Edit the CSS variables in `style.css`:

```css
:root {
  --bg:       #0a0a0f;   /* Page background */
  --surface:  #12121a;   /* Sidebar background */
  --surface2: #1a1a26;   /* Card hover state */
  --border:   rgba(255,255,255,0.07);
  --accent:   #6c63ff;   /* Primary brand color */
  --accent2:  #ff6584;   /* Secondary accent (pink) */
  --accent3:  #43e97b;   /* Success / enrolled color (green) */
  --text:     #f0f0f8;   /* Primary text */
  --muted:    #8888aa;   /* Secondary text */
  --card-bg:  #14141e;   /* Card background */
}
```

### Adding a New Badge

In `shared.js`, add to the `BADGES` array:

```javascript
{
  id: 'b17',
  icon: '🧠',
  name: 'Brainiac',
  desc: 'Enroll in 3 Science courses',
  rarity: 'rare',        // 'common' | 'rare' | 'epic' | 'legendary'
  xp: 180,
  cond: (enrolled, xp) => [...enrolled].filter(id =>
    COURSES.find(c => c.id === id)?.cat === 'Science'
  ).length >= 3
}
```

### Changing the Student Name

Search for `"Alex Kim"` and `"AK"` across all HTML files and replace with the desired name and initials.

---

## Screenshots

```
┌─────────────────────────────────────────────────────────────┐
│  EduVerse        │  🔭 Browse Courses                       │
│  Student Portal  │─────────────────────────────────────────│
│                  │  Explore Courses          🔍 Search...  │
│  🔭 Browse  ←    │                                          │
│  📊 Dashboard    │  📚 12   ✅ 3   🎓 4   ⭐ 4.8          │
│  🏆 Achievements │                                          │
│                  │  [All] [Science] [Tech] [Arts] [Biz]    │
│                  │                                          │
│  ┌────────────┐  │  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │  Alex Kim  │  │  │  ⚛️   │  │  🌐  │  │  🤖  │          │
│  │  BSc CS    │  │  │Quant.│  │ Web  │  │  ML  │          │
│  └────────────┘  │  └──────┘  └──────┘  └──────┘          │
└─────────────────────────────────────────────────────────────┘
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 14+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| Opera 76+ | ✅ Full support |
| Internet Explorer | ❌ Not supported |

> Requires a modern browser with support for CSS Grid, CSS Custom Properties, ES6+ JavaScript, and the localStorage API.

---

## License

This project is open for educational and personal use. Feel free to modify, extend, and adapt it for your own student portal or learning management system.

---

*Built with 💜 using pure HTML, CSS & JavaScript — no frameworks required.*

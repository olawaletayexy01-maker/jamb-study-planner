# JAMB Study Planner

A lightweight, offline-first UTME study planner built with plain HTML, CSS and JavaScript. No framework, build step, account or network API required. Check off syllabus topics, set a daily target, and track subject completion and study streaks. Topics marked as studied unlock short practice quizzes where a question set is available. Quiz scores and your progress stay in this browser's local storage.

## Preview

[Add screenshots here]

## Run locally

Open `index.html` in a browser for the basic interface. For full PWA installation and service-worker offline caching, serve this folder over localhost or HTTPS. For example, run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Deploy on GitHub Pages

1. Push the files in this folder to the repository's `main` branch.
2. In GitHub, go to **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Open the Pages URL shown by GitHub. On first visit, let the app load once online so its shell, syllabus and bundled practice question bank can be cached.

## Data source and practice question provenance

Syllabus topics are bundled in `syllabus.js`. Topic headings were transcribed from the official JAMB Integrated Brochure & Syllabus System (IBASS) PDFs linked in `DATA_NOTES.md`. The data is a study checklist, not a substitute for the official syllabus; consult IBASS for the full topic details and updates.

Practice quizzes are bundled in `questions.js`. They are original practice questions written for this app and aligned with selected syllabus topics. They are not official JAMB past questions and are not copied from JAMB materials. Question-bank coverage is listed exactly in `DATA_NOTES.md`.

## License

The application code is provided under the MIT License in `LICENSE`. JAMB syllabus wording and documents belong to JAMB. The official syllabus is linked for reference and is not represented as licensed for redistribution. Check JAMB's terms before reusing syllabus text in another project.

## Offline and storage

The service worker caches the app shell, `syllabus.js` and `questions.js`. The cache is versioned in `sw.js`; bump `CACHE_VERSION` whenever bundled app data changes. Checkmarks, daily target, study-date history and best practice scores use local storage on the current browser/device. They do not sync across devices.

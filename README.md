# Simple Task Manager

A simple, frontend-only task manager built with plain HTML, CSS and JavaScript.
Add tasks, mark them as completed, and delete them. Tasks are saved in the
browser's `localStorage`, so they stay after you refresh the page.

No backend, no database, no build step, and no dependencies.

## Features

- **Add tasks** using the input field and the **Add** button (or press Enter)
- **View tasks** in a list, with a "No tasks yet" message when the list is empty
- **Mark tasks as completed** with a checkbox (completed tasks are crossed out)
- **Delete tasks** with the **Delete** button
- **Saves automatically** to `localStorage` and loads saved tasks on startup
- Empty or whitespace-only tasks are ignored

## Run locally

**Option 1: open the file directly**

Open `index.html` in any modern browser (double-click it, or drag it into a browser window).

**Option 2: use a local web server**

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

> Tasks are stored per browser and per address. Tasks saved when opening the
> file directly won't appear when using the local server, and the other way around.

## Project structure

```
task-manager/
├── index.html   # Page structure: title, input form, task list
├── style.css    # Styling, including the completed-task style
├── script.js    # App logic: add, complete, delete, render, localStorage
└── README.md
```

## How it works

All tasks are kept in a single JavaScript array. Each task looks like this:

```js
{ id: 1, text: "Buy milk", completed: false }
```

After every change (add, complete, or delete), the array is saved to
`localStorage` under the key `simple-task-manager.tasks` and the list is redrawn.
When the page loads, the saved tasks are read back and displayed.

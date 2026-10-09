# E2E Test Checklist: Simple Task Manager (Railway Staging)

**Staging URL:** `https://________________.up.railway.app`
**Commit tested (from Railway Deployments):** `________`
**Browser:** ________ **Tester:** ________ **Date:** ________

## Before you start
- [ ] The latest Railway staging deployment shows **Success / Active**.
- [ ] Open the staging URL in a **private / incognito window** so you start with an empty list.
- [ ] Open DevTools (F12) on the **Console** tab.

## 1. The application opens
- [ ] The page loads with no error page.
- [ ] The title **Simple Task Manager** is shown.
- [ ] The input field and the **Add** button are shown.
- [ ] The message **No tasks yet** is shown.
- [ ] The Console shows no red errors.

## 2. A task can be added
- [ ] Type `Buy milk` and click **Add**. The task appears in the list.
- [ ] The input field is cleared and **No tasks yet** disappears.
- [ ] Type `Study JS` and press **Enter**. The second task appears below the first.
- [ ] Click **Add** with an empty input. Nothing is added.
- [ ] Type only spaces and click **Add**. Nothing is added.

## 3. A task can be completed
- [ ] Tick the checkbox next to `Study JS`. The task is crossed out.
- [ ] `Buy milk` is **not** crossed out.
- [ ] Untick the checkbox. The crossing out is removed.
- [ ] Tick it again so `Study JS` is completed for the refresh test.

## 4. A task can be deleted
- [ ] Add a task `Delete me`.
- [ ] Click **Delete** next to `Delete me`. Only that task is removed.
- [ ] `Buy milk` and `Study JS` are still shown.

## 5. Tasks survive a page refresh
- [ ] Refresh the page (F5 / Cmd+R).
- [ ] `Buy milk` is shown and **not** completed.
- [ ] `Study JS` is shown and **completed** (crossed out).
- [ ] `Delete me` does **not** come back.
- [ ] Close the tab, open the staging URL again in the same window. The tasks are still there.

## Result
- [ ] **PASS:** all items checked
- [ ] **FAIL:** describe what failed, the steps that caused it, and any Console error:

```
________________________________________________________________
```

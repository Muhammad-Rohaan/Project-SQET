# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Teacher.spec.js >> Teacher Portal Tests >> TC24: Navigate to Results page via quick action
- Location: tests\Teacher.spec.js:29:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'View Results' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - heading "Teacher Panel" [level=1] [ref=e6]
    - navigation [ref=e7]:
      - link "Dashboard" [ref=e8] [cursor=pointer]:
        - /url: /teacher/dashboard
        - img [ref=e9]
        - text: Dashboard
      - link "Students" [ref=e11] [cursor=pointer]:
        - /url: /teacher/students
        - img [ref=e12]
        - text: Students
      - link "Results" [ref=e14] [cursor=pointer]:
        - /url: /teacher/results
        - img [ref=e15]
        - text: Results
      - link "Password" [ref=e17] [cursor=pointer]:
        - /url: /teacher/change-password
        - img [ref=e18]
        - text: Password
  - generic [ref=e20]:
    - banner [ref=e21]:
      - heading "Welcome, Muhammad Rohan Ali!" [level=2] [ref=e23]
      - toolbar "Quick actions" [ref=e24]:
        - button "View announcements" [ref=e26] [cursor=pointer]:
          - img [ref=e27]
          - generic [ref=e29]: "3"
        - generic "Logged in as Muhammad Rohan Ali" [ref=e30]:
          - img [ref=e31]
          - generic [ref=e33]: Muhammad Rohan Ali
          - button "Log out of account" [ref=e34] [cursor=pointer]:
            - img [ref=e35]
    - main [ref=e37]:
      - main "Teacher Dashboard Overview" [ref=e38]:
        - heading "Teacher Dashboard" [level=1] [ref=e39]
        - region "Quick Actions" [ref=e40]:
          - heading "Quick Actions" [level=3] [ref=e41]
          - generic [ref=e42]:
            - link "View student results" [ref=e43] [cursor=pointer]:
              - /url: /teacher/results
              - text: View Results
            - link "Find students" [ref=e44] [cursor=pointer]:
              - /url: /teacher/students
              - text: Find Students
        - region "Upload Notes" [ref=e45]:
          - heading "Upload Notes" [level=3] [ref=e46]
          - generic [ref=e47]:
            - textbox "Note title" [ref=e48]:
              - /placeholder: Note Title
            - textbox "Subject" [ref=e49]
            - textbox "Class name" [ref=e50]:
              - /placeholder: Class (e.g. 10A)
          - generic [ref=e51]:
            - button "Upload File" [ref=e52] [cursor=pointer]
            - button "Upload notes" [ref=e53] [cursor=pointer]: Upload
```

# Test source

```ts
  1  | import { test, expect } from '../hooks/index.js';
  2  | import TeacherPage from '../Pages/TeacherPage';
  3  | import TeacherData from '../testdata/TeacherData.json';
  4  | 
  5  | test.describe('Teacher Portal Tests', () => {
  6  |     test('TC20: Navigate to Teacher Dashboard', async ({ loginAsTeacher, page }) => {
  7  |         const teacherPage = new TeacherPage(page);
  8  |         await expect(page).toHaveURL(/.*teacher\/dashboard/);
  9  |     });
  10 | 
  11 |     test('TC21: Navigate to Students page via sidebar', async ({ loginAsTeacher, page }) => {
  12 |         const teacherPage = new TeacherPage(page);
  13 |         await teacherPage.gotoStudents();
  14 |         await expect(page).toHaveURL(/.*teacher\/students/);
  15 |     });
  16 | 
  17 |     test('TC22: Navigate to Results page via sidebar', async ({ loginAsTeacher, page }) => {
  18 |         const teacherPage = new TeacherPage(page);
  19 |         await teacherPage.gotoResults();
  20 |         await expect(page).toHaveURL(/.*teacher\/results/);
  21 |     });
  22 | 
  23 |     test('TC23: Navigate to Password page via sidebar', async ({ loginAsTeacher, page }) => {
  24 |         const teacherPage = new TeacherPage(page);
  25 |         await teacherPage.gotoPassword();
  26 |         await expect(page).toHaveURL(/.*teacher\/change-password/);
  27 |     });
  28 | 
  29 |     test('TC24: Navigate to Results page via quick action', async ({ loginAsTeacher, page }) => {
  30 |         const teacherPage = new TeacherPage(page);
> 31 |         await teacherPage.quickViewResults.click();
     |                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |         await expect(page).toHaveURL(/.*teacher\/results/);
  33 |     });
  34 | 
  35 |     test('TC25: Navigate to Students page via quick action', async ({ loginAsTeacher, page }) => {
  36 |         const teacherPage = new TeacherPage(page);
  37 |         await teacherPage.quickFindStudents.click();
  38 |         await expect(page).toHaveURL(/.*teacher\/students/);
  39 |     });
  40 | 
  41 |     test('TC26: Verify Upload Notes section exists', async ({ loginAsTeacher, page }) => {
  42 |         const teacherPage = new TeacherPage(page);
  43 |         await expect(teacherPage.noteTitle).toBeVisible();
  44 |         await expect(teacherPage.noteSubject).toBeVisible();
  45 |     });
  46 | 
  47 |     test('TC27: Navigate back to Dashboard from Results', async ({ loginAsTeacher, page }) => {
  48 |         const teacherPage = new TeacherPage(page);
  49 |         await teacherPage.gotoResults();
  50 |         await teacherPage.gotoDashboard();
  51 |         await expect(page).toHaveURL(/.*teacher\/dashboard/);
  52 |     });
  53 | 
  54 |     test('TC28: Navigate back to Dashboard from Students', async ({ loginAsTeacher, page }) => {
  55 |         const teacherPage = new TeacherPage(page);
  56 |         await teacherPage.gotoStudents();
  57 |         await teacherPage.gotoDashboard();
  58 |         await expect(page).toHaveURL(/.*teacher\/dashboard/);
  59 |     });
  60 | 
  61 |     test('TC29: Navigate back to Dashboard from Password', async ({ loginAsTeacher, page }) => {
  62 |         const teacherPage = new TeacherPage(page);
  63 |         await teacherPage.gotoPassword();
  64 |         await teacherPage.gotoDashboard();
  65 |         await expect(page).toHaveURL(/.*teacher\/dashboard/);
  66 |     });
  67 | });
  68 | 
```
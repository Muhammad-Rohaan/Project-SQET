# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin.spec.js >> TC#9: Navigate to Dashboard
- Location: tests\Admin.spec.js:65:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Email or ID')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - status [ref=e8]: Stats updated
  - generic [ref=e9]:
    - generic [ref=e10]:
      - heading "AZ Coaching" [level=1] [ref=e12]:
        - img [ref=e13]
        - text: AZ Coaching
      - navigation "Main navigation" [ref=e15]:
        - link "Navigate to Dashboard" [ref=e16]:
          - /url: /admin/dashboard
          - img [ref=e17]
          - generic [ref=e19]: Dashboard
        - link "Navigate to Students" [ref=e20]:
          - /url: /admin/az-students
          - img [ref=e21]
          - generic [ref=e23]: Students
        - link "Navigate to Teachers" [ref=e24]:
          - /url: /admin/az-teachers
          - img [ref=e25]
          - generic [ref=e27]: Teachers
        - link "Navigate to Receptionists" [ref=e28]:
          - /url: /admin/az-receptionists
          - img [ref=e29]
          - generic [ref=e31]: Receptionists
        - link "Navigate to Finance/Fees" [ref=e32]:
          - /url: /admin/finance
          - img [ref=e33]
          - generic [ref=e35]: Finance/Fees
        - link "Navigate to Announcements" [ref=e36]:
          - /url: /admin/announcements
          - img [ref=e37]
          - generic [ref=e39]: Announcements
      - button "Log out" [ref=e41] [cursor=pointer]:
        - generic [ref=e42]: Log Out
    - generic [ref=e43]:
      - banner [ref=e44]:
        - heading "Welcome, Abbas!" [level=2] [ref=e45]
        - toolbar "Quick actions" [ref=e46]:
          - button "View announcements" [ref=e48] [cursor=pointer]:
            - img [ref=e49]
            - generic [ref=e51]: 9+
          - generic "Logged in as Abbas" [ref=e52]:
            - img [ref=e53]
            - generic [ref=e55]: Abbas
            - button "Log out of account" [ref=e56] [cursor=pointer]:
              - img [ref=e57]
      - main [ref=e59]:
        - main "Admin Dashboard Overview" [ref=e61]:
          - generic [ref=e63]:
            - img [ref=e65]
            - generic [ref=e67]:
              - heading "Dashboard Overview" [level=1] [ref=e68]
              - paragraph [ref=e69]: Monitor your institute's performance at a glance
          - region "Statistics Summary" [ref=e70]:
            - 'status "Active Students: 13" [ref=e71]':
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - paragraph [ref=e74]: Active Students
                  - paragraph [ref=e75]: "13"
                - img [ref=e77]
            - 'status "Total Teachers: 3" [ref=e79]':
              - generic [ref=e80]:
                - generic [ref=e81]:
                  - paragraph [ref=e82]: Total Teachers
                  - paragraph [ref=e83]: "3"
                - img [ref=e85]
            - 'status "Upcoming Announcements: 1" [ref=e89]':
              - generic [ref=e90]:
                - generic [ref=e91]:
                  - paragraph [ref=e92]: Upcoming Announcements
                  - paragraph [ref=e93]: "1"
                - img [ref=e95]
          - region "Quick Actions" [ref=e99]:
            - heading "Quick Actions" [level=3] [ref=e100]
            - group "Administrative Actions" [ref=e101]:
              - button "Add new Teacher" [ref=e102] [cursor=pointer]: ➕ Add Teacher
              - button "Add new Receptionist" [ref=e103] [cursor=pointer]: ➕ Add Receptionist
              - button "Add new User" [ref=e104] [cursor=pointer]: ➕ Add User
              - button "📢 Post Announcement" [ref=e105] [cursor=pointer]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.gotoLogin = page.getByRole('link', { name: 'Launch Portal' });
  8  |         this.email = page.getByLabel('Email or ID');
  9  |         this.password = page.getByLabel('Password');
  10 |         this.submitBtn = page.locator('#submitBtn');
  11 |         this.expectedMsg = page.getByRole('heading', {
  12 |             level: 2
  13 |         });
  14 |     }
  15 | 
  16 | 
  17 |     async gotoUrl() {
  18 |         await this.page.goto('http://localhost:5173/');
  19 |         await this.gotoLogin.click();
  20 |     }
  21 | 
  22 |     async login(email, password, expectedMsg) {
> 23 |         await this.email.fill(email);
     |                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  24 |         await this.password.fill(password);
  25 |         await this.submitBtn.click();
  26 |         if (expectedMsg) {
  27 |             await expect(this.expectedMsg).toHaveText(expectedMsg);
  28 |         }
  29 |     }
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | }
  36 | export default LoginPage;
```
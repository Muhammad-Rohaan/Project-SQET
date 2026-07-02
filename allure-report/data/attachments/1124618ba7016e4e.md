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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Launch Portal' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - status [ref=e6]: Loading dashboard stats...
  - generic [ref=e7]:
    - generic [ref=e8]:
      - heading "AZ Coaching" [level=1] [ref=e10]:
        - img [ref=e11]
        - text: AZ Coaching
      - navigation "Main navigation" [ref=e13]:
        - link "Navigate to Dashboard" [ref=e14] [cursor=pointer]:
          - /url: /admin/dashboard
          - img [ref=e15]
          - generic [ref=e17]: Dashboard
        - link "Navigate to Students" [ref=e18] [cursor=pointer]:
          - /url: /admin/az-students
          - img [ref=e19]
          - generic [ref=e21]: Students
        - link "Navigate to Teachers" [ref=e22] [cursor=pointer]:
          - /url: /admin/az-teachers
          - img [ref=e23]
          - generic [ref=e25]: Teachers
        - link "Navigate to Receptionists" [ref=e26] [cursor=pointer]:
          - /url: /admin/az-receptionists
          - img [ref=e27]
          - generic [ref=e29]: Receptionists
        - link "Navigate to Finance/Fees" [ref=e30] [cursor=pointer]:
          - /url: /admin/finance
          - img [ref=e31]
          - generic [ref=e33]: Finance/Fees
        - link "Navigate to Announcements" [ref=e34] [cursor=pointer]:
          - /url: /admin/announcements
          - img [ref=e35]
          - generic [ref=e37]: Announcements
      - button "Log out" [ref=e39] [cursor=pointer]:
        - generic [ref=e40]: Log Out
    - generic [ref=e41]:
      - banner [ref=e42]:
        - heading "Welcome, Abbas!" [level=2] [ref=e43]
        - toolbar "Quick actions" [ref=e44]:
          - button "View announcements" [ref=e46] [cursor=pointer]:
            - img [ref=e47]
            - generic [ref=e49]: "1"
          - generic "Logged in as Abbas" [ref=e50]:
            - img [ref=e51]
            - generic [ref=e53]: Abbas
            - button "Log out of account" [ref=e54] [cursor=pointer]:
              - img [ref=e55]
      - main [ref=e57]:
        - paragraph [ref=e58]: Loading stats...
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
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
  16 |     // this.username = page.locator('#username') id
  17 | 
  18 | 
  19 |     async gotoUrl() {
  20 |         await this.page.goto('http://localhost:5173/');
> 21 |         await this.gotoLogin.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |         await this.attachScreenshot('Login page opened');
  23 |     }
  24 | 
  25 |     async login(email, password, expectedMsg) {
  26 |         await this.email.fill(email);
  27 |         await this.attachScreenshot('02 - After entering Email/ ID');
  28 |         await this.password.fill(password);
  29 |         await this.attachScreenshot('03 - After entering password');
  30 |         await this.submitBtn.click();
  31 |         await this.attachScreenshot('04 - After clicking Login');
  32 |         if (expectedMsg) {
  33 |             await expect(this.expectedMsg).toHaveText(expectedMsg);
  34 |         }
  35 |     }
  36 | 
  37 |     async attachScreenshot(name) {
  38 |         await test.info().attach(name, {
  39 |             body: await this.page.screenshot(),
  40 |             contentType: 'image/png',
  41 |         });
  42 |     }
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | }
  49 | export default LoginPage;
```
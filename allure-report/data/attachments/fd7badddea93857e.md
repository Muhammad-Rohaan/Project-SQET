# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Reception.spec.js >> Reception Portal Tests >> TC18: Fill Attendance form
- Location: tests\Reception.spec.js:56:9

# Error details

```
Test timeout of 30000ms exceeded while setting up "loginAsReceptionist".
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { level: 2 })
Expected: "Welcome, recp!"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('heading', { level: 2 })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - status [ref=e6]: Loading dashboard...
    - status [ref=e12]: Welcome back, recp!
  - generic [ref=e13]:
    - generic [ref=e14]:
      - heading "Reception" [level=1] [ref=e16]:
        - img [ref=e17]
        - text: Reception
      - navigation [ref=e19]:
        - link "Dashboard" [ref=e20] [cursor=pointer]:
          - /url: /reception/dashboard
          - img [ref=e21]
          - generic [ref=e23]: Dashboard
        - link "AZ Students" [ref=e24] [cursor=pointer]:
          - /url: /reception/az-students
          - img [ref=e25]
          - generic [ref=e27]: AZ Students
        - link "Fees" [ref=e28] [cursor=pointer]:
          - /url: /reception/fees
          - img [ref=e29]
          - generic [ref=e31]: Fees
        - link "Attendance" [ref=e32] [cursor=pointer]:
          - /url: /reception/attendance
          - img [ref=e33]
          - generic [ref=e35]: Attendance
    - generic [ref=e36]:
      - banner [ref=e37]:
        - heading "Welcome, recp!" [level=2] [ref=e39]
        - toolbar "Quick actions" [ref=e40]:
          - button "View announcements" [ref=e42] [cursor=pointer]:
            - img [ref=e43]
          - generic "Logged in as recp" [ref=e45]:
            - img [ref=e46]
            - generic [ref=e48]: recp
            - button "Log out of account" [ref=e49] [cursor=pointer]:
              - img [ref=e50]
      - main [ref=e52]:
        - paragraph [ref=e53]: Loading dashboard...
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
  23 |         await this.email.fill(email);
  24 |         await this.password.fill(password);
  25 |         await this.submitBtn.click();
  26 |         if (expectedMsg) {
> 27 |             await expect(this.expectedMsg).toHaveText(expectedMsg);
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
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
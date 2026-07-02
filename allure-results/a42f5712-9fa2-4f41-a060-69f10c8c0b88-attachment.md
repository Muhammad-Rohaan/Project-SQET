# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Student.spec.js >> Student Portal Tests >> TC34: Navigate back to Dashboard from Password
- Location: tests\Student.spec.js:28:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { level: 2 })
Expected: "Welcome, Abuzar!"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('heading', { level: 2 })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - heading "AZ Coaching" [level=1] [ref=e6]
    - paragraph [ref=e7]: Sign in to access admin dashboard
  - generic [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11]: Email or ID
        - textbox "Email or ID" [ref=e12]:
          - /placeholder: admin@example.com
          - text: bscs2380246@szabist.pk
      - generic [ref=e13]:
        - generic [ref=e14]: Password
        - textbox "Password" [ref=e15]: a123
    - button "Sign In" [ref=e16] [cursor=pointer]
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
  21 |         await this.gotoLogin.click();
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
> 33 |             await expect(this.expectedMsg).toHaveText(expectedMsg);
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
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
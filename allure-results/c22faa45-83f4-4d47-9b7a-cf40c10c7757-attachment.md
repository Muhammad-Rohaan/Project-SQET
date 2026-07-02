# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Student.spec.js >> Student Portal Tests >> TC33: Navigate to Password page via sidebar
- Location: tests\Student.spec.js:22:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { level: 2 })
Expected: "Welcome, Afnan!"
Error: strict mode violation: getByRole('heading', { level: 2 }) resolved to 2 elements:
    1) <h2 class="text-lg md:text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent truncate max-w-[150px] sm:max-w-none">Welcome, Afnan!</h2> aka getByRole('heading', { name: 'Welcome, Afnan!' })
    2) <h2 class="text-2xl font-black text-cyan-400">AI MCQs Generator</h2> aka getByRole('heading', { name: 'AI MCQs Generator' })

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('heading', { level: 2 })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - status [ref=e8]: Dashboard updated
    - status [ref=e14]: Welcome back, Afnan!
  - generic [ref=e15]:
    - generic [ref=e16]:
      - heading "Student Panel" [level=1] [ref=e18]:
        - img [ref=e19]
        - text: Student Panel
      - navigation "Student primary navigation" [ref=e21]:
        - link "Go to student dashboard" [ref=e22] [cursor=pointer]:
          - /url: /student/dashboard
          - img [ref=e23]
          - generic [ref=e25]: Dashboard
        - link "Change password" [ref=e26] [cursor=pointer]:
          - /url: /student/change-password
          - img [ref=e27]
          - generic [ref=e29]: Password
    - generic [ref=e30]:
      - banner [ref=e31]:
        - heading "Welcome, Afnan!" [level=2] [ref=e33]
        - toolbar "Quick actions" [ref=e34]:
          - button "View announcements" [ref=e36] [cursor=pointer]:
            - img [ref=e37]
          - generic "Logged in as Afnan" [ref=e39]:
            - img [ref=e40]
            - generic [ref=e42]: Afnan
            - button "Log out of account" [ref=e43] [cursor=pointer]:
              - img [ref=e44]
      - main [ref=e46]:
        - generic [ref=e47]:
          - generic [ref=e48]:
            - heading "Student Portal" [level=1] [ref=e49]
            - paragraph [ref=e50]: Welcome back, Afnan
            - generic [ref=e52]:
              - generic [ref=e53]:
                - heading "AI MCQs Generator" [level=2] [ref=e54]
                - paragraph [ref=e55]: Practice smarter with AI-generated quizzes.
              - button "🚀 Start Quiz" [ref=e56] [cursor=pointer]
          - generic [ref=e57]:
            - generic "Student Profile Information" [ref=e58]:
              - heading "Your Profile" [level=3] [ref=e59]
              - generic [ref=e60]:
                - generic [ref=e61]:
                  - paragraph [ref=e62]: Full Name
                  - paragraph [ref=e63]: Afnan
                - generic [ref=e64]:
                  - paragraph [ref=e65]: Email Address
                  - paragraph [ref=e66]: learning82005@gmail.com
                - 'generic "Role: student" [ref=e68]': student
            - generic "Class Notes and Files" [ref=e69]:
              - heading "Subject Notes & Files" [level=3] [ref=e70]
              - generic [ref=e71]:
                - generic [ref=e73]:
                  - generic [ref=e74]:
                    - heading "test2" [level=4] [ref=e75]
                    - paragraph [ref=e76]: other formats
                  - link "Open file for test2" [ref=e77] [cursor=pointer]:
                    - /url: https://res.cloudinary.com/dqdqzvgwd/raw/upload/v1778530056/class_notes/other%20formats_test2_1778530141852
                    - text: Open File
                - generic [ref=e79]:
                  - generic [ref=e80]:
                    - heading "test" [level=4] [ref=e81]
                    - paragraph [ref=e82]: English
                  - link "Open file for test" [ref=e83] [cursor=pointer]:
                    - /url: https://res.cloudinary.com/dqdqzvgwd/raw/upload/v1778529916/class_notes/English_test_1778530001757
                    - text: Open File
            - generic "Test Results" [ref=e84]:
              - heading "Test Results" [level=3] [ref=e85]
              - generic [ref=e87]:
                - generic [ref=e88]: Final
                - link "View result image for Final" [ref=e89] [cursor=pointer]:
                  - /url: https://res.cloudinary.com/dqdqzvgwd/image/upload/v1778614593/results/11_Final_1778614677933.jpg
                  - text: View Result Image →
            - generic "Fees Status" [ref=e90]:
              - heading "Fees Status" [level=3] [ref=e91]
              - generic [ref=e93]:
                - generic [ref=e94]: Due
                - 'generic "Fee status: unpaid" [ref=e95]': unpaid
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
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Student.spec.js >> Student Portal Tests >> TC31: Verify Start Quiz button exists
- Location: tests\Student.spec.js:11:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { level: 2 })
Expected: "Welcome, Abuzar!"
Error: strict mode violation: getByRole('heading', { level: 2 }) resolved to 2 elements:
    1) <h2 class="text-lg md:text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent truncate max-w-[150px] sm:max-w-none">Welcome, Abuzar!</h2> aka getByRole('heading', { name: 'Welcome, Abuzar!' })
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
    - status [ref=e14]: Welcome back, Abuzar!
  - generic [ref=e15]:
    - generic [ref=e16]:
      - heading "Student Panel" [level=1] [ref=e18]:
        - img [ref=e19]
        - text: Student Panel
      - navigation "Student primary navigation" [ref=e21]:
        - link "Go to student dashboard" [ref=e22]:
          - /url: /student/dashboard
          - img [ref=e23]
          - generic [ref=e25]: Dashboard
        - link "Change password" [ref=e26]:
          - /url: /student/change-password
          - img [ref=e27]
          - generic [ref=e29]: Password
    - generic [ref=e30]:
      - banner [ref=e31]:
        - heading "Welcome, Abuzar!" [level=2] [ref=e33]
        - toolbar "Quick actions" [ref=e34]:
          - button "View announcements" [ref=e36] [cursor=pointer]:
            - img [ref=e37]
            - generic [ref=e39]: 9+
          - generic "Logged in as Abuzar" [ref=e40]:
            - img [ref=e41]
            - generic [ref=e43]: Abuzar
            - button "Log out of account" [ref=e44] [cursor=pointer]:
              - img [ref=e45]
      - main [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]:
            - heading "Student Portal" [level=1] [ref=e50]
            - paragraph [ref=e51]: Welcome back, Abuzar
            - generic [ref=e53]:
              - generic [ref=e54]:
                - heading "AI MCQs Generator" [level=2] [ref=e55]
                - paragraph [ref=e56]: Practice smarter with AI-generated quizzes.
              - button "🚀 Start Quiz" [ref=e57] [cursor=pointer]
          - generic [ref=e58]:
            - generic "Student Profile Information" [ref=e59]:
              - heading "Your Profile" [level=3] [ref=e60]
              - generic [ref=e61]:
                - generic [ref=e62]:
                  - paragraph [ref=e63]: Full Name
                  - paragraph [ref=e64]: Abuzar
                - generic [ref=e65]:
                  - paragraph [ref=e66]: Email Address
                  - paragraph [ref=e67]: bscs2380246@szabist.pk
                - 'generic "Role: student" [ref=e69]': student
            - generic "Class Notes and Files" [ref=e70]:
              - heading "Subject Notes & Files" [level=3] [ref=e71]
              - paragraph [ref=e73]: No notes available for your class.
            - generic "Test Results" [ref=e74]:
              - heading "Test Results" [level=3] [ref=e75]
              - paragraph [ref=e77]: No results found.
            - generic "Fees Status" [ref=e78]:
              - heading "Fees Status" [level=3] [ref=e79]
              - generic [ref=e80]:
                - generic [ref=e81]:
                  - generic [ref=e82]: 3/22/2026
                  - 'generic "Fee status: paid" [ref=e83]': paid
                - generic [ref=e84]:
                  - generic [ref=e85]: 5/11/2026
                  - 'generic "Fee status: paid" [ref=e86]': paid
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
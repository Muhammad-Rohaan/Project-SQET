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
- generic [ref=e3]:
  - generic:
    - img
  - navigation "Main Navigation" [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7] [cursor=pointer]:
        - img [ref=e9]
        - generic [ref=e12]: EduStream
      - generic [ref=e13]:
        - link "Features" [ref=e14] [cursor=pointer]:
          - /url: "#features"
        - link "Go to Dashboard" [ref=e15] [cursor=pointer]:
          - /url: /admin/dashboard
  - main [ref=e16]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]: Academic Excellence 2026
        - heading "Modernizing Education Hubs" [level=1] [ref=e25]:
          - text: Modernizing
          - text: Education Hubs
        - paragraph [ref=e26]: The ultimate ERP ecosystem built for forward-thinking institutes. Automate, educate, and elevate with data-driven insights.
        - generic [ref=e27]:
          - link "Continue to Dashboard" [ref=e28] [cursor=pointer]:
            - /url: /admin/dashboard
            - text: Continue to Dashboard
            - img [ref=e29]
          - link "Tour Features" [ref=e32] [cursor=pointer]:
            - /url: "#features"
        - generic [ref=e33]:
          - generic [ref=e34]:
            - img "User profile" [ref=e36]
            - img "User profile" [ref=e38]
            - img "User profile" [ref=e40]
            - img "User profile" [ref=e42]
            - img "User profile" [ref=e44]
            - generic [ref=e45]: +1k
          - generic [ref=e46]:
            - generic [ref=e47]:
              - img [ref=e48]
              - img [ref=e51]
              - img [ref=e54]
              - img [ref=e57]
              - img [ref=e60]
            - paragraph [ref=e63]: Trusted by 1,200+ global campuses
      - generic [ref=e68]:
        - img "Students collaborating in a modern educational space" [ref=e69]
        - generic [ref=e71]:
          - img [ref=e73]
          - generic [ref=e75]:
            - paragraph [ref=e76]: Growth Rate
            - paragraph [ref=e77]: +85%
        - generic [ref=e78]:
          - generic [ref=e79]:
            - img [ref=e80]
            - generic [ref=e83]: AI Analytics
          - paragraph [ref=e86]: Real-time performance tracking active
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]:
          - heading "Capabilities" [level=2] [ref=e91]
          - paragraph [ref=e92]:
            - text: Designed for the
            - text: Modern Classroom
        - paragraph [ref=e93]: We've built a suite of tools that work in harmony to streamline every aspect of your institution.
      - generic [ref=e94]:
        - generic [ref=e95]:
          - img [ref=e97]
          - heading "Student Core" [level=3] [ref=e102]
          - paragraph [ref=e103]: Comprehensive 360-degree student profiles with automated attendance and behavioral tracking.
        - generic [ref=e104]:
          - img [ref=e106]
          - heading "Fiscal Flow" [level=3] [ref=e111]
          - paragraph [ref=e112]: Next-gen fee management with automated invoicing, online payments, and deep financial auditing.
        - generic [ref=e113]:
          - img [ref=e115]
          - heading "Result Engine" [level=3] [ref=e118]
          - paragraph [ref=e119]: Dynamic result processing with visual analytics and custom report card generation.
        - generic [ref=e120]:
          - img [ref=e122]
          - heading "Fortified Security" [level=3] [ref=e125]
          - paragraph [ref=e126]: Bank-grade security protocols with granular role-based permissions for total peace of mind.
        - generic [ref=e127]:
          - img [ref=e129]
          - heading "AI Quiz Master" [level=3] [ref=e131]
          - paragraph [ref=e132]: Leverage advanced AI to generate curriculum-aligned assessments in seconds.
        - generic [ref=e133]:
          - img [ref=e135]
          - heading "Pulse Comms" [level=3] [ref=e137]
          - paragraph [ref=e138]: Integrated notification system keeping parents, students, and staff perfectly aligned.
    - generic [ref=e144]:
      - heading "Ready for a Digital Upgrade?" [level=2] [ref=e145]:
        - text: Ready for a
        - text: Digital Upgrade?
      - paragraph [ref=e146]: Join the educational revolution. Get your campus on EduStream today and experience the difference.
      - generic [ref=e147]:
        - link "Get Started Free" [ref=e148] [cursor=pointer]:
          - /url: /login
        - button "Talk to Expert" [ref=e149] [cursor=pointer]
  - contentinfo [ref=e150]:
    - generic [ref=e151]:
      - generic [ref=e152]:
        - generic [ref=e153]:
          - generic [ref=e154]:
            - img [ref=e156]
            - generic [ref=e159]: EduStream
          - paragraph [ref=e160]: The ecosystem that empowers educators and inspires students to reach their full potential.
          - generic [ref=e161]:
            - img [ref=e163] [cursor=pointer]
            - img [ref=e168] [cursor=pointer]
            - img [ref=e172] [cursor=pointer]
            - img [ref=e176] [cursor=pointer]
        - generic [ref=e179]:
          - heading "Platform" [level=4] [ref=e180]
          - list [ref=e181]:
            - listitem [ref=e182]:
              - link "Core Features" [ref=e183] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e184]:
              - link "Integrations" [ref=e185] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e186]:
              - link "Mobile App" [ref=e187] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e188]:
          - heading "Company" [level=4] [ref=e189]
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "Our Vision" [ref=e192] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e193]:
              - link "Careers" [ref=e194] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e195]:
              - link "Press Kit" [ref=e196] [cursor=pointer]:
                - /url: "#"
        - generic [ref=e197]:
          - heading "Resources" [level=4] [ref=e198]
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Documentation" [ref=e201] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e202]:
              - link "Support Center" [ref=e203] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e204]:
              - link "Community" [ref=e205] [cursor=pointer]:
                - /url: "#"
      - generic [ref=e206]:
        - paragraph [ref=e207]: © 2026 EduStream ERP. Building the future of education.
        - generic [ref=e208]:
          - link "Privacy" [ref=e209] [cursor=pointer]:
            - /url: "#"
          - link "Terms" [ref=e210] [cursor=pointer]:
            - /url: "#"
          - link "Cookies" [ref=e211] [cursor=pointer]:
            - /url: "#"
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
> 19 |         await this.gotoLogin.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |     }
  21 | 
  22 |     async login(email, password, expectedMsg) {
  23 |         await this.email.fill(email);
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
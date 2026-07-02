# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin.spec.js >> TC#1 - Validating registration teachers | Positive
- Location: tests\Admin.spec.js:5:5

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
  - generic [ref=e4]:
    - heading "AZ Coaching" [level=1] [ref=e6]:
      - img [ref=e7]
      - text: AZ Coaching
    - navigation "Main navigation" [ref=e9]:
      - link "Navigate to Dashboard" [ref=e10] [cursor=pointer]:
        - /url: /admin/dashboard
        - img [ref=e11]
        - generic [ref=e13]: Dashboard
      - link "Navigate to Students" [ref=e14] [cursor=pointer]:
        - /url: /admin/az-students
        - img [ref=e15]
        - generic [ref=e17]: Students
      - link "Navigate to Teachers" [ref=e18] [cursor=pointer]:
        - /url: /admin/az-teachers
        - img [ref=e19]
        - generic [ref=e21]: Teachers
      - link "Navigate to Receptionists" [ref=e22] [cursor=pointer]:
        - /url: /admin/az-receptionists
        - img [ref=e23]
        - generic [ref=e25]: Receptionists
      - link "Navigate to Finance/Fees" [ref=e26] [cursor=pointer]:
        - /url: /admin/finance
        - img [ref=e27]
        - generic [ref=e29]: Finance/Fees
      - link "Navigate to Announcements" [ref=e30] [cursor=pointer]:
        - /url: /admin/announcements
        - img [ref=e31]
        - generic [ref=e33]: Announcements
    - button "Log out" [ref=e35] [cursor=pointer]:
      - generic [ref=e36]: Log Out
  - generic [ref=e37]:
    - banner [ref=e38]:
      - heading "Welcome, Abbas!" [level=2] [ref=e39]
      - toolbar "Quick actions" [ref=e40]:
        - button "View announcements" [ref=e42] [cursor=pointer]:
          - img [ref=e43]
          - generic [ref=e45]: "4"
        - generic "Logged in as Abbas" [ref=e46]:
          - img [ref=e47]
          - generic [ref=e49]: Abbas
          - button "Log out of account" [ref=e50] [cursor=pointer]:
            - img [ref=e51]
    - main [ref=e53]:
      - main "Admin Dashboard Overview" [ref=e55]:
        - generic [ref=e57]:
          - img [ref=e59]
          - generic [ref=e61]:
            - heading "Dashboard Overview" [level=1] [ref=e62]
            - paragraph [ref=e63]: Monitor your institute's performance at a glance
        - region "Statistics Summary" [ref=e64]:
          - 'status "Active Students: 4" [ref=e65]':
            - generic [ref=e66]:
              - generic [ref=e67]:
                - paragraph [ref=e68]: Active Students
                - paragraph [ref=e69]: "4"
              - img [ref=e71]
          - 'status "Total Teachers: 3" [ref=e73]':
            - generic [ref=e74]:
              - generic [ref=e75]:
                - paragraph [ref=e76]: Total Teachers
                - paragraph [ref=e77]: "3"
              - img [ref=e79]
          - 'status "Upcoming Announcements: 0" [ref=e83]':
            - generic [ref=e84]:
              - generic [ref=e85]:
                - paragraph [ref=e86]: Upcoming Announcements
                - paragraph [ref=e87]: "0"
              - img [ref=e89]
        - region "Quick Actions" [ref=e93]:
          - heading "Quick Actions" [level=3] [ref=e94]
          - group "Administrative Actions" [ref=e95]:
            - button "Add new Teacher" [ref=e96] [cursor=pointer]: ➕ Add Teacher
            - button "Add new Receptionist" [ref=e97] [cursor=pointer]: ➕ Add Receptionist
            - button "Add new User" [ref=e98] [cursor=pointer]: ➕ Add User
            - button "📢 Post Announcement" [ref=e99] [cursor=pointer]
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import LoginPage from "./LoginPage.js";
  3   | import LoginData from "../testdata/LoginData.json";
  4   | 
  5   | 
  6   | class AdminPage {
  7   | 
  8   |     constructor(page) {
  9   |         this.page = page;
  10  |         this.navigateToDashboard = page.getByRole('link', { name: 'Launch Portal' });
  11  |         this.addTeacherBtn = page.getByLabel('Add new Teacher');
  12  | 
  13  |         this.fullNameInput = page.getByLabel('Full Name');
  14  |         this.emailInput = page.getByLabel('Email Address');
  15  |         this.passwordInput = page.getByLabel('Password');
  16  |         this.teacherRegIdInput = page.getByLabel('Teacher Registration ID');
  17  |         this.cnicInput = page.getByLabel('CNIC Number');
  18  |         this.qualificationInput = page.getByLabel('Qualification');
  19  |         this.salaryInput = page.getByLabel('Monthly Salary');
  20  |         this.joiningDateInput = page.getByLabel('Joining Date');
  21  |         this.subjectsInput = page.getByLabel('Subjects');
  22  |         this.classesInput = page.getByLabel('Classes');
  23  |         this.contactInput = page.getByLabel('Contact Number');
  24  |         this.addressInput = page.getByLabel('Home Address');
  25  |         this.ageInput = page.getByLabel('Age');
  26  |         this.registerBtn = page.getByRole('button', { name: 'Register Teacher' });
  27  |         this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
  28  |         // recp:
  29  |         this.addReceptionistBtn = page.getByLabel('Add new Receptionist'); // Assuming naming convention matches addTeacherBtn
  30  |         this.receptionRegIdInput = page.getByLabel('Registration ID');
  31  |         this.registerReceptionistBtn = page.getByRole('button', { name: 'Register Receptionist' });
  32  | 
  33  |         this.fullNameInput = page.getByLabel('Full Name');
  34  |         this.emailInput = page.getByLabel('Email Address');
  35  |         this.passwordInput = page.getByLabel('Password');
  36  |         this.cnicInput = page.getByLabel('CNIC Number');
  37  |         this.salaryInput = page.getByLabel('Monthly Salary');
  38  |         this.joiningDateInput = page.getByLabel('Joining Date');
  39  |         this.contactInput = page.getByLabel('Contact Number');
  40  |         this.addressInput = page.getByLabel('Home Address');
  41  |         // Announcement Section
  42  |         this.postAnnouncementModalBtn = page.getByRole('button', {
  43  |             name: '📢 Post Announcement'
  44  |         })
  45  |         this.announcementTitleInput = page.getByPlaceholder('Title');
  46  |         this.announcementMessageInput = page.getByPlaceholder('Message');
  47  |         this.announcementTargetDropdown = page.locator('select'); // Targeting the HTML select dropdown ('All')
  48  |         this.postBtn = page.getByRole('button', {
  49  |             name: 'Post',
  50  |             exact: true
  51  |         });
  52  | 
  53  |         this.fullNameInput = page.getByLabel('Full Name');
  54  |         this.emailInput = page.getByLabel('Email Address');
  55  |         this.passwordInput = page.getByLabel('Password');
  56  |         this.cnicInput = page.getByLabel('CNIC Number');
  57  |         this.salaryInput = page.getByLabel('Monthly Salary');
  58  |         this.joiningDateInput = page.getByLabel('Joining Date');
  59  |         this.contactInput = page.getByLabel('Contact Number');
  60  |         this.addressInput = page.getByLabel('Home Address');
  61  | 
  62  |     }
  63  | 
  64  |     async loginForAdmin(idx) {
  65  |         
  66  |         const loginPage = new LoginPage(this.page);
  67  |         const loginData = LoginData.validUsers[idx]; // for admin because only admin can create Teacher
  68  |         await loginPage.gotoUrl();
  69  |         await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
  70  |     }
  71  | 
  72  |     async registerTeacher(teacherData) {
  73  |         // Login first
  74  |         // const loginPage = new LoginPage(this.page);
  75  |         // const loginData = LoginData.validUsers[0]; // for admin because only admin can create Teacher
  76  |         // await loginPage.gotoUrl();
  77  |         // await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
  78  |        // await this.loginForAdmin(0);
  79  | 
  80  |         // Form Navigation & Interaction
> 81  |         await this.navigateToDashboard.click();
      |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  82  |         await this.addTeacherBtn.click();
  83  |         await this.fullNameInput.fill(teacherData.fullName);
  84  |         await this.emailInput.fill(teacherData.email);
  85  |         await this.passwordInput.fill(teacherData.password);
  86  |         await this.teacherRegIdInput.fill(teacherData.teacherRegId);
  87  |         await this.cnicInput.fill(teacherData.cnic);
  88  |         await this.qualificationInput.fill(teacherData.qualification);
  89  |         await this.salaryInput.fill(teacherData.salary);
  90  |         await this.joiningDateInput.fill(teacherData.date);
  91  | 
  92  |         await this.subjectsInput.fill(teacherData.subjects);
  93  |         await this.classesInput.fill(teacherData.classes);
  94  |         await this.contactInput.fill(teacherData.contact);
  95  |         await this.addressInput.fill(teacherData.address);
  96  |         await this.ageInput.fill(teacherData.age);
  97  |         await this.registerBtn.click();
  98  |     }
  99  | 
  100 |     async registerReceptionist(receptionistData) {
  101 |         // // Login first
  102 |         // const loginPage = new LoginPage(this.page);
  103 |         // const loginData = LoginData.validUsers[0]; // for admin because only admin can create Receptionist
  104 |         // await loginPage.gotoUrl();
  105 |         // await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
  106 |         // Form Navigation & Interaction
  107 |         await this.navigateToDashboard.click();
  108 |         await this.addReceptionistBtn.click();
  109 |         await this.receptionRegIdInput.fill(receptionistData.receptionRegId);
  110 |         await this.cnicInput.fill(receptionistData.cnic);
  111 |         await this.salaryInput.fill(receptionistData.salary);
  112 |         await this.joiningDateInput.fill(receptionistData.joiningDate);
  113 |         await this.contactInput.fill(receptionistData.contact);
  114 |         await this.addressInput.fill(receptionistData.address);
  115 |         await this.registerReceptionistBtn.click();
  116 |     }
  117 | 
  118 |     async postAnnouncement(announcementData) {
  119 |         // // Login first
  120 |         // const loginPage = new LoginPage(this.page);
  121 |         // const loginData = LoginData.validUsers[0]; // for admin because only admin can create Receptionist
  122 |         // await loginPage.gotoUrl();
  123 |         // await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
  124 | 
  125 |         await this.postAnnouncementModalBtn.click();
  126 |         await this.announcementTitleInput.fill(announcementData.title);
  127 |         await this.announcementMessageInput.fill(announcementData.message);
  128 | 
  129 |         await this.announcementTargetDropdown.selectOption({ value: announcementData.target });
  130 | 
  131 |         if (announcementData.target === 'specific-class') {
  132 |             await this.page.getByPlaceholder('Class').fill(announcementData.className);
  133 |         }
  134 |         await this.postBtn.click();
  135 |     }
  136 | 
  137 | }
  138 | export default AdminPage;
  139 | 
```
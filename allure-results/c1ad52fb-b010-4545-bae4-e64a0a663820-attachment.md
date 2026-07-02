# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin.spec.js >> TC#2 - Validating registration receptionist | Positive
- Location: tests\Admin.spec.js:13:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Launch Portal' })

```

# Test source

```ts
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
  81  |         await this.navigateToDashboard.click();
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
> 107 |         await this.navigateToDashboard.click();
      |                                        ^ Error: locator.click: Target page, context or browser has been closed
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
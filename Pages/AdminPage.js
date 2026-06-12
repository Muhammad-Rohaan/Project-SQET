import { expect } from "@playwright/test";
import LoginPage from "./LoginPage.js";
import LoginData from "../testdata/LoginData.json";


class AdminPage {

    constructor(page) {
        this.page = page;
        this.navigateToDashboard = page.getByLabel('Navigate to Dashboard')
        this.addTeacherBtn = page.getByLabel('Add new Teacher');

        this.fullNameInput = page.getByLabel('Full Name');
        this.emailInput = page.getByLabel('Email Address');
        this.passwordInput = page.getByLabel('Password');
        this.teacherRegIdInput = page.getByLabel('Teacher Registration ID');
        this.cnicInput = page.getByLabel('CNIC Number');
        this.qualificationInput = page.getByLabel('Qualification');
        this.salaryInput = page.getByLabel('Monthly Salary');
        this.joiningDateInput = page.getByLabel('Joining Date');
        this.subjectsInput = page.getByLabel('Subjects');
        this.classesInput = page.getByLabel('Classes');
        this.contactInput = page.getByLabel('Contact Number');
        this.addressInput = page.getByLabel('Home Address');
        this.ageInput = page.getByLabel('Age');
        this.registerBtn = page.getByRole('button', { name: 'Register Teacher' });
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
        // recp:
        this.addReceptionistBtn = page.getByLabel('Add new Receptionist'); // Assuming naming convention matches addTeacherBtn
        this.receptionRegIdInput = page.getByLabel('Registration ID');
        this.registerReceptionistBtn = page.getByRole('button', { name: 'Register Receptionist' });

        this.fullNameInput = page.getByLabel('Full Name');
        this.emailInput = page.getByLabel('Email Address');
        this.passwordInput = page.getByLabel('Password');
        this.cnicInput = page.getByLabel('CNIC Number');
        this.salaryInput = page.getByLabel('Monthly Salary');
        this.joiningDateInput = page.getByLabel('Joining Date');
        this.contactInput = page.getByLabel('Contact Number');
        this.addressInput = page.getByLabel('Home Address');
        // Announcement Section
        this.postAnnouncementModalBtn = page.getByRole('button', {
            name: '📢 Post Announcement'
        })
        this.announcementTitleInput = page.getByPlaceholder('Title');
        this.announcementMessageInput = page.getByPlaceholder('Message');
        this.announcementTargetDropdown = page.locator('select'); // Targeting the HTML select dropdown ('All')
        this.postBtn = page.getByRole('button', {
            name: 'Post',
            exact: true
        });

        this.fullNameInput = page.getByLabel('Full Name');
        this.emailInput = page.getByLabel('Email Address');
        this.passwordInput = page.getByLabel('Password');
        this.cnicInput = page.getByLabel('CNIC Number');
        this.salaryInput = page.getByLabel('Monthly Salary');
        this.joiningDateInput = page.getByLabel('Joining Date');
        this.contactInput = page.getByLabel('Contact Number');
        this.addressInput = page.getByLabel('Home Address');

    }

    async loginForAdmin(idx) {
        
        const loginPage = new LoginPage(this.page);
        const loginData = LoginData.validUsers[idx]; // for admin because only admin can create Teacher
        await loginPage.gotoUrl();
        await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
    }

    async registerTeacher(teacherData) {
        // Login first
        // const loginPage = new LoginPage(this.page);
        // const loginData = LoginData.validUsers[0]; // for admin because only admin can create Teacher
        // await loginPage.gotoUrl();
        // await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
       // await this.loginForAdmin(0);

        // Form Navigation & Interaction
        await this.navigateToDashboard.click();
        await this.addTeacherBtn.click();
        await this.fullNameInput.fill(teacherData.fullName);
        await this.emailInput.fill(teacherData.email);
        await this.passwordInput.fill(teacherData.password);
        await this.teacherRegIdInput.fill(teacherData.teacherRegId);
        await this.cnicInput.fill(teacherData.cnic);
        await this.qualificationInput.fill(teacherData.qualification);
        await this.salaryInput.fill(teacherData.salary);
        await this.joiningDateInput.fill(teacherData.date);

        await this.subjectsInput.fill(teacherData.subjects);
        await this.classesInput.fill(teacherData.classes);
        await this.contactInput.fill(teacherData.contact);
        await this.addressInput.fill(teacherData.address);
        await this.ageInput.fill(teacherData.age);
        await this.registerBtn.click();
    }

    async registerReceptionist(receptionistData) {
        // // Login first
        // const loginPage = new LoginPage(this.page);
        // const loginData = LoginData.validUsers[0]; // for admin because only admin can create Receptionist
        // await loginPage.gotoUrl();
        // await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);
        // Form Navigation & Interaction
        await this.navigateToDashboard.click();
        await this.addReceptionistBtn.click();
        await this.receptionRegIdInput.fill(receptionistData.receptionRegId);
        await this.cnicInput.fill(receptionistData.cnic);
        await this.salaryInput.fill(receptionistData.salary);
        await this.joiningDateInput.fill(receptionistData.joiningDate);
        await this.contactInput.fill(receptionistData.contact);
        await this.addressInput.fill(receptionistData.address);
        await this.registerReceptionistBtn.click();
    }

    async postAnnouncement(announcementData) {
        // // Login first
        // const loginPage = new LoginPage(this.page);
        // const loginData = LoginData.validUsers[0]; // for admin because only admin can create Receptionist
        // await loginPage.gotoUrl();
        // await loginPage.login(loginData.email, loginData.password, loginData.expectedMsg);

        await this.postAnnouncementModalBtn.click();
        await this.announcementTitleInput.fill(announcementData.title);
        await this.announcementMessageInput.fill(announcementData.message);

        await this.announcementTargetDropdown.selectOption({ value: announcementData.target });

        if (announcementData.target === 'specific-class') {
            await this.page.getByPlaceholder('Class').fill(announcementData.className);
        }
        await this.postBtn.click();
    }

}
export default AdminPage;

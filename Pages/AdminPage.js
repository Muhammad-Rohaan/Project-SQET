class AdminPage {

    constructor(page) {
        this.page = page;
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
    }

    async registerTeacher(teacherData) {
        await this.addTeacherBtn.click();
        await this.fullNameInput.fill(teacherData.fullName);
        await this.emailInput.fill(teacherData.email);
        await this.passwordInput.fill(teacherData.password);
        await this.teacherRegIdInput.fill(teacherData.teacherRegId);
        await this.cnicInput.fill(teacherData.cnic);
        await this.qualificationInput.fill(teacherData.qualification);
        await this.salaryInput.fill(teacherData.salary);
        await this.joiningDateInput.fill(teacherData.joiningDate);
        await this.subjectsInput.fill(teacherData.subjects);
        await this.classesInput.fill(teacherData.classes);
        await this.contactInput.fill(teacherData.contact);
        await this.addressInput.fill(teacherData.address);
        await this.ageInput.fill(teacherData.age);
        await this.registerBtn.click();

    }




}

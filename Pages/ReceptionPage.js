import { expect } from '@playwright/test';

class ReceptionPage {
    constructor(page) {
        this.page = page;
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarStudents = page.getByRole('link', { name: 'AZ Students' }).first();
        this.sidebarFees = page.getByRole('link', { name: 'Fees' }).first();
        this.sidebarAttendance = page.getByRole('link', { name: 'Attendance' }).first();
        
        this.registerNewStudentBtn = page.getByRole('button', { name: 'Register New Student' });
        this.studentFullName = page.getByPlaceholder('Full Name');
        this.studentEmail = page.getByPlaceholder('Email');
        this.studentPassword = page.getByPlaceholder('Password');
        this.studentFatherName = page.getByPlaceholder('Father Name');
        this.studentFatherPhone = page.getByPlaceholder('Father Phone');
        this.studentContact = page.getByPlaceholder('Student Contact');
        this.studentAddress = page.getByPlaceholder('Address');
        this.studentAge = page.getByPlaceholder('Age');
        this.studentClassName = page.getByPlaceholder('Class (e.g. 11)');
        this.studentField = page.locator('#fieldSelect');
        this.registerStudentBtn = page.getByRole('button', { name: 'Register Student' });
        this.cancelStudentRegBtn = page.getByRole('button', { name: 'Cancel' });
        
        this.feeRollNo = page.locator('#collect-rollNo');
        this.feeMonth = page.locator('#collect-month');
        this.feeYear = page.locator('#collect-year');
        this.feeAmount = page.locator('#collect-amount');
        this.collectFeeBtn = page.getByRole('button', { name: 'Collect Fee' });
        
        this.statusRollNo = page.locator('#statusRollNo');
        this.checkStatusBtn = page.getByRole('button', { name: 'Check' });
        
        this.attendanceRollNo = page.locator('#rollNo');
        this.attendanceStatus = page.locator('#status');
        this.markAttendanceBtn = page.getByRole('button', { name: 'Mark Attendance' });
    }

    async gotoDashboard() {
        await this.sidebarDashboard.click();
    }

    async gotoStudents() {
        await this.sidebarStudents.click();
    }

    async gotoFees() {
        await this.sidebarFees.click();
    }

    async gotoAttendance() {
        await this.sidebarAttendance.click();
    }

    async openRegisterStudentModal() {
        await this.registerNewStudentBtn.click();
    }

    async fillStudentForm(data) {
        if (data.fullName) await this.studentFullName.fill(data.fullName);
        if (data.email) await this.studentEmail.fill(data.email);
        if (data.password) await this.studentPassword.fill(data.password);
        if (data.fatherName) await this.studentFatherName.fill(data.fatherName);
        if (data.fatherPhone) await this.studentFatherPhone.fill(data.fatherPhone);
        if (data.contact) await this.studentContact.fill(data.contact);
        if (data.address) await this.studentAddress.fill(data.address);
        if (data.age) await this.studentAge.fill(data.age);
        if (data.className) await this.studentClassName.fill(data.className);
        if (data.field) await this.studentField.selectOption(data.field);
    }

    async submitStudentRegistration() {
        await this.registerStudentBtn.click();
    }

    async cancelStudentRegistration() {
        await this.cancelStudentRegBtn.click();
    }

    async fillFeeCollection(data) {
        if (data.rollNo) await this.feeRollNo.fill(data.rollNo);
        if (data.month) await this.feeMonth.selectOption(data.month);
        if (data.year) await this.feeYear.fill(data.year);
        if (data.amount) await this.feeAmount.fill(data.amount);
    }

    async submitFeeCollection() {
        await this.collectFeeBtn.click();
    }

    async checkFeeStatus(rollNo) {
        await this.statusRollNo.fill(rollNo);
        await this.checkStatusBtn.click();
    }

    async fillAttendance(data) {
        if (data.rollNo) await this.attendanceRollNo.fill(data.rollNo);
        if (data.status) await this.attendanceStatus.selectOption(data.status);
    }

    async submitAttendance() {
        await this.markAttendanceBtn.click();
    }
}

export default ReceptionPage;

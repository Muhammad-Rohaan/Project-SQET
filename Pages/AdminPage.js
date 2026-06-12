import { expect } from "@playwright/test";

class AdminPage {

    constructor(page) {
        this.page = page;
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarStudents = page.getByRole('link', { name: 'Students' }).first();
        this.sidebarTeachers = page.getByRole('link', { name: 'Teachers' }).first();
        this.sidebarReceptionists = page.getByRole('link', { name: 'Receptionists' }).first();
        this.sidebarFinanceFees = page.getByRole('link', { name: 'Finance/Fees' }).first();
        this.sidebarAnnouncements = page.getByRole('link', { name: 'Announcements' }).first();
    }

    async gotoAdminDashboard() {
        await this.page.goto('http://localhost:5173/');
        await this.page.getByRole('link', { name: 'Launch Portal' }).click();
        await this.page.getByLabel('Email or ID').fill('abbas@google.com');
        await this.page.getByLabel('Password').fill('admin');
        await this.page.locator('#submitBtn').click();
        await this.page.waitForTimeout(3000); // Wait for dashboard to load
    }

}
export default AdminPage;

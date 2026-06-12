import { expect } from "@playwright/test";

class TeacherPage {

    constructor(page) {
        this.page = page;
        // Get sidebar links more specifically - first occurrence is sidebar
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarStudents = page.getByRole('link', { name: 'Students' }).first();
        this.sidebarResults = page.getByRole('link', { name: 'Results' }).first();
        this.sidebarPassword = page.getByRole('link', { name: 'Password' }).first();
    }

    async gotoTeacherDashboard() {
        await this.page.goto('http://localhost:5173/');
        await this.page.getByRole('link', { name: 'Launch Portal' }).click();
        await this.page.getByLabel('Email or ID').fill('rohaanali82005@gmail.com');
        await this.page.getByLabel('Password').fill('r123');
        await this.page.locator('#submitBtn').click();
        await this.page.waitForTimeout(3000); // Wait for dashboard to load
    }

}
export default TeacherPage;

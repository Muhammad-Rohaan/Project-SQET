import { expect } from "@playwright/test";

class StudentPage {

    constructor(page) {
        this.page = page;
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarPassword = page.getByRole('link', { name: 'Password' }).first();
    }

    async gotoStudentDashboard() {
        await this.page.goto('http://localhost:5173/');
        await this.page.getByRole('link', { name: 'Launch Portal' }).click();
        await this.page.getByLabel('Email or ID').fill('bscs2380246@szabist.pk');
        await this.page.getByLabel('Password').fill('a123');
        await this.page.locator('#submitBtn').click();
        await this.page.waitForTimeout(3000); // Wait for dashboard to load
    }

}
export default StudentPage;

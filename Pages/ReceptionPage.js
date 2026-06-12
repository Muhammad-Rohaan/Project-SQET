import { expect } from "@playwright/test";

class ReceptionPage {

    constructor(page) {
        this.page = page;
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarAzStudents = page.getByRole('link', { name: 'AZ Students' }).first();
        this.sidebarFees = page.getByRole('link', { name: 'Fees' }).first();
        this.sidebarAttendance = page.getByRole('link', { name: 'Attendance' }).first();
    }

    async gotoReceptionDashboard() {
        await this.page.goto('http://localhost:5173/');
        await this.page.getByRole('link', { name: 'Launch Portal' }).click();
        await this.page.getByLabel('Email or ID').fill('recp@gmail.com');
        await this.page.getByLabel('Password').fill('r123');
        await this.page.locator('#submitBtn').click();
        await this.page.waitForTimeout(3000); // Wait for dashboard to load
    }

}
export default ReceptionPage;

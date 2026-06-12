import { expect } from '@playwright/test';

class StudentPage {
    constructor(page) {
        this.page = page;
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarPassword = page.getByRole('link', { name: 'Password' }).first();
        
        this.startQuizBtn = page.getByRole('button', { name: 'Start Quiz' });
        
        this.profileName = page.locator('h2').filter({ hasText: 'Your Profile' }).locator('xpath=following::p[contains(text(), "Name")]/following-sibling::p').first();
    }

    async gotoDashboard() {
        await this.sidebarDashboard.click();
    }

    async gotoPassword() {
        await this.sidebarPassword.click();
    }

    async startQuiz() {
        await this.startQuizBtn.click();
    }
}

export default StudentPage;

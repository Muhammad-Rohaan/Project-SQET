import { expect } from '@playwright/test';

class TeacherPage {
    constructor(page) {
        this.page = page;
        this.sidebarDashboard = page.getByRole('link', { name: 'Dashboard' }).first();
        this.sidebarStudents = page.getByRole('link', { name: 'Students' }).first();
        this.sidebarResults = page.getByRole('link', { name: 'Results' }).first();
        this.sidebarPassword = page.getByRole('link', { name: 'Password' }).first();
        
        this.quickViewResults = page.getByRole('link', { name: 'View student results' });
        this.quickFindStudents = page.getByRole('link', { name: 'Find Students' });
        
        this.noteTitle = page.getByPlaceholder('Note Title');
        this.noteSubject = page.getByPlaceholder('Subject');
        this.noteClassName = page.getByPlaceholder('Class (e.g. 10A)');
        this.noteFileInput = page.locator('input[type="file"]');
        this.uploadNotesBtn = page.getByRole('button', { name: 'Upload' });
    }

    async gotoDashboard() {
        await this.sidebarDashboard.click();
    }

    async gotoStudents() {
        await this.sidebarStudents.click();
    }

    async gotoResults() {
        await this.sidebarResults.click();
    }

    async gotoPassword() {
        await this.sidebarPassword.click();
    }

    async uploadNotes(data, filePath) {
        if (data.title) await this.noteTitle.fill(data.title);
        if (data.subject) await this.noteSubject.fill(data.subject);
        if (data.className) await this.noteClassName.fill(data.className);
        if (filePath) await this.noteFileInput.setInputFiles(filePath);
        await this.uploadNotesBtn.click();
    }
}

export default TeacherPage;

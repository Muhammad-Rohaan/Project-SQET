import { test, expect } from '../hooks/index.js';
import StudentPage from '../Pages/StudentPage';
import StudentData from '../testdata/StudentData.json';

test.describe('Student Portal Tests', () => {
    test('TC30: Navigate to Student Dashboard', async ({ loginAsStudent, page }) => {
        const studentPage = new StudentPage(page);
        await expect(page).toHaveURL(/.*student\/dashboard/);
    });

    test('TC31: Verify Start Quiz button exists', async ({ loginAsStudent, page }) => {
        const studentPage = new StudentPage(page);
        await expect(studentPage.startQuizBtn).toBeVisible();
    });

    test('TC32: Navigate to AI MCQs page via Start Quiz button', async ({ loginAsStudent, page }) => {
        const studentPage = new StudentPage(page);
        await studentPage.startQuizBtn.click();
        await expect(page).toHaveURL(/.*student\/ai-mcqs/);
    });

    test('TC33: Navigate to Password page via sidebar', async ({ loginAsStudent, page }) => {
        const studentPage = new StudentPage(page);
        await studentPage.gotoPassword();
        await expect(page).toHaveURL(/.*student\/change-password/);
    });

    test('TC34: Navigate back to Dashboard from Password', async ({ loginAsStudent, page }) => {
        const studentPage = new StudentPage(page);
        await studentPage.gotoPassword();
        await studentPage.gotoDashboard();
        await expect(page).toHaveURL(/.*student\/dashboard/);
    });

    test('TC35: Verify Student Dashboard loads all sections', async ({ loginAsStudent, page }) => {
        await expect(page.getByText('AI MCQs Generator')).toBeVisible();
        await expect(page.getByText('Your Profile')).toBeVisible();
        await expect(page.getByText('Subject Notes & Files')).toBeVisible();
        await expect(page.getByText('Test Results')).toBeVisible();
        await expect(page.getByText('Fees Status')).toBeVisible();
    });
});

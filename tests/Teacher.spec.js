import { test, expect } from '../hooks/index.js';
import TeacherPage from '../Pages/TeacherPage';
import TeacherData from '../testdata/TeacherData.json';

test.describe('Teacher Portal Tests', () => {
    test('TC20: Navigate to Teacher Dashboard', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await expect(page).toHaveURL(/.*teacher\/dashboard/);
    });

    test('TC21: Navigate to Students page via sidebar', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.gotoStudents();
        await expect(page).toHaveURL(/.*teacher\/students/);
    });

    test('TC22: Navigate to Results page via sidebar', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.gotoResults();
        await expect(page).toHaveURL(/.*teacher\/results/);
    });

    test('TC23: Navigate to Password page via sidebar', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.gotoPassword();
        await expect(page).toHaveURL(/.*teacher\/change-password/);
    });

    test('TC24: Navigate to Results page via quick action', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.quickViewResults.click();
        await expect(page).toHaveURL(/.*teacher\/results/);
    });

    test('TC25: Navigate to Students page via quick action', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.quickFindStudents.click();
        await expect(page).toHaveURL(/.*teacher\/students/);
    });

    test('TC26: Verify Upload Notes section exists', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await expect(teacherPage.noteTitle).toBeVisible();
        await expect(teacherPage.noteSubject).toBeVisible();
    });

    test('TC27: Navigate back to Dashboard from Results', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.gotoResults();
        await teacherPage.gotoDashboard();
        await expect(page).toHaveURL(/.*teacher\/dashboard/);
    });

    test('TC28: Navigate back to Dashboard from Students', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.gotoStudents();
        await teacherPage.gotoDashboard();
        await expect(page).toHaveURL(/.*teacher\/dashboard/);
    });

    test('TC29: Navigate back to Dashboard from Password', async ({ loginAsTeacher, page }) => {
        const teacherPage = new TeacherPage(page);
        await teacherPage.gotoPassword();
        await teacherPage.gotoDashboard();
        await expect(page).toHaveURL(/.*teacher\/dashboard/);
    });
});

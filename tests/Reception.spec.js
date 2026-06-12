import { test, expect } from '../hooks/index.js';
import ReceptionPage from '../Pages/ReceptionPage';
import ReceptionData from '../testdata/ReceptionData.json';

test.describe('Reception Portal Tests', () => {
    test('TC10: Navigate to Reception Dashboard', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await expect(page).toHaveURL(/.*reception\/dashboard/);
    });

    test('TC11: Navigate to AZ Students page', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoStudents();
        await expect(page).toHaveURL(/.*reception\/az-students/);
    });

    test('TC12: Navigate to Fees page', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoFees();
        await expect(page).toHaveURL(/.*reception\/fees/);
    });

    test('TC13: Navigate to Attendance page', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoAttendance();
        await expect(page).toHaveURL(/.*reception\/attendance/);
    });

    test('TC14: Open Register New Student modal', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.openRegisterStudentModal();
        await expect(receptionPage.registerStudentBtn).toBeVisible();
    });

    test('TC15: Cancel Register New Student', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.openRegisterStudentModal();
        await receptionPage.cancelStudentRegistration();
        await expect(receptionPage.registerNewStudentBtn).toBeVisible();
    });

    test('TC16: Fill Fee Collection form', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoFees();
        await receptionPage.fillFeeCollection(ReceptionData.validFee);
        await expect(receptionPage.feeRollNo).toHaveValue(ReceptionData.validFee.rollNo);
    });

    test('TC17: Check Fee Status functionality', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoFees();
        await receptionPage.checkFeeStatus(ReceptionData.validFee.rollNo);
        await page.waitForTimeout(2000);
    });

    test('TC18: Fill Attendance form', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoAttendance();
        await receptionPage.fillAttendance(ReceptionData.validAttendance);
        await expect(receptionPage.attendanceRollNo).toHaveValue(ReceptionData.validAttendance.rollNo);
    });

    test('TC19: Navigate back to Dashboard from Students', async ({ loginAsReceptionist, page }) => {
        const receptionPage = new ReceptionPage(page);
        await receptionPage.gotoStudents();
        await receptionPage.gotoDashboard();
        await expect(page).toHaveURL(/.*reception\/dashboard/);
    });
});

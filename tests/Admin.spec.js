import { test, expect } from '@playwright/test';
import AdminPage from '../Pages/AdminPage';
import AdminData from '../testdata/AdminData.json';


AdminData.validActions.forEach((data) => {

    test(`admin valid action - ${data.action} #${data.index}`, async ({ page }) => {
        const adminPage = new AdminPage(page);

        await adminPage.gotoAdminDashboard();
        if (data.action === "navigate to dashboard") {
            await adminPage.sidebarDashboard.click();
        } else if (data.action === "navigate to students") {
            await adminPage.sidebarStudents.click();
        } else if (data.action === "navigate to teachers") {
            await adminPage.sidebarTeachers.click();
        } else if (data.action === "navigate to receptionists") {
            await adminPage.sidebarReceptionists.click();
        }

        await page.waitForTimeout(5000);

    });

});


AdminData.invalidActions.forEach((data) => {

    test(`admin invalid action - ${data.action} #${data.index}`, async ({ page }) => {
        const adminPage = new AdminPage(page);

        await adminPage.gotoAdminDashboard();
        if (data.action === "navigate to finance/fees") {
            await adminPage.sidebarFinanceFees.click();
        } else if (data.action === "navigate to announcements") {
            await adminPage.sidebarAnnouncements.click();
        } else if (data.action === "refresh page") {
            await page.reload();
        }

        await page.waitForTimeout(5000);

    });

});

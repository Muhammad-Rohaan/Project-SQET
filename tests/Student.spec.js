import { test, expect } from '@playwright/test';
import StudentPage from '../Pages/StudentPage';
import StudentData from '../testdata/StudentData.json';


StudentData.validActions.forEach((data) => {

    test(`student valid action - ${data.action} #${data.index}`, async ({ page }) => {
        const studentPage = new StudentPage(page);

        await studentPage.gotoStudentDashboard();
        if (data.action === "navigate to dashboard") {
            await studentPage.sidebarDashboard.click();
        } else if (data.action === "navigate to password") {
            await studentPage.sidebarPassword.click();
        }

        await page.waitForTimeout(5000);

    });

});


StudentData.invalidActions.forEach((data) => {

    test(`student invalid action - ${data.action} #${data.index}`, async ({ page }) => {
        const studentPage = new StudentPage(page);

        await studentPage.gotoStudentDashboard();
        await page.reload();

        await page.waitForTimeout(5000);

    });

});

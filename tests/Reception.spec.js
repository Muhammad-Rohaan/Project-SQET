import { test, expect } from '@playwright/test';
import ReceptionPage from '../Pages/ReceptionPage';
import ReceptionData from '../testdata/ReceptionData.json';


ReceptionData.validActions.forEach((data) => {

    test(`reception valid action - ${data.action} #${data.index}`, async ({ page }) => {
        const receptionPage = new ReceptionPage(page);

        await receptionPage.gotoReceptionDashboard();
        if (data.action === "navigate to dashboard") {
            await receptionPage.sidebarDashboard.click();
        } else if (data.action === "navigate to az students") {
            await receptionPage.sidebarAzStudents.click();
        } else if (data.action === "navigate to fees") {
            await receptionPage.sidebarFees.click();
        } else if (data.action === "navigate to attendance") {
            await receptionPage.sidebarAttendance.click();
        }

        await page.waitForTimeout(5000);

    });

});


ReceptionData.invalidActions.forEach((data) => {

    test(`reception invalid action - ${data.action} #${data.index}`, async ({ page }) => {
        const receptionPage = new ReceptionPage(page);

        await receptionPage.gotoReceptionDashboard();
        await page.reload();

        await page.waitForTimeout(5000);

    });

});

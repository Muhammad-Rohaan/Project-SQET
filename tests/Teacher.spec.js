import { test, expect } from '@playwright/test';
import TeacherPage from '../Pages/TeacherPage';
import TeacherData from '../testdata/TeacherData.json';


TeacherData.validActions.forEach((data) => {

    test(`teacher valid action - ${data.action} #${data.index}`, async ({ page }) => {
        const teacherPage = new TeacherPage(page);

        await teacherPage.gotoTeacherDashboard();
        if (data.action === "navigate to dashboard") {
            await teacherPage.sidebarDashboard.click();
        } else if (data.action === "navigate to students") {
            await teacherPage.sidebarStudents.click();
        } else if (data.action === "navigate to results") {
            await teacherPage.sidebarResults.click();
        } else if (data.action === "navigate to password") {
            await teacherPage.sidebarPassword.click();
        }

        await page.waitForTimeout(5000);

    });

});


TeacherData.invalidActions.forEach((data) => {

    test(`teacher invalid action - ${data.action} #${data.index}`, async ({ page }) => {
        const teacherPage = new TeacherPage(page);

        await teacherPage.gotoTeacherDashboard();
        await page.reload();

        await page.waitForTimeout(5000);

    });

});

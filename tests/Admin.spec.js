import { test, expect } from "../hooks/index.js";
import AdminPage from "../Pages/AdminPage.js";
import AdminData from "../testdata/AdminData.json";

test('TC#1 - Validating registration teachers | Positive', async ({ loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);
    const adminDataForTeacherRegistration = AdminData.validTeacher;

    await adminPage.registerTeacher(adminDataForTeacherRegistration);
    
});

test('TC#2 - Validating registration receptionist | Positive', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);
    const adminDataForReceptionistRegistration = AdminData.validReceptionist;

    await adminPage.registerReceptionist(adminDataForReceptionistRegistration);
    
});

test('TC#3 - Validating posting announcement | Positive', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);
    const adminDataForAnnouncement = AdminData.validAnnouncement;

    await adminPage.postAnnouncement(adminDataForAnnouncement);
});

test('TC#4 - Validating teacher registration cancellation | Positive', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);

    await adminPage.addTeacherBtn.click();
    await adminPage.cancelBtn.click();
    await expect(adminPage.addTeacherBtn).toBeVisible();
});

test('TC#5 - Validating announcement posting with empty fields | Negative', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);

    await adminPage.postAnnouncementModalBtn.click();
    await adminPage.postBtn.click();
});

test('TC#6 - Validating receptionist registration cancellation | Positive', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);

    await adminPage.addReceptionistBtn.click();
    await adminPage.cancelBtn.click();
    await expect(adminPage.addReceptionistBtn).toBeVisible();
});

test('TC#7 - Validating teacher registration with empty fields | Negative', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);
    await adminPage.addTeacherBtn.click();
    await adminPage.registerBtn.click();
    await expect(adminPage.cancelBtn).toBeVisible();
});

test('TC#8 - Validating announcement posting cancellation | Positive', async ({loginAsAdmin, page}) => {
    const adminPage = new AdminPage(page);
    await adminPage.postAnnouncementModalBtn.click();
    await adminPage.cancelBtn.click();
    await expect(adminPage.postAnnouncementModalBtn).toBeVisible();
});

test('TC#9: Navigate to Dashboard', async ({loginAsAdmin, page }) => {
    const adminPage = new AdminPage(page);
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(adminPage.addTeacherBtn).toBeVisible();
});

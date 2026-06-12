import { test, expect } from "@playwright/test";
import AdminPage from "../Pages/AdminPage";
import AdminData from "../testdata/AdminData.json";

test('TC#1 - Validating registration teachers | Positive', async ({page}) => {
    const adminPage = new AdminPage(page);
    const adminDataForTeacherRegistration = AdminData.validTeacher;

    await adminPage.registerTeacher(adminDataForTeacherRegistration);
    
});

test('TC#2 - Validating registration receptionist | Positive', async ({page}) => {
    const adminPage = new AdminPage(page);
    const adminDataForReceptionistRegistration = AdminData.validReceptionist;

    await adminPage.registerReceptionist(adminDataForReceptionistRegistration);
    
});

test('TC#3 - Validating posting announcement | Positive', async ({page}) => {
    const adminPage = new AdminPage(page);
    const adminDataForAnnouncement = AdminData.validAnnouncement;

    await adminPage.postAnnouncement(adminDataForAnnouncement);
    
});
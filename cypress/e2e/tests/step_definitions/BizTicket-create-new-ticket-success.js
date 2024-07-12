import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/1-LoginPage";
import { ProjectOverall } from "../pages/3-ProjectOverall";
import { BizTicketPage } from "../pages/4-BizTicketPage";
import { LandingPage } from "../pages/2-LandingPage";
import data from "../../../fixtures/data.json";

const loginPage = new LoginPage
const landingPage = new LandingPage
const projectOverall = new ProjectOverall
const bizTicketPage = new BizTicketPage

Given('user is on Login Page', () => {
    cy.visit(loginPage.getUrl)
    cy.wait(3000)
})

When('user input correct username and password, select the project hieubh and choosing BizTicket', () => {
    //dang nhap
    cy.enter(loginPage.getIframe).then((getBody) => {
        //dien username
        getBody().find(loginPage.getEmail).type(data.username)
        getBody().find(loginPage.getContinueBtn).click()
        cy.wait(1000)
        //dien password
        getBody().find(loginPage.getPassword).type(data.password)
        getBody().find(loginPage.loginBtn).click()
        cy.wait(5000)
    })
    //den trang BizFly
    cy.url().should('equal',landingPage.getUrl)
    //an vao button danh sach du an
    cy.get(landingPage.getChooseProjBtn).click()
    cy.wait(1000)
    cy.get(landingPage.getDropdownLst).should('be.visible')
    //chon du an hieubh
    cy.get(landingPage.getMyProj).click()
    cy.wait(2000)
    //chuyen den man tong quan cac du an
    cy.url().should('equal',projectOverall.getUrl)
    //chon bizFlyTicket
    cy.get(projectOverall.getBizTicketArea).click()
    cy.wait(1000)
})

Then('BizTicket page shows up', () => {
    cy.url().should('equal', bizTicketPage.getUrl)
    cy.get(bizTicketPage.getCreateTicketBtn).should('be.visible')
})

When('user click on "Tao ticket" button', () => {
    cy.get(bizTicketPage.getCreateTicketBtn).click()
})

Then('"Tao ticket moi" window appears', ()=> {
    cy.get(bizTicketPage.getCreateTicketWindow).should('be.visible')
})

When('user fill up the form', () => {
    //chinh thuoc nhom cong viec sang Testing
    cy.get(bizTicketPage.getBizIdBtn).click()
    cy.get(bizTicketPage.getBizIdDropdown).should('be.visible')
    cy.get(bizTicketPage.getBizIdSearchBar).should('be.visible')
    cy.get(bizTicketPage.getOtherBizId).should('be.visible')
    cy.get(bizTicketPage.getTargetBizId).click()
    cy.wait(1000)
    //chinh loai ticket sang test
    cy.get(bizTicketPage.getTypeTicketBtn).click()
    cy.get(bizTicketPage.getTypeTicketDropdown).should('be.visible')
    cy.get(bizTicketPage.getTypeTicketSearchBar).should('be.visible')
    cy.get(bizTicketPage.getTypeTicketList).should('be.visible')
    cy.get(bizTicketPage.getRecommendedTypeTicket).should('be.visible')
    cy.get(bizTicketPage.getOtherTypeTicket).should('be.visible')
    cy.get(bizTicketPage.getTargetTypeTicket).click()
    //dien ten ticket "test 11"
    cy.get(bizTicketPage.getTicketName).type('test 11')
    //dien vao mo ta :"day la ticket test"
    cy.enter(bizTicketPage.getIframe).then((getBody) => {
        getBody()
            .click()
            .type('day la ticket test')
    })
    //upload file
    //click vao btn upload file tu man tao ticket
    cy.get(bizTicketPage.getAttachBtn).click()
    //cua so upload hien len
    cy.get(bizTicketPage.getAttachWindow).should('be.visible')
    //chon nut tai file len roi upload
    cy.get(bizTicketPage.getUploadBtn).click()
    cy.wait(1000)
    cy.get(bizTicketPage.getUploadInput).selectFile('cypress/fixtures/test.txt',{force:true})
    cy.wait(1000)
    cy.get(bizTicketPage.getConfirmUploadBtn).click()
    cy.wait(1000)
    //xet duyet link/text
    cy.get(bizTicketPage.getAddLinkTextBtn).click()
    cy.get(bizTicketPage.getInputField).type('example.com')
    cy.get(bizTicketPage.getSaveBtn).click()
})
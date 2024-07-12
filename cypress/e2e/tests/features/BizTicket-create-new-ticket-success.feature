Feature: As a user, I want to create a new ticket from BizTicket
    Scenario: successfully created
    Given user is on Login Page
    When user input correct username and password, select the project hieubh and choosing BizTicket
    Then BizTicket page shows up
    When user click on "Tao ticket" button
    Then "Tao ticket moi" window appears
    When user fill up the form
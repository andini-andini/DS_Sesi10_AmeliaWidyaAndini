@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Amelia is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully
    When Amelia login with "standard_user" credential
    Then Amelia should see home page
    Then Amelia should see cart page

  @negative
  Scenario: As a locked_out_user, I want to log in successfully
    When Amelia login with "locked_out_user" credential
    Then Amelia should see error "Epic sadface: Sorry, this user has been locked out"
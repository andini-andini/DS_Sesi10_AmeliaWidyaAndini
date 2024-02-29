Feature: Swag Labs - Login

  Scenario : As a standard_user, I want to log in successfully
    Given Amelia is on the login page
    When Amelia login with "standard_user" credential
    Then Amelia should see home page
  
@items
Feature: Items

  Scenario: User Searches Apple
    When I navigate to "https://www.apple.com"
    Then the page title is 'Apple'

  @core
  Scenario: User Searches Testery App (Development)
    When I navigate to "https://dev.testery.app"
    Then the page title is 'Testery - Login'

  Scenario: User Searches Testery App (Production)
    When I navigate to "https://testery.app"
    Then the page title is 'Testery - Login'

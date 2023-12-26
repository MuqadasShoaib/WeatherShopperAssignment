Feature: Check the temperature to check the temperature on the screen and then make decision to buy moisturizer
or sunscreen according to it.

Scenario: Checking the temperature
    Given User is at Weather shopper website
    When  User sees the temperature displayed and decides what category to choose

# Scenario:  Add moisturizer to the shopping cart
#     When the user adds least expensive moisturizer to the cart that contains Aloe and the user adds least expensive moisturizer to the cart that contains almond
#     Then the shopping cart should contain both items



# Scenario: Add sunscreen to the shopping cart
#      When the user adds least expensive sunscreen to the cart that contains SPF-50 and adds least expensive sunscreen to the cart that contains SPF-30
#      Then the shopping cart should contain both items

    
    Scenario: Payment Process
    Given the user is on the Payment Page
    When user enters the payment details into the form then payment is sucessfull
    

    
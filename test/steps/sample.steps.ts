import {Given, Then, When} from "@cucumber/cucumber";


Given( 'today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Step 1')
});


When('I ask whether it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Step 2')
});

Then('I should be told {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log('Step 3')
});
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
window.jQuery = $;
window.$ = $;
import { Planet } from "./../src/backend.js"
import { ageOnPlanet } from "./../src/backend.js"
import { lifeExpectancy } from "./../src/backend.js"
import { yearsLeft } from "./../src/backend.js"


$(document).ready(function(){
  $("#submit").click(function(){
    event.preventDefault();
    let userBirthYear = $("#birthYear").val();
    let today = new Date();
    let year = today.getYear();
    let userAge = (year + 1900) - userBirthYear
    if ($("#birthDay").is(':checked') == true){
      userAge = userAge - 1
    }
    let planetChoice = $(".select").val();
    let result = lifeExpectancy(userAge,planetChoice)
    $(".output").html(`You're ${userAge} here on earth. That means, on average, you have ${yearsLeft(userAge)} here on Earth. Get to livin'!

    If you were on ${planetChoice} you'd be ${ageOnPlanet(userAge,planetChoice)}, and ${result}`)
  })
})

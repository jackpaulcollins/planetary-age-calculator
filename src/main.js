import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
window.jQuery = $;
window.$ = $;
import { Planet } from "./../src/backend.js";
import { ageOnPlanet } from "./../src/backend.js";
import { lifeExpectancy } from "./../src/backend.js";
import { determineRate } from "./../src/backend.js";



$(document).ready(function(){
  $("#submit").click(function(){
    event.preventDefault();
    const userBirthYear = $("#birthYear").val();
    const today = new Date();
    const year = today.getYear();
    let userAge = (year + 1900) - userBirthYear;
    if ($("#birthDay").is(':checked') == true){
      userAge = userAge - 1;
    }
    const planetInput = $(".select").val();
    const rate = determineRate(planetInput);
    const planetChoice = new Planet(planetInput,rate);
    $(".output").html(`You're ${userAge} here on earth. That means, on average, you have ${78.69 - userAge} years left! Better Get to livin'!
    In ${planetChoice.name} years you'd be ${ageOnPlanet(userAge,planetChoice)}, and ${lifeExpectancy(userAge,planetChoice)}`)
  });
});

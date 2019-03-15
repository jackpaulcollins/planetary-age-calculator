import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
window.jQuery = $;
window.$ = $;
import { Planet } from "./../src/backend.js"
import { ageOnMercury } from "./../src/backend.js"
import { ageOnVenus } from "./../src/backend.js"
import { ageOnMars } from "./../src/backend.js"
import { ageOnJupiter } from "./../src/backend.js"
import { lifeExpectancy } from "./../src/backend.js"
import { yearsLeft } from "./../src/backend.js"


console.log(lifeExpectancy(30,"jupiter"))

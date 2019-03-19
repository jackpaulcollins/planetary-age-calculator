
import { lifeExpectancy } from "./../src/backend.js";
import { ageOnPlanet } from "./../src/backend.js";
import { determineRate } from "./../src/backend.js";
import { Planet } from "./../src/backend.js";



describe('Ages', function() {
  it('determine user ages on planets', function() {
    const jupiter = new Planet("jupiter",11.86);
    const ageOnJupiter = ageOnPlanet(30,jupiter);
    expect(ageOnJupiter).toEqual(355.80);
      })
})

describe('Life Expectancy', function(){
  it('determines the users life expectancy based on a given planet', function(){
    const jupiter = new Planet("jupiter",11.86);
    const lifeExp = lifeExpectancy(30,jupiter);
    expect(lifeExp).toEqual(577.46);
  });
});

describe('determineRate', function(){
  it('determines plant orbit rate', function(){
    const planetInput = determineRate("mercury");
    expect(planetInput).toEqual(.24);
  })
})

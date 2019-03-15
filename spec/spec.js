import { Planet } from "./../src/backend.js"
import { ageOnMercury } from "./../src/backend.js"
import { ageOnVenus } from "./../src/backend.js"
import { ageOnMars } from "./../src/backend.js"
import { ageOnJupiter } from "./../src/backend.js"
import { lifeExpectancy } from "./../src/backend.js"
import { yearsLeft } from "./../src/backend.js"

describe('Ages', function() {
  it('determine user ages for Mercury', function() {
    let age = ageOnMercury(30)
    expect(age).toEqual(7.199999999999999)
  });

  it('determine user ages for Venus', function() {
    let age = ageOnVenus(30)
    expect(age).toEqual(50)
  });

  it('determine user ages for Mars', function() {
    let age = ageOnMars(30)
    expect(age).toEqual(50)
  });

  it('determine user ages for Mercury', function() {
    let age = ageOnJupiter(30)
    expect(age).toEqual(50)
  });
});

describe('Life Expectancy', function(){
  it('determines the users life expectancy based on a given planet', function(){
    let lifeExp = lifeExpectancy(30,"jupiter")
    expect(lifeExp).toEqual(10)
  });
});

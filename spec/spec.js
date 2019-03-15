import { Planet } from "./../src/backend.js"
import { ageOnMercury } from "./../src/backend.js"
import { ageOnVenus } from "./../src/backend.js"
import { ageOnMars } from "./../src/backend.js"
import { ageOnJupiter } from "./../src/backend.js"
import { lifeExpectancy } from "./../src/backend.js"


describe('Ages', function() {
  it('determine user ages for Mercury', function() {
    let age = ageOnMercury(30)
    expect(age).toEqual(50)
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

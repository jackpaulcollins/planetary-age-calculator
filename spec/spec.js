
import { lifeExpectancy } from "./../src/backend.js"
import { ageOnPlanet } from "./../src/backend.js"




describe('Ages', function() {
  it('determine user ages on planets', function() {
    let ageOnJupiter = ageOnPlanet(30,"jupiter")
    expect(ageOnJupiter).toEqual(355.8)
    let ageOnMars = ageOnPlanet(30,"mars")
    expect(ageOnMars).toEqual(56.4)
    let ageOnVenus = ageOnPlanet(30,"venus")
    expect(ageOnVenus).toEqual(18.6)
    let ageOnMercury = ageOnPlanet(30,"mercury")
    expect(ageOnMercury).toEqual(7.2)
  })
})

describe('Life Expectancy', function(){
  it('determines the users life expectancy based on a given planet', function(){
    let lifeExp = lifeExpectancy(30,"jupiter")
    expect(lifeExp).toEqual(2.52)
  });
});

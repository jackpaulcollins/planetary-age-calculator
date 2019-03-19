
export function Planet(name,rate){
  this.name= name,
  this.rate = rate;
}
export function ageOnPlanet(age,planet){
  const planetAge = (age * planet.rate).toFixed(2);
  return planetAge;
}
export function lifeExpectancy(age,planet){
  const usLifeExp = 78.69;
  const planetLifeExpectancy = (usLifeExp * planet.rate).toFixed(2);
  const userAgeOnPlanet = ageOnPlanet(age, planet);
  console.log(userAgeOnPlanet, planetLifeExpectancy, planet.name);
  if (planet.name){
    const ageDiff = userAgeOnPlanet - planetLifeExpectancy;
    if (ageDiff < 0){
      return `you have ${planetLifeExpectancy - userAgeOnPlanet} years left to live!`
    } else {return `you should have died ${userAgeOnPlanet - planetLifeExpectancy} years ago!`}
  }
}

export function determineRate(planetInput){
  if (planetInput == "mercury"){
    const rate = .24;
    return rate;
  }
  if (planetInput == "venus"){
    const rate = .62;
    return rate;
  }
  if (planetInput == "mars"){
    const rate = 1.88;
    return rate;
  }
  if (planetInput == "jupiter"){
    const rate = 11.86;
    return rate;
  }
}

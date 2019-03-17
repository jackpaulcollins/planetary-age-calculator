
export function Planet(name,rate){
  this.name= name,
  this.rate = rate
}


export function ageOnPlanet(age,planet){
  let planetAge = (age * planet.rate).toFixed(2)
  return planetAge
}

export function lifeExpectancy(age,planet){
  const usLifeExp = 78.69
  let planetLifeExpectancy = (usLifeExp * planet.rate).toFixed(2)
  let userAgeOnPlanet = ageOnPlanet(age, planet)
  console.log(userAgeOnPlanet, planetLifeExpectancy, planet.name)

  if (planet.name == "mercury"){
    if (userAgeOnPlanet < planetLifeExpectancy){
      return `you have ${planetLifeExpectancy - userAgeOnPlanet} years left to live!`
    } else {return `you should have died ${userAgeOnPlanet - planetLifeExpectancy} years ago!`}
  }

  if (planet.name == "venus"){
    if (userAgeOnPlanet < planetLifeExpectancy){
      return `you have ${planetLifeExpectancy - userAgeOnPlanet} years left to live!`
    } else {return `you should have died ${userAgeOnPlanet - planetLifeExpectancy} years ago!`}
  }

  if (planet.name == "mars"){
    if (userAgeOnPlanet < planetLifeExpectancy){
      return `you have ${planetLifeExpectancy - userAgeOnPlanet} years left to live!`
    } else {return `you should have died ${userAgeOnPlanet - planetLifeExpectancy} years ago!`}
  }

  if (planet.name == "jupiter"){
    if (userAgeOnPlanet < planetLifeExpectancy){
      return `you have ${planetLifeExpectancy - userAgeOnPlanet} years left to live!`
    } else {return `you should have died ${userAgeOnPlanet - planetLifeExpectancy} years ago!`}
  }


}

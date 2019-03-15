
function Planet(name,rate){
  this.name= name,
  this.rate = rate
}

const mercury = new Planet("Mercury",0.24);
const venus = new Planet("Venus",0.62);
const mars = new Planet("Mars",1.88);
const jupiter = new Planet("Jupiter",11.86);

export function ageOnPlanet(age, planet){
  if (planet == "mercury"){return age * .24}
  else if (planet == venus){return age * .62}
  else if (planet == mars){return age * 1.88}
  else {return age * 11.86}
}


export function lifeExpectancy(age,planet){
  const usLifeExp = 78.69;
  let yearsStillLeft = yearsLeft(age);

  if (planet == "mercury"){

    let planetAge = ageOnPlanet(age,mercury)
    if (planetAge < yearsStillLeft){
    return `You still have ${usLifeExp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    } else if (planet == venus){
    let planetAge = ageOnPlanet(age,venus)
    if (planetAge < yearsStillLeft){
    return `You still have ${usLifeExp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
  } else if (planet == mars){
    let planetAge = ageOnPlanet(age,mars)
    if (planetAge < yearsStillLeft){
    return `You still have ${usLifeExp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    } else {
    let planetAge = ageOnPlanet(age,jupiter)
    if (planetAge < yearsStillLeft){
    return `You still have ${usLifeExp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    }
}

export function yearsLeft(age){
  const usLifeExp = 78.69;
  return usLifeExp - age;
}

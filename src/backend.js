
function Planet(name,rate){
  this.name= name,
  this.rate = rate
}


export function ageOnPlanet(age, planet){
  if (planet == "mercury"){return (age * .24).toFixed(2)}
  else if (planet == "venus"){return (age * .62).toFixed(2)}
  else if (planet == "mars"){return (age * 1.88).toFixed(2)}
  else {return (age * 11.86).toFixed(2)}
}


export function lifeExpectancy(age,planet){
  const usLifeExp = 78.69;
  let yearsStillLeft = usLifeExp - age
  if (planet == "mercury"){
    if (age*.24 < yearsStillLeft){
      return `you only have ${(yearsStillLeft/.24).toFixed()} years to live!`
    } else {return `you should have died ${(age*.24-usLifeExp).toFixed()} years ago!`}
  }
  if (planet == "venus"){
    if (age*.62 < yearsStillLeft){
      return `you only have ${(yearsStillLeft/.62).toFixed()} years to live!`
    } else {return `you should have died ${(age*.62-usLifeExp).toFixed()} years ago!`}
  }
  if (planet == "mars"){
    if (age * 1.88 < yearsStillLeft){
      return `you only have ${yearsStillLeft/1.88.toFixed()}years to live!`
    } else {return `you should have died ${(age*1.88-usLifeExp).toFixed()} years ago!`}
  }
  if (planet == "jupiter"){
    if (age * 11.86 < yearsStillLeft){
      return `you only have! ${(yearsStillLeft/11.86).toFixed()}years to live`
    } else {return `you should have died ${(age*11.86-usLifeExp).toFixed(1)} years ago!`}
  }
}

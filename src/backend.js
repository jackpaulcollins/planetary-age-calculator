
Planet function(name,rate){
  this.name= "name",
  this.rate = rate
}

const mercury = new Planet("Mercury",0.24);
const venus = new Planet("Venus",0.62);
const mars = new Planet("Mars",1.88);
const jupiter = new Planet("Jupiter",11.86);

const usLifeExp = 78.69;

export function ageOnMercury(age){
  return age * 0.24
};

export function ageOnVenus(age){
  return age * 0.62
};

export function ageOnMars(age){
  return age * 1.88
};

export function ageOnJupiter(age){
  return age * 11.86
};

export function lifeExpectancy(age,planet){
  let yearsLeft = yearsLeft(age);
  if (planet === mercury){
    let planetAge = ageOnMercury(age)
    if (planetAge < age){
    return `You still have ${usLifexp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    } else if (planet === venus){
    let planetAge = ageOnVenus(age)
    if (planetAge < age){
    return `You still have ${usLifexp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    } else if (planet === venus){
    let planetAge = ageOnMars(age)
    if (planetAge < age){
    return `You still have ${usLifexp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    } else {
    let planetAge = ageOnJupiter(age)
    if (planetAge < age){
    return `You still have ${usLifexp - planetAge} years to live!`
    } else {
    return `You should have died ${planetAge - usLifeExp} years ago!`}
    }
};

function yearsLeft(age){
  const usLifeExp = 78.69;
  return usLifeExp - age;
};

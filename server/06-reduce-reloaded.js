const items = [1,3,2,3,3,1,10]

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1
  } else {
    obj[item] = obj[item] + 1
  }
  return obj
}, {})

console.log(rta)

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
]

const rta1 = data
  .map((i) => i.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1
    } else {
      obj[item] = obj[item] + 1
    }
    return obj
  }, {})

console.log('rta1', rta1)

const sortedOfAge = arr =>
  arr.filter(({age}) => age > 18)
    .map(({firstName, lastName, age}) => `<li>${lastName} ${firstName} is ${age}</li>`)
    .sort()
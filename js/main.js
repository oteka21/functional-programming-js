const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


  console.log('ola perras')
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um novo!
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona em primeiro lugar!
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array!
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // último não entra no array!
console.log(algunsPilotos2)
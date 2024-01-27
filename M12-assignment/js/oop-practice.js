// STEP 1
// class Cat {
// 	constructor(name, breed, color) {
// 		this.name = name
//      this.breed = breed
// 		this.color = color
// 	}
// 	makeSound = function() {
// 		console.log(`${this.name} meowed!`)
// 	}
// }

// const Dog = function (name, breed, color) {
//     this.name = name
//     this.breed = breed
//     this.color = color
//     this.makeSound = function() {
// 		console.log(`${this.name} barked!`)
//     }
// }

// STEP 2
// class Cat {
// 	constructor(name, breed, color) {
// 		this.name = name
//      this.breed = breed
// 		this.color = color
// 	}
// 	makeSound = function() {
// 		console.log(`${this.name} meowed!`)
// 	}
// }

// const Dog = function (name, breed, color) {
//     this.name = name
//     this.breed = breed
//     this.color = color
//     this.makeSound = function() {
// 		console.log(`${this.name} barked!`)
//     }
// }

// const fluffy = new Cat('Fluffy', 'Bengal', 'White')
// console.log(fluffy.name)
// fluffy.makeSound()

// const buddy = new Dog('Buddy', 'Terrier', 'Brown')
// console.log(buddy.name)
// buddy.makeSound()

// STEP 3
// class Animal {
// 	constructor() {
//         console.log(`The new animal has been created.`)
// 	}
//     // animalCreate = function() {

//     // }
// }
// const animal1 = new Animal()

// STEP 4
// class Animal {
// 	constructor(species) {
// 		this.species = species
//         console.log(`The new ${this.species} has been created.`)
// 	}
// }
// const bird = new Animal('bird')

// STEP 5
// class Animal {
// 	constructor(type,breed,color,height,length) {
// 		this.type = type
// 		this.breed = breed
// 		this.color = color
// 		this.height = height
// 		this.length = length
//         console.log(`The new ${this.color} ${this.breed} ${this.type} has been created. It is ${this.height} tall and ${this.length} long!`)
// 	}
// }
// const bird = new Animal('bird','macaw','blue','2 feet','30 inches')

// STEP 6
// class Animal {
// 	constructor(type,breed,color,height,length) {
// 		this.type = type
// 		this.breed = breed
// 		this.color = color
// 		this.height = height
// 		this.length = length
//         console.log(`The new ${this.color} ${this.breed} ${this.type} has been created. It is ${this.height} tall and ${this.length} long!`)
// 	}
// }
// const bird = new Animal('bird','macaw','blue','2 feet','30 inches')

// let objProps = []

// for (let i in bird) {
// 	if (bird.hasOwnProperty(i)) {
// 		console.log(i)
// 	}
// }

// STEP 7
// class Animal {
// 	constructor(type,name,breed,color,sound) {
// 		this.type = type
// 		this.name = name
// 		this.breed = breed
// 		this.color = color
// 		this.sound = sound
// 		}
// 	makeSound = function() {
// 		console.log(`The ${this.color} ${this.type} ${this.sound}ed!`)
// 	}
// }

// const cat = new Animal('cat', 'Fluffy', 'Bengal', 'white', 'meow')
// const dog = new Animal('dog', 'Buddy', 'Terrier', 'black', 'bark')
// const bird = new Animal('bird', 'Tweety', 'macaw', 'blue', 'chirp')

// cat.makeSound()
// dog.makeSound()
// bird.makeSound()

// STEP 8
// class Animal {
// 	#type
// 	#name
// 	#breed
// 	#color
// 	#sound
// 	constructor(type,name,breed,color,sound) {
// 		this.#type = type
// 		this.#name = name
// 		this.#breed = breed
// 		this.#color = color
// 		this.#sound = sound
// 		}
// 	#checkType() {
// 		if (this.#type == 'dog') {
// 			return console.log(`The ${this.#type} made a noise!`)
// 		} else if (this.#type === 'cat') {
// 			return console.log(`The ${this.#type} made a noise!`)
// 		}
// 	}
// 	makeNoise() {
// 		return this.#checkType()
// 	}
// }

// const cat = new Animal('cat', 'Fluffy', 'Bengal', 'white', 'meow')
// const dog = new Animal('dog', 'Buddy', 'Terrier', 'black', 'bark')

// cat.makeNoise()
// dog.makeNoise()

// STEP 9
// let testParagraph = 'This is a sentence. this sentence has words. this sentence will be ending soon. This sentence is over.'
// let testSearch = 'this'
// let paragraph = prompt('Enter text to be scanned.')
// let search = prompt('What word do you want to search for?')

// let regex = new RegExp(`\\b${search}\\b`,'gi')
// let count = 0

// class wordSearch extends String {
// 	constructor(text, parse) {
// 		super()
// 		this.text = text
// 		this.parse = parse
// 	}
// 	findWords = function() {
// 			let wordArr = this.text.split(' ')
// 			for (let i of wordArr) {
// 				if (i == i.match(regex)) {
// 				// console.log(`Found ${i}`)
// 				count += 1
// 				}
// 			}
// 			console.log(`Found ${count} instances of "${this.parse}".`)
// 			return count
// 	}
// }

// const testQuery = new wordSearch(testParagraph, testSearch)
// testQuery.findWords()
// const query1 = new wordSearch(paragraph, search)
// query1.findWords()
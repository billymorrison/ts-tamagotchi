const STARTING_AGE = 1;
const STARTING_HUNGER = 3;
const STARTING_FITNESS = 7;

export class Pet {
    age: number;
    hunger: number;
    fitness: number;

    constructor() {
        this.age = STARTING_AGE;
        this.hunger = STARTING_HUNGER;
        this.fitness = STARTING_FITNESS;
    }

    growUp(): number {
        this.age += 1
        this.hunger += 3
        this.fitness -= 2
        return this.age
    }
}
import {Pet} from '../pet';
import {expect} from 'chai';

describe('Pet constructor', () => {
    let testPet = new Pet()

    it('initialises with an age of 1', () => {
        expect(testPet.age).to.equal(1)
    })

    it('initialises with a hunger of 3', () => {
        expect(testPet.hunger).to.equal(3)
    })

    it('initialises with a fitness of 7', () => {
        expect(testPet.fitness).to.equal(7)
    })
})

describe('Pet growUp method', () => {
    let testPet = new Pet()
    testPet.growUp()

    it('increments the pets age by one when the growUp method is called', () => {
        expect(testPet.age).to.equal(2)
    })

    it('increments the hunger by three when the growUp method is called', () => {
        expect(testPet.hunger).to.equal(6)
    })

    it('reduces the fitness by two when the growUp method is called', () => {
        expect(testPet.fitness).to.equal(5)
    })
})
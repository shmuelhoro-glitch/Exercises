import { isEven, max, average, toTitleCase, filterEven } from "./math.js";
import { describe, it } from "node:test"
import assert from "node:assert/strict";


describe("isEven", () =>{
    it('for even number return true', () =>{
        assert.strictEqual(isEven(4),true)
    
    it('for odd number return false', () =>{
        assert.strictEqual(isEven(3), false)
    })

    })
    it('zero is true', () => {
        assert.strictEqual(isEven(0), true)
    })
})


describe("max", () =>{
    it("return bigger between 2 positive numbers", () =>{
        assert.strictEqual(max(3,7),7)
    })
    it("work with negative number", () =>{
        assert.strictEqual(max(-5,2),2)
    })
    it('return one of umbers if is equal',()=>{
        assert.strictEqual(max(4,4),4)
    })
})

describe("average", ()=> {
    it('average of some numbers',()=>{
        assert.strictEqual(average([2,4,6]), 4)
    })
    it('return this num if there is only one',()=>{
        assert.strictEqual(average([10]),10)
    })
    it('throw error if empty array', ()=>{
        assert.throws(() => average([]))
    })
})

describe("toTitleCase", ()=> {
    it("return successfully", ()=>{
        assert.strictEqual(toTitleCase("shmuel"),"Shmuel")
    })
    it('return empty string for empty input', () =>{
        assert.strictEqual(toTitleCase(""),"")
    })
    it('work for string with one char', ()=>{
        assert.strictEqual(toTitleCase("a"),"A")
    })
})

describe("filterEven", () =>{
    it('array with numbers',()=>{
        assert.deepStrictEqual(filterEven([2,5]),[2])
    })
    it("work for empty array",()=>{
        assert.throws(() =>filterEven([]))
    })
    it('all odd numbers', ()=>{
        assert.throws(()=> filterEven([3,5,7,13]))
    })
})
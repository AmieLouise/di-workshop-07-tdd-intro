var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  //Uncomment this 👇
  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

//  Uncomment this 👇
  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should divide', function() {
    result = mm.divide(4,2)
    expect(result).to.equal(2)
  })

  it('should return highest value', function(){
    result = mm.returnHighest(7, 2)
    expect(result).to.equal(7)
  })

  it('should return lowest value', function(){
    result = mm.returnLowest(7, 2)
    expect(result).to.equal(2)
  })

  it('should return the input doubled', function() {
    result = mm.double(6)
    expect(result).to.equal(12)
  })

  it('should return the input squared', function() {
    result = mm.square(6)
    expect(result).to.equal(36)
  })

  it('raises the first one to the power of the second', function() {
    result = mm.raise(5, 3)
    expect(result).to.equal(125)
  })

  it('should return true if negative or false if not', function(){
    result = mm.isNegative(-4)
    expect(result).to.equal(true)
  })

  it('should return true if positive or false if not', function(){
    result = mm.isPositive(4)
    expect(result).to.equal(true)
  })

  it('should return true if first and last digit match', function(){
    result = mm.isCool(57635)
    expect(result).to.equal(true)
  })

  it('should return a array\'s values added together', function(){
    var array = [4,5,6,5]
    result = mm.sum(array)
    expect(result).to.equal(20)
  })

  it('should return a array\'s values multiplied together', function(){
    var array = [2,2,2,3]
    result = mm.multiplyArray(array)
    expect(result).to.equal(24)
  })

  it('should return mean', function(){
    var array = [1,3,5,7,9]
    result = mm.mean(array)
    expect(result).to.equal(5)
  })


})

class Coolculator {

  add(a, b) {
    return a + b
  }

  multiply(a, b){
    return a * b
  }

  subtract(a, b){
    return a - b
  }

  divide(a, b){
    return a / b
  }

  returnHighest(a,b){
    if(a > b){
      return a
    }
    else
    {
      return b
    }
  }

  returnLowest(a,b){
    if(a < b){
      return a
    }
    else
    {
      return b
    }
  }

  double(a){
    return a * 2
  }

  square(a){
    return a * a
  }

  raise(a, b){
    return Math.pow(a,b)
  }

  isNegative(a){
    if(a <=0){
      return true
    }
    else {
      return false
    }
  }

  isPositive(a){
    if(a >=0){
      return true
    }
    else {
      return false
    }
  }

  isCool (a){
    var num = a.toString()
    var lastDigit = num.charAt(num.length-1)
    var firstDigit = num.charAt(0)
    if(firstDigit == lastDigit){
      return true
    } else {
      return false
    }
  }

  sum(array){
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i]
    }
    return sum
  }

  multiplyArray(array){
    var value = 1
    for (var i = 0; i < array.length; i++) {
      value = value * array[i]
    }
    return value
  }

  mean(array){
    var value = 0
    for (var i = 0; i < array.length; i++){
      value = value + array[i]
    }
    var mean = value / array.length
    return mean
  }



}



module.exports = Coolculator

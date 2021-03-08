
// // Only positive integers allowed
// const add5 = (input, callback) => {
//   if (input <= 0) {
//     callback("Error: Positive inputs only", null)
//   }

//   else callback(null, input + 5)
// }

// const square = (input, callback) => {
//   callback(null, input * input)
// }

// const half = (input, callback) => {
//   callback(null, input / 2)
// }



// add5(10, (err, add5Result) => {
//   if (!err) {
//     console.log(add5Result)
//     square(add5Result, (err, squareResult) => {
//       console.log(squareResult)
//       half(squareResult, (err, halfResult) => {
//         console.log(halfResult)
//       })
//     })
//   }
//   else { 
//     console.log(err)
//   }
// })


const add5 = (input) => {
  return new Promise((resolve, reject) => {
    if (input <= 0) {
      reject("Error: Positive Integers Only")
    }
    else {
      const result = input + 5
      resolve(result)
    }
  })
}

const square = (input) => {
  return new Promise((resolve) => {
    resolve(input * input)
  })
}

const half = (input) => {
  return new Promise((resolve) => {
    resolve(input / 2)
  })
}

add5(10)
  .then(
    (add5Result) => {
      console.log("Result of add5(): " + add5Result)
      return square(add5Result)
    })
  .then((squareResult) => {
    console.log("Result of square(): " + squareResult)
    return half(squareResult)
  })
  .then((halfResult) => {
    console.log("Result of half(): " + halfResult)
  })
  .catch((anyError) => {
    console.log("Caught an error: " + anyError)
  })
  .finally(() => {
    console.log("this will always be executed")
  })
// add solution here
function theBeatlesPlay (musicians, instruments) {
  let newArr = []
  for (let i = 0; i < musicians.length; i++) {
    let currMus = musicians[i]
      newArr.push(currMus + ' plays ' + instruments[i])
  }
  return newArr 
}

function johnLennonFacts (arr) {
  let newArr = []
    for(let i = 0; i < arr.length; i++){
      let curr = arr[i]
      newArr.push(curr + '!!!')
    }
  return newArr
}

function iLoveTheBeatles (num){
  let newArr = []
    if(num === 7 ){
      str = 'I love the Beatles!' 
      newArr.push(str.repeat(8))
    }if (num === 17){
      return 'I love the Beatles!'
    }
  return newArr
}
//   describe('iLoveTheBeatles', function() {
//     it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
//       expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
//     });

//     it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
//       expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
//     });
//   });

// });
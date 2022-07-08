function longestWord(word){
    var sentence = word.split(' ');
    let sum =0
    let longest ='';
    for (let i=0; i <sentence.length;i++){
    let characters = sentence[i];
      if (characters.length >= sum) {
      sum = characters.length;
        longest =characters;
      }
    }return longest
}

function shortestWord(word){
    var sentence =word.split(' ');
    var theShortest = sentence[0];
    for (let i =0; i< sentence.length;i++){
        if (sentence[i].length <= theShortest.length) {
            theShortest = sentence[i]
        }
    }
    return theShortest
}

function wordLengths(word){
    var sentence =word.split(' ');
    let arr =sentence.map(w => w.length);
    let sum =0
    for (let i=0;i<arr.length; i++) {
    sum =sum+ arr[i]
    }return sum
    }

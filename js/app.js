async function asyncReadFile(filename) {
    try {
      const response = await fetch(filename);
      const contents = await response.text();
      const words = contents.split(/\r?\n/);
      return words;
    } catch (err) {
      console.log(err);
    }
  }
      //juwaptin' tuwriligin tekseriw
      let w = 0;
      let c = 0;
  
  async function showWord() {
    const words = await asyncReadFile('./data/test.txt');

    //test.txt faylinda qansha so'z bar?
    const len = words.length;

    //radio tu'ymesheler
    const f = document.getElementById('f-option');
    const s = document.getElementById('s-option');
    const t = document.getElementById('t-option');

    //radio tuymeshelerdin' labelleri
    const first = document.getElementById('first')
    const second = document.getElementById('second')
    const third = document.getElementById('third')

    //tuwri juwapti jaylastiriw ushin random labeldi tabiw
    let labeller = ["first", "second", "third"];

    const randomLabelCorrect = Math.floor(Math.random() * labeller.length);
    let labelWrong1;
    let labelWrong2;

    if (randomLabelCorrect == 0){
      labelWrong1 = 1
      labelWrong2 = 2
    } else if (randomLabelCorrect == 1){
      labelWrong1 = 0
      labelWrong2 = 2
    } else if (randomLabelCorrect == 2){
      labelWrong1 = 0
      labelWrong2 = 1
    }

    //duris juwap ushin random san
    const randomIndex = Math.floor(Math.random() * len);


    //qate juwaplar ushin random san
    const randomIndex2 = Math.floor(Math.random() * len);
    const randomIndex3 = Math.floor(Math.random() * len);

    
    //duris juwap ushin so'z
    const word = words[randomIndex];
    //qate juwaplar ushin so'zler
    const word2 = words[randomIndex2];
    const word3 = words[randomIndex3];

    //duris juwap arrayi
    let myArray = word.split(".");
    //qate juwap arrayi
    let myArray2 = word2.split(".");
    let myArray3 = word3.split(".");

    //sorawdi jaylastiriw
    document.getElementById('ques').innerHTML = myArray[0] + " ne?";
    document.getElementById('num').innerHTML = randomIndex + 1 + ". ";
    

    //variantlardi jaylastiriw
    document.getElementById(labeller[randomLabelCorrect]).innerHTML = myArray[1];
    document.getElementById(labeller[labelWrong1]).innerHTML = myArray2[1];
    document.getElementById(labeller[labelWrong2]).innerHTML = myArray3[1];


    f.checked = false;
    s.checked = false;
    t.checked = false;

    
    document.getElementById("ch").disabled = false;

    
  }

  async function checkAnswer(){
    const words = await asyncReadFile('./data/test.txt');

    //test.txt faylinda qansha so'z bar?
    const len = words.length;

    //radio tu'ymesheler
    const f = document.getElementById('f-option');
    const s = document.getElementById('s-option');
    const t = document.getElementById('t-option');

    //radio tuymeshelerdin' labelleri
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    let worddd = document.getElementById('num').innerHTML;

    //duris juwap arrayi
    let myyArray = worddd.split(".");
    let numOfQues = parseInt(myyArray[0]);

    let que = words[numOfQues - 1];

    let cArray = que.split(".");


    var correctAns = new Audio('./audio/interface-124464.mp3');
    var wrongAns = new Audio('./audio/wrong-answer-129254.mp3');

    if (f.checked == true && first.innerHTML == cArray[1]) {
      
      correctAns.play();
      c++;
    } else if (s.checked == true && second.innerHTML == cArray[1]) {
      correctAns.play();
      c++;
    } else if (t.checked == true && third.innerHTML == cArray[1]) {
      correctAns.play();
      c++;
    } else {
      wrongAns.play();
      w++;
    }
    document.getElementById('wrong').innerHTML = w
    document.getElementById('correct').innerHTML = c
    document.getElementById("ch").disabled = true;

  }
 
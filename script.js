/*----- constants -----*/
/*----- app's state (variables) -----*/

  var aud = document.getElementById("ASong").children[0];
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
    }
    isPlaying = !isPlaying;
  }

  
  let words = ["water", "software", "phone","candle","sliver","pikachu","menu","mug"]

  let maxGuess = 5
  



  let randomIndex = Math.floor(Math.random() * 5); // TODO: generate random number from 0 to arraylength
let secretWord = words[randomIndex]
console.log(secretWord)

let currentProgress = "-".repeat(secretWord.length)
/*----- cached element references -----*/

let aBtn = document.getElementById("aBtn")

/*----- event listeners -----*/
aBtn.addEventListener("click", function() {
  // a will show in the currentProgress
  let position = secretWord.indexOf("a")
  console.log(position)
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" a "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
bBtn.addEventListener("click", function() {
  
  let position = secretWord.indexOf("b")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" b "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
cBtn.addEventListener("click", function() {
  
  let position = secretWord.indexOf("c")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" c "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
dBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("d")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" d "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
eBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("e")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" e "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
fBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("f")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" f "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  gBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("g")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" g "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  console.log(position)
}  })
  hBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("h")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" h "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  console.log(position)
}  })
  iBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("i")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" i "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  jBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("j")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" j "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  kBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("k")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" k "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  lBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("l")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" l "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  mBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("m")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" m "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  nBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("n")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" n "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  oBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("o")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" o "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  pBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("p")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" p "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  qBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("q")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" q "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  rBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("r")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" r "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  sBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("s")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" s "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  tBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("t")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" t "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  uBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("u")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" u "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  vBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("v")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" v "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  wBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("w")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" w "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  xBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("x")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" x "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  yBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("y")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" y "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })
  zBtn.addEventListener("click", function() {
  let position = secretWord.indexOf("z")
  if (position === -1){
    numberOfGuessRemainig = numberOfGuessRemainig-1;
  } else{
    currentProgress= currentProgress.split("");
    currentProgress[position]=" z "
    
    currentProgress=currentProgress.join("")
    console.log(currentProgress)
  }  })

  letterButtons.forEach(function (button) {
    var x = document.getElementById("guess");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  })
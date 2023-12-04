let letters = document.getElementsByClassName("wordle-char");

let revealed = 0;
function Begin() {
  setTimeout(Reveal, 150);
}

function Reveal() {
  letters[revealed].classList.add("reveal"); 
  let temp = revealed;
  setTimeout(() => UpdateColor(temp, letters), 250);
  revealed += 1;
   
  if (revealed >= letters.length) return;
  
  Begin();  
  
}
  
function UpdateColor(rev, letters) {
  let rand = Math.floor(Math.random() * 3);
  letters[rev].classList.remove(["blank", "green", "yellow"]);

  if (rand === 0) {
      letters[rev].classList.add("green");      
  }
  else if (rand === 1) {
      letters[rev].classList.add("yellow");
  }
  else if (rand === 2) {
      letters[rev].classList.add("blank");
  }
} 

function Reset() {
  revealed = 0;
  Begin();
  for (let i = 0; i < letters.length; i++) {
      letters[i].classList.remove("reveal");
      letters[i].classList.remove("green");
      letters[i].classList.remove("yellow");
      letters[i].classList.remove("blank");
  }
}

Reset();

setInterval(Reset,4000);
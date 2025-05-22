

// Setting Game

let Title = "Guess The Word";
    document.title = Title;
    document.querySelector("footer").innerHTML = `${Title} And Let The World Happy`;


/**************** Input of Words *************/

// Rules

let Try1 = ["R", "A", "B", "B", "I", "T"];
let Try2 = ["M", "A", "N", "K", "E", "Y"]; 
let Try3 = ["P", "L", "A", "N", "E", "T"]; 
let Try4 = ["W", "I", "N", "T", "E", "R"]; 
let Try5 = ["O", "R", "A", "N", "G", "E"]; 
let Try6 = ["A", "G", "E", "N", "C", "Y"]; 

// Functions

function colorCorrect(inputBox, cnd) { // Color Green
             inputBox.style.cssText = `border-color: transparent;
                                       background-color: var(--green);
                                       color: var(--white);
                                       opacity: 0.6;
                                       `;
             inputBox.value = cnd;
             inputBox.disabled = true;
}
function colorWrongPlace(inputBox) { // Color Grey
         inputBox.style.cssText = `border-color: transparent;
                                   background-color: var(--grey);
                                   color: var(--white);
                                   `;
}
function colorWrong(inputBox) { // Color Red
         inputBox.style.cssText = `border-color: transparent;
                                   background-color: var(--red);
                                   color: var(--white);
                                   `;
}
function colorEmpty(inputBox, SIGN) { // Color Purple
         inputBox.style.cssText = `border-color: transparent;
                                   background-color: var(--footer-color);
                                   color: var(--white);
                                   `;
         inputBox.value = SIGN;
}




// Work

function tryAll(Try, startClass, starAg = -1, endAg = -1) {
    for(let i = 0; i < 6; i++) {
        //
        let inputBox = document.querySelectorAll(`.all-in-${startClass} input`)[i];
        //
        inputBox.onblur = () => {
           //
           let cnd = inputBox.value.toUpperCase();
           let cnD1 = Try.includes(cnd);
           let cnD2 = (Try.indexOf(cnd) === i);
           let cnD3 = (Try.indexOf(cnd) == starAg);
           let cnD4 = i == endAg;
           let SIGN = "?";
           let VIDE = "";
           //
           if((cnD1 && cnD2) || (cnD3 && cnD4)) {
                 colorCorrect(inputBox, cnd);
           } else if(cnD1) {
                 colorWrongPlace(inputBox);
           } else {
                 if(inputBox.value !== VIDE && inputBox.value != SIGN) {
                     colorWrong(inputBox);
                 } else {
                     colorEmpty(inputBox, SIGN);
                 } 
             }
        }
        //
        inputBox.addEventListener("keydown", (event) => {
           //
           let EnterPre = event.key === "Enter";
           let ArrowRpre = event.key === "ArrowRight";
           let ArrowLpre = event.key === "ArrowLeft";
           let NextBox = inputBox.nextElementSibling;
           let PreviousBox = inputBox.previousElementSibling;
           //
           if (EnterPre || ArrowRpre) {
               if(NextBox) {
                  NextBox.focus();
               } else {
                  inputBox.blur();
               }
           } else if (ArrowLpre) {
               if(PreviousBox) {
                  PreviousBox.focus();
               } else {
                  inputBox.blur();
               }
           }
        });
     }
}

// Execution

tryAll(Try1, 0, 2, 3);
tryAll(Try2, 1);
tryAll(Try3, 2);
tryAll(Try4, 3);
tryAll(Try5, 4);
tryAll(Try6, 5);


/**************** Hints *************/

// Rules
    let divv = document.createElement("div");
        let ac = divv.classList.add("show");
    let h3 = document.createElement("h3");
        let bc = document.createTextNode("Smart! Using help at the right time can be the secret to winning!");
        h3.appendChild(bc);
        divv.appendChild(h3);
        
   //     
   function Spans(let1, let2, let3, let4, let5, let6, Ele) {
   //
   let divSpa = document.createElement("div");
        let span1 = document.createElement(Ele);
           let span1bc = document.createTextNode(let1);
        let span2 = document.createElement(Ele);
           let span2bc = document.createTextNode(let2);
        let span3 = document.createElement(Ele);
           let span3bc = document.createTextNode(let3);
        let span4 = document.createElement(Ele);
           let span4bc = document.createTextNode(let4);
        let span5 = document.createElement(Ele);
           let span5bc = document.createTextNode(let5);
        let span6 = document.createElement(Ele);
           let span6bc = document.createTextNode(let6);
    //
    span1.appendChild(span1bc);   
    span2.appendChild(span2bc);  
    span3.appendChild(span3bc);
    span4.appendChild(span4bc);
    span5.appendChild(span5bc);
    span6.appendChild(span6bc);
    divSpa.appendChild(span1);
    divSpa.appendChild(span2);
    divSpa.appendChild(span3);
    divSpa.appendChild(span4);
    divSpa.appendChild(span5);
    divSpa.appendChild(span6);
    divv.appendChild(divSpa);   
   
   }
   
   
   Spans("R", "A", "B", "B", "I", "T", "p"); 
   Spans("M", "A", "N", "K", "E", "Y", "p"); 
   Spans("P", "L", "A", "N", "E", "T", "p");
   Spans("W", "I", "N", "T", "E", "R", "p");
   Spans("O", "R", "A", "N", "G", "E", "p");
   Spans("A", "G", "E", "N", "C", "Y", "p");
    
    
// 
let act = document.querySelector("#container .sub button");
act.onclick = () => {
        let alldiv = document.querySelector(".rulese");
        alldiv.appendChild(divv);
};

/**************** Check Words ****************/

//
let aq = document.querySelector("#container .sub input");
    aq.addEventListener ("click", () => {
        let afs = [];
        dontRepea( 0, Try1, afs);
        dontRepea( 1, Try2, afs);
        dontRepea( 2, Try3, afs);
        dontRepea( 3, Try4, afs);
        dontRepea( 4, Try5, afs);
        dontRepea( 5, Try6, afs);
        
        if(afs.includes(false)) {
            Anonnce(afs, "falseAnonnce", "BNLfalse", "Try again!", "Continue", true);
        } else {
            Anonnce(afs, "trueAnonnce", "BNLtrue", "Congratulation You Win!", "Reload Page");
        }
        
    });




// Functions

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}


function Hello(num) {
         let arrayd = [];
         for(let i = 0; i < 6; i++) {
             let az = document.querySelectorAll(`.Try .all-in-${num} input`)[i];   
             arrayd.push(az.value);
         }
         return arrayd;
}
    
function dontRepea( num, Try, pushs) {
        if(areArraysEqual(Hello(num), Try)) {
        pushs.push(true);
        } else pushs.push(false);
}

function spanColor(yourSpan, afs, i) {
       if(afs[i] === true) {
          yourSpan.style.setProperty("background-color", "rgb(95 207 95)");
            yourSpan.style.setProperty("color", "white");
       } else {
         yourSpan.style.setProperty("background-color", "rgb(245 58 58)");
            yourSpan.style.setProperty("color", "white");
       }
}

function Anonnce(afs, className, classBNL, yourMessage, CTA, Chose = false) {

let backStatus = document.createElement("span");            
let divzs = document.createElement("div");
    let divzs_ac = divzs.classList.add(className); // "New"  
let h3ds = document.createElement("h3");
        let h3bc = document.createTextNode(yourMessage); // "Try again!"
let divSpan = document.createElement("div");
let span_1 = document.createElement("span");
    let span_1s = document.createTextNode("Word 1");
let span_2 = document.createElement("span");
    let span_2s = document.createTextNode("Word 2");
let span_3 = document.createElement("span");
    let span_3s = document.createTextNode("Word 3");
let span_4 = document.createElement("span");
    let span_4s = document.createTextNode("Word 4");
let span_5 = document.createElement("span");
    let span_5s = document.createTextNode("Word 5");
let span_6 = document.createElement("span");
    let span_6s = document.createTextNode("Word 6");
let buttonq = document.createElement("button");
        let buttons = document.createTextNode(CTA); // "Continue"
        let buttons_ac = buttonq.classList.add(classBNL); // "BNL"  
        
        h3ds.appendChild(h3bc);
        divzs.appendChild(h3ds);
        
        span_1.appendChild(span_1s);
        span_2.appendChild(span_2s);
        span_3.appendChild(span_3s);
        span_4.appendChild(span_4s);
        span_5.appendChild(span_5s);
        span_6.appendChild(span_6s);

        divSpan.appendChild(span_1);
        divSpan.appendChild(span_2);
        divSpan.appendChild(span_3);
        divSpan.appendChild(span_4);
        divSpan.appendChild(span_5);
        divSpan.appendChild(span_6);
        
        divzs.appendChild(divSpan);

        buttonq.appendChild(buttons);
        
        divzs.appendChild(buttonq);
        document.body.append(backStatus);
        
        spanColor(span_1, afs, 0);
        spanColor(span_2, afs, 1);
        spanColor(span_3, afs, 2);
        spanColor(span_4, afs, 3);
        spanColor(span_5, afs, 4);
        spanColor(span_6, afs, 5);
          
        document.body.appendChild(divzs);
        
        if (Chose) {
              buttonq.addEventListener("click", () => {
                  backStatus.remove();
                  divzs.remove();
              });
        } else {
              buttonq.addEventListener("click", () => {
                  location.reload();       
              });
        }
                     
}


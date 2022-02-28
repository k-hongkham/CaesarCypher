let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

function caesarCypher(str, num) {
    let newStr = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ") {
                newStr+= str[i];
                continue;
            }
    let index =   alpha.indexOf(str[i]);      
    let nextIdx =  index + num;
            if (nextIdx > 26 ) nextIdx = nextIdx - 26;
            if (nextIdx < 1 ) nextIdx = nextIdx + 26;
        newStr += alpha[nextIdx];
         
        }
  let finalStr = newStr.toLowerCase();   
        return finalStr;       
    }



//     let newIdx = alpha.indexOf(str[i])+num;
//         if(newInx > 26) {
//          newIdx -= 26;
         
//         }
//         alpha[newIdx] 
//     if (str.length === " "){
//         newStr +=str[i];
//     }node caes
//     return newStr;
//     }
//     }

// caesarCypher(a, 2);
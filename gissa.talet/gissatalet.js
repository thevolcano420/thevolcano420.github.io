const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgisningar = 0;
console.log(`slumptal= ${slumptal}`);

function gissaTal(){
    
    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int =Number(textfelt_gissa);
    let vinn = false;
    let p_svar = document.getElementById("p_svar");

    if (antalgisningar < 3){
        if (slumptal === gissa_int){
            console.log(`RÄTT! antalgissningar= ${antalgisningar}`);
            vinn = true;
            var slumptal2 = slumptal + 1;
            p_svar.innerHTML= `RIGHT! About to be ` + slumptal2 + ` >:)`;
            antalgisningar = 3;
            
        }
        else {
            console.log(`FEL! antalgissningar= ${antalgisningar}`);
            
            if (antalgisningar === 2)
                p_svar.innerHTML=`HA! NOOOOB!`;
            else
                p_svar.innerHTML=`${textfelt_gissa} is WRONG! Guess nr ${antalgisningar+1} out of 3`;
            
            document.getElementById("gissa").value="";
            document.getElementById("gissa").focus();
            
        }
        antalgisningar++;
    }
    else{
        p_svar.innerHTML=`HA! NOOOOB!`;
    }
}
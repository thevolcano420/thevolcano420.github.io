//var variabel blir alltid globalt använd let 
let talet = 0;
// {
// var variabel1 = "var variabel"
// let variabel2 = "let variabel"

// }

// console.log(var variabel ${variabel1})
// console.log(let variabel ${variabel2})

function plusClick() {
    talet = talet + 1;
    console.log(`plus click= ${talet}`)
    document.getElementById("taltext").innerHTML = talet;
}

const minusknapp = document.getElementById("minusknapp");
minusknapp.addEventListener("click", minusClick);


function minusClick() {
    console.log(`typen av minus är = ${typeof (minusknapp)}`)
    talet--;
    console.log(`minus click= ${talet}`)
    document.getElementById("taltext").innerHTML = talet;
}
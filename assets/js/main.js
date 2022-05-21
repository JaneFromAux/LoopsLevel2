


console.log('Level2_1');

let imageArray = () => {
    let returnArray = [];
    console.log(returnArray);
    for (let i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push("image_00" + i + ".jpg");
        } else if (i < 100) {
            returnArray.push("image_0" + i + ".jpg");
        } else {
            returnArray.push("image_" + i + ".jpg");
        }
    } console.log(returnArray);
}

imageArray();

//Level2_2
let input = document.getElementById('inputLoop');
let output = document.getElementById('output');
let arr = [];
let loop = () => {
    console.log("loop loops");
    let inputty = Number(input.value);
    if (inputty == 0) {
        output.innerHTML = "Lp";
    } else {
        for (let o = 1; o <= inputty; o++) {
            arr.push("o");
        }
        output.innerHTML = ` L${arr.join("")}p`;
        arr = [];
    }
}

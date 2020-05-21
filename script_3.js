function generatePyramid() {

    var totalNumberofRows = prompt("How many stages will be in your pyramid?");
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += '#' + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();
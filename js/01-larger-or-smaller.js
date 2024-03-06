let x = parseInt(prompt("What number is x?"));

let y = parseInt(prompt("What number is y?"));

if (x > y) {
    document.write(x);
} else if (y > x) {
    document.write(y);
} else {
    document.write("x and y are equal! Please try again entering two different values.");
};

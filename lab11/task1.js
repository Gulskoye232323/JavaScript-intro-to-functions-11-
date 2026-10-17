function rectangleArea(width, height) {
    return width * height;
}

console.log("Function declaration:");
console.log(rectangleArea(5, 10));


const rectangleArea2 = function(width, height) {
    return width * height;
};

console.log("Function expression:");
console.log(rectangleArea2(5, 10));


const rectangleArea3 = (width, height) => {
    return width * height;
};

console.log("Arrow function:");
console.log(rectangleArea3(5, 10));
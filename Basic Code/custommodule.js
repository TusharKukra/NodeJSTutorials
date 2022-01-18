const findAvg = (a,b,c) => {
    console.log("finding average");
    return (a+b+c)/3;
};

// now to export this module to any other js file, use :
module.exports = findAvg;
class Course {
    constructor(location, par) {
        this.location = location;
        this.par = par;
        this.holes = [];
    }
    show() {
        console.log("Location: "+ this.location + " , par: " + this.par);
    }
}

class Hole {
    constructor(hole) {
        this.hole = hole;
    }
    show() {
        console.log(this.hole);
    }
}

const coursesData = [
    {location: "Ryhaven Skanderborg", 
    totalPar: 61, 
    holes: [
        {number: 1, par: 3, length: 69}, 
        {number: 2, par: 3, length: 70},
        {number: 3, par: 3, length: 65},
        {number: 4, par: 4, length: 134},
        {number: 5, par: 3, length: 87},
        {number: 6, par: 5, length: 179},
        {number: 7, par: 4, length: 127},
        {number: 8, par: 3, length: 59},
        {number: 9, par: 3, length: 85},
        {number: 10, par: 3, length: 76},
        {number: 11, par: 3, length: 75},
        {number: 12, par: 3, length: 63},
        {number: 13, par: 4, length: 119},
        {number: 14, par: 3, length: 73},
        {number: 15, par: 3, length: 84},
        {number: 16, par: 3, length: 58},
        {number: 17, par: 4, length: 145},
        {number: 18, par: 4, length: 132}
    ]},
    {location: "Tilst Park", 
    totalPar: 65,
    holes: [
        {number: 1, par: 3, length: 73}, 
        {number: 2, par: 3, length: 84},
        {number: 3, par: 3, length: 76},
        {number: 4, par: 4, length: 154},
        {number: 5, par: 3, length: 47},
        {number: 6, par: 4, length: 190},
        {number: 7, par: 3, length: 63},
        {number: 8, par: 3, length: 74},
        {number: 9, par: 3, length: 56},
        {number: 10, par: 3, length: 64},
        {number: 11, par: 4, length: 103},
        {number: 12, par: 4, length: 172},
        {number: 13, par: 3, length: 122},
        {number: 14, par: 3, length: 65},
        {number: 15, par: 4, length: 128},
        {number: 16, par: 3, length: 105},
        {number: 17, par: 4, length: 147},
        {number: 18, par: 3, length: 75}
    ]}
];

coursesData.forEach(data => {
    const course = new Course(data.location, data.totalPar);
    const hole = new Hole(data.holes);
    course.show();
    hole.show();
});

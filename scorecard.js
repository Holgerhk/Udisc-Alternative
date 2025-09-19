class Course {
    constructor(location, par) {
        this.location = location;
        this.par = par;
    }
    show() {
        console.log("Location: "+ this.location + " , par: " + this.par);
    }
}

const courses = [
    {location: "Ryhaven Skanderborg", par: 61, id: "first", holes: [{number: 1, par: 3, length: 105}, {number: 2, par: 3, length: 105}]},
    {location: "Tilst Park", par: 65, id: "second"}
];

const holes = [
    {id: "first", hole1: 3, hole2: 4, hole3: 5},
    second = {hole1: 4, hole2: 5, hole3: 3}
];

courses.forEach(data => {
    const course = new Course(data.location, data.par);
    course.show();
});

console.log(holes[1]);

function test(courses, holes) {
    if (courses[0].id == holes[0].id) {
        console.log("yes!");
        
    }
}
test(courses, holes);
console.log("fsjofodf");

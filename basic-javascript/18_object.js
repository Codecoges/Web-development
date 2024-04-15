// destructuring
const course = {
    courseName:"js in english",
    courseInstructure:"Ankit",
    price:"$999"
}

const {courseInstructure:instructor} = course;
console.log(instructor);
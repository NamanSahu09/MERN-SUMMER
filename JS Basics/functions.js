const students = [
  {
    name: "Abhishek",
    course: "Full Stack Development",
    marks: [22, 19, 25, 30, 27]
  },
  {
    name: "Satyarth",
    course: "Full Stack Development",
    marks: [2, 1, 7, 1, 0]
  },
  {
    name: "Rohit",
    course: "Full Stack Development",
    marks: [2, 5, 2, 1, 3]
  },
  {
    name: "Naman",
    course: "Full Stack Development",
    marks: [28, 26, 27, 29, 28]
  },
  {
    name: "Adnan",
    course: "Full Stack Development",
    marks: [15, 12, 18, 16, 14]
  },
  {
    name: "Kiran",
    course: "Full Stack Development",
    marks: [24, 25, 26, 27, 28]
  }
];

// Problem Statement: Convert the given objects in array in the below format. Max marks is 150.
// If the percentage is above 60 then result status is pass otherwise fail.

const formattedStudents = students.map(student => {
  // Calculate karenge total marks ko thik
  const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
  // Calculate karenge percentage (total marks out of max marks 150)
  const percentage = parseFloat(((totalMarks / 150) * 100).toFixed(2));
  const resultStatus = percentage > 60 ? "Pass" : "Fail";

  return {
    ...student,
    totalMarks,
    percentage,
    resultStatus
  };
});

//console.log("Formatted Students Array:\n", formattedStudents);


//Pass hone wale students ko filter kar raha
const passedStudents = formattedStudents.filter(student => student.resultStatus === "Pass");
console.log("\nPassed Students:\n", passedStudents);

//Top-performing students ko filter karna 
const topStudents = formattedStudents.filter(student => student.percentage > 85);
console.log("\nTop Students (Percentage > 80%):\n", topStudents);


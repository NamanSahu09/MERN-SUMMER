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
const topStudents = formattedStudents.filter(student => student.percentage > 90);
console.log("\nTop Students (Percentage > 90%):\n", topStudents);




//Customer wala question 
const orders = 
[
  {
    orderId: "ORD101",
    customerName: "Aman",
    city: "Delhi",
    paymentStatus: "Paid",
    items: [
      { 
        product: "Laptop", category: "Electronics", price: 55000, quantity: 1, discount: 10 
      },
      { 
        product: "Mouse", category: "Electronics", price: 800, quantity: 2, discount: 5 
      }
    ]
  },
  {
    orderId: "ORD102",
    customerName: "Priya",
    city: "Mumbai",
    paymentStatus: "Pending",
    items: [
      {
         product: "Shoes", category: "Fashion", price: 2500, quantity: 2, discount: 20 
      },
      { 
        product: "T-Shirt", category: "Fashion", price: 900, quantity: 3, discount: 10
      }
    ]
  },
  {
    orderId: "ORD103",
    customerName: "Rohit",
    city: "Delhi",
    paymentStatus: "Paid",
    items: [
      { product: "Mobile", category: "Electronics", price: 30000, quantity: 1, discount: 15 },
      { product: "Headphones", category: "Electronics", price: 2000, quantity: 2, discount: 10 }
    ]
  },
  {
    orderId: "ORD104",
    customerName: "Anjali",
    city: "Bangalore",
    paymentStatus: "Failed",
    items: [
      { product: "Book", category: "Education", price: 600, quantity: 4, discount: 0 },
      { product: "Pen Drive", category: "Electronics", price: 1200, quantity: 1, discount: 5 }
    ]
  }
];

const report = orders.map(order => {
  const totals = order.items.reduce((acc, item) => {
    const gross = item.price * item.quantity;
    const discount = (gross * item.discount) / 100;
    return {
      totalItems: acc.totalItems + item.quantity,
      grossAmount: acc.grossAmount + gross,
      totalDiscount: acc.totalDiscount + discount
    };
  }, { totalItems: 0, grossAmount: 0, totalDiscount: 0 });

  const netAmount = totals.grossAmount - totals.totalDiscount;

  let orderStatus = "Failed";
  if (order.paymentStatus === "Paid") {
    orderStatus = "Successful";
  } else if (order.paymentStatus === "Pending") {
    orderStatus = "Processing";
  }

  const rewardPoints = order.paymentStatus === "Paid" ? Math.floor(netAmount / 100) : 0;

  return {
    orderId: order.orderId,
    customerName: order.customerName,
    city: order.city,
    paymentStatus: order.paymentStatus,
    totalItems: totals.totalItems,
    grossAmount: totals.grossAmount,
    totalDiscount: totals.totalDiscount,
    netAmount: netAmount,
    orderStatus: orderStatus,
    rewardPoints: rewardPoints
  };
});

console.log(report);
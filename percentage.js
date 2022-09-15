function calculatepercentage(subject1,subject2,subject3,subject4,outof){
let sum = subject1+subject2+subject3+subject4;
let percentage = (sum/outof)*100;
console.log(percentage)
}

calculatepercentage(50,80,70,90,400);
calculatepercentage(70,70,70,70,400);
calculatepercentage(55,80,75,90,400);
calculatepercentage(65,80,70,95,400);

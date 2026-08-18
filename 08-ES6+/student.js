// // student.js// Create:// createStudent()// calculateGrade()
// createStudent() should accept: // name// age// course
// and return:
// {
//     name,
//     age,
//     course
// }
// calculateGrade() should accept marks and return:
// 90+ → A
// 75–89 → B
// 60–74 → C
// 35–59 → D
// Below 35 → F
export const createStudent = (name, age, course) => {
    return {
        name,
        age,
        course
    };
};

export const calculateGrade = (marks) =>
{
    if (marks >=90){
        return `A`;
    }
    else if (marks >=75){
        return `B`;
    }
    else if (marks >=60){
        return `C`;
    }
    else if (marks >=35){
        return `D`;
    }
    else{
        return `Fail`;
    }
};

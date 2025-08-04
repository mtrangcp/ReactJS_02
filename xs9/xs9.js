const student = {
  name: "Dev",
  age: 20,
  listMonHoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};

const xepLoai = (avg) => {
  if (avg >= 8.5) return "Học sinh giỏi";
  else if (avg >= 7) return "Học sinh khá";
  else if (avg >= 5) return "Học sinh trung bình";
  else return "Học sinh yếu";
};

const best = (arr) => {
  let max = arr[0];
  arr.forEach((el) => {
    if (el.score > max.score) {
      max = el;
    }
  });
  return max;
};

const weak = (arr) => {
  let min = arr[0];
  arr.forEach((el) => {
    if (el.score < min.score) {
      min = el;
    }
  });
  return min;
};

const getStudentSummary = (student) => {
  let arrScoreObj = student.listMonHoc;
  let avg =
    arrScoreObj.map((el) => el.score).reduce((sum, value) => sum + value, 0) /
    student.listMonHoc.length;

  let objBest = best(arrScoreObj);
  let objWeak = weak(arrScoreObj);

  return `
        ${student.name} is ${student.age} years old.
        Average score: ${avg} -> ${xepLoai(avg)}
        Best subject: ${objBest.subject} (${objBest.score})
        Weakest subject: ${objWeak.subject} (${objWeak.score})
        `;
};

console.log(getStudentSummary(student));

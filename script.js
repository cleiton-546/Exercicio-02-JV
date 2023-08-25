const students = [
  {
    name: "John",
    noteOne: 9,
    noteTwo: 8,
  },
  {
    name: "Lisa",
    noteOne: 5,
    noteTwo: 6,
  },
  {
    name: "Duart",
    noteOne: 10,
    noteTwo: 7,
  },
  {
    name: "Ema",
    noteOne: 4,
    noteTwo: 1,
  },
  {
    name: "Carl",
    noteOne: 6,
    noteTwo: 6,
  },
];

function average(noteOne, noteTwo) {
  return ((noteOne + noteTwo) / 2).toFixed(2);
}

function printStudent(student) {
  const studentAverage = average(student.noteOne, student.noteTwo);

  let message = `A média do(a) aluno(a) ${student.name} é: ${studentAverage}. ` ;

  if (studentAverage >= 7) {
    message += ` \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso.`;
  } else {
    message += `\n Não foi dessa vez, ${student.name}! Tente novamente!`;
  }

  alert(message);
}

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  printStudent(student);
}

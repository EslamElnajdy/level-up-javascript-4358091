// Write your code here
function getStudents(classRoom) {
  let {hasTeachingAssistant, clasList} = classRoom;
  let teacher, teachingAssistant, students;
  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = clasList;
  } else {
     [teacher, ...students] = clasList;
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: true,
  clasList: ['eslam', 'ahmed', 'mohamed', 'eman', 'nour'],
}));

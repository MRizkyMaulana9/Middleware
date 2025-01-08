const dataStudent = ["Adi", "Fahmi", "Teddi", "Doni"];

const getUser = () => {
  return dataStudent;
};

const getUserByIndex = (index) => {
  if (index <= dataStudent.length) {
    return dataStudent[index - 1];
  }
  return "Student Not Found";
};

module.exports = { getUser, getUserByIndex };

import axios from "axios";

const res = async () => {
  const res = await axios("https://wilimbackend.tk/userGoalElementAPI/ctfInfo");
  const goalNames = [];
  for (let i = 0; i < res.data.length; i++) {
    goalNames.push(res.data[i].name);
  }
  return goalNames;
};

export default res;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res)=>{
  res.send("Include /bfhl in the url");
})

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const user_id = "kunal_nigam_28122003";
  const email = "kn4056@srmist.edu.in";
  const roll_number = "RA2111029010011";

  let numbers = [];
  let alphabets = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
    }
  });

  alphabets.sort((a, b) =>
    b.localeCompare(a, undefined, { sensitivity: "base" })
  );
  const highest_alphabet = alphabets.length > 0 ? [alphabets[0]] : [];

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
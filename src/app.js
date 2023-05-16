const express = require("express")
const cookie = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookie());


app.post("/", (req, res)=>{
  
  const data = [
    {
      uz : "salom",
      ru : "привет",
      time: "2",
      skills : ["javascript", "go", "java"],
    },
    {
      uz : "salom",
      ru : "привет",
      time: "4",
      skills : ["flutter", "c++", "c#"],
    },
    {
      uz : "salom",
      ru : "привет",
      time: "3",
      skills : ["ph", "phayton", "rubby"],
    },
    {
      uz : "salom",
      ru : "привет",
      time: "1",
      skills : ["delphi", "pascal", "java"],
    }
  ];

  const filterData = (data) =>{
    const {str } = req.query;
    const { from, to } = req.query;
    const {str1, str2, str3} = req.query;
    
    if (str){
      const arr =  data.filter(data => data.uz.includes(str) || data.ru.includes(str));
      res.status(200).json(arr)
    };
    if(from, to){
      const arr = data.filter(data => data.time > from && data.time < to);
      console.log(arr);
    };
    if(str1, str2, str3){
      const arr = data.filter( (data) =>  {
        return data.skills.includes(str1) && data.skills.includes(str2) && data.skills.includes(str3);
      })
      console.log(arr);
    }
  }
  filterData(data)
})

app.listen(3030, ()=>{
  console.log(3030);
});


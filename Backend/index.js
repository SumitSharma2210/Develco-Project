import express from "express";
import http from "http";
import cors from "cors";
const app = express();
import mongoose from "mongoose";


main().then(() => {
  console.log("Connection successful");
})
.catch((err) => console.log(err));

 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/develco');
}



const port = 4500 || process.env.PORT;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Develco");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

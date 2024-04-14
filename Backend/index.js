import express from "express";
import http from "http";
import cors from "cors";
const app = express();

const port = 4500 || process.env.PORT;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Develco");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

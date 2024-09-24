const express = require("express");
const app = express();

//CRIAÇÃO DA PORTA
const PORT = 3333;

//CRIAÇÃO DA ROTA HOMEPAGE
app.get("/", (req, res) => {
  res.send("Olá, página inicial!");
});
//ESCUTANDO UMA PORTA DO SERVIDOR
app.listen(PORT, function () {
  console.log("ESCUTANDO A PORTA" + PORT);
});

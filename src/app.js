const express = require("express");
const app = express();
const port = 3005;

app.listen(port, () => {
  console.log("App listening on port: " + port);
});

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

data = {
  'integrantes': [
    { 'nome': 'Riskala Tedoldi' },
    { 'nome': 'Leonardo Peron' },
    { 'nome': 'Willian Scheuermann' }
  ]
}

app.get('/integrantes', (req, res) => {
  res.json(data)
})
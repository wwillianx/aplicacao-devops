data = {'integrantes':[
  {'nome':'Riskala Tedoldi'},
  {'nome':'Leonardo Peron'},
  {'nome':'Willian Scheuermann'}
  ]}
  app.get('/integrantes', (req, res) => {
  res.json(data)
  })
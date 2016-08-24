const Express = require("express")
const app = Express()
const port = 5000

app.get("/:operator/:fnum/:lnum", function(req, res){
  let answer
  let operator = ['add', 'sub', 'mult', 'div']
  if (req.params.operator === operator[0]){
    answer = (Number(req.params.fnum) + Number(req.params.lnum)).toString()
  } else if (req.params.operator === operator[1]){
    answer = (Number(req.params.fnum) - Number(req.params.lnum)).toString()
  } else if (req.params.operator === operator[2]){
    answer = (Number(req.params.fnum) * Number(req.params.lnum)).toString()
  } else if (req.params.operator === operator[3]){
    answer = (Number(req.params.fnum) / Number(req.params.lnum)).toString()
  } else {
    answer = "Not a valid operator. Try again with one of the following: " + operator.join(", ")
  }
  res.send(answer)
})

app.get("/", function(request, response){
  response.send("Hi there! Welcome to Express Calculator")
})

app.listen(port, function(){
  console.log ('Listening on port ' + port)
})

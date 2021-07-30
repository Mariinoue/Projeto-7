const { request, response } = require("express")
const express=require("express")
const app=express()

const estados=require("./data/estados-cidades.json")

app.get("/",(request,response)=>{
    response.status(200).send("Estados brasileiros")
})

app.get("/estados",(request,response)=>{
    response.status(200).send(estados)
})

app.get("/estados/todos",(request,response)=>{

    const siglaRequisitada=request.query.sigla.toUpperCase()
    console.log(siglaRequisitada);
    response.status(200).send(estados.find(estado=>estado.sigla==siglaRequisitada))
})


app.get("/estados/:sigla",(request,response)=>{
    const siglaRequisitada=request.params.sigla.toUpperCase()
    console.log(siglaRequisitada);

    response.status(200).send(estados.find(estado=>estado.sigla==siglaRequisitada))
})


app.listen(3000, ()=>{
    console.log("Servidor sendo rodado na porta 3000");
})
const express = require("express");
const app = express();
app.get('/', function (request,response) {
    console.log('RECIBIMOS UNA PETICION')
})
app.get ('/perfil/:Id', function (req,res) {
let {id}=req.params;
let UsuariosFil=usuarios.filter((usuarios)=>usuarios.profesion)
})
app.get ('/usuarios', function (req,res){
    console.log(req.query)
    const {profesion} = req.query;
    console.log(profesion);
    let UsuFil = usuarios.filter((usuarios) =>{
        return usuarios.profesion === profesion
    })
    res.json(UsuFil);
})

app.listen(3000, ()=>{
    console.log('SERVIDOR CORRIENDO')
})
let usuarios = [
    {id:1, nombre:'pedro',apellido:'nose',profesion:'programador'},
    {id:2, nombre:'rodrigo',apellido:'lopez',profesion:'programador'},
    {id:3, nombre:'mario',apellido:'gomez',profesion:'programador'},
    {id:4, nombre:'jose',apellido:'perez',profesion:'portero'},
    {id:5, nombre:'kos',apellido:'monte',profesion:'portero'},
    {id:6, nombre:'corto',apellido:'largo',profesion:'portero'},
    {id:7, nombre:'julio',apellido:'velasquez',profesion:'policia'},
    {id:8, nombre:'nombre',apellido:'apellido',profesion:'policia'},
    {id:9, nombre:'cualquier',apellido:'texto',profesion:'policia'},
]

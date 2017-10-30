var User = require('../models/user.js');

//Obtener Todos los Usuarios
exports.lista_usuarios = function (req, res){
    res.json({name: hola}).send("Mensaje Please 2");
}

//Obtener Usuarios de un Curso
exports.lista_usuarios_curso = function (req, res){
    res.send("Mensaje 3");
}

// Añadir Nuevo Usuario
exports.add_user = function (req, res){
    res.send("Add User");
}



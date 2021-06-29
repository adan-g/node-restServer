const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, edad} = req.query;

    res.json({
        msg: 'get API - controllador',
        q, edad
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controllador',
        nombre, edad
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params; 

    res.json({
        msg: 'put API - controllador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controllador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controllador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}
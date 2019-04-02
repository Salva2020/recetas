const express = require('express');
var router = express.Router();
const modelo = require('../modelos/modeloRecetas');


router.get('/nuevaReceta', (req, res)=>{
	res.render('nuevaReceta');
});

router.get('/eliminaReceta', (req, res)=>{
	res.render('eliminaReceta');
});

router.post('/nuevaReceta', (req, res)=>{
	/*let receta = {
		nombre: req.body.nombre,
		desc: req.body.descripcion
	}*/
	modelo.nuevaReceta(req.body,(error, resultado)=>res.redirect('/nuevaReceta'));
});

router.get('/consultaReceta/:id', (req, res)=>{
	modelo.consultaReceta(req.params.id, (error, resultado)=>res.render('recetario', {registros: resultado}));
});

router.delete('/eliminaReceta/eliminar', (req, res)=>{
	modelo.eliminarReceta(req.body.nombre, (error, resultado)=>{res.render('eliminaReceta', {mensaje: "Se eliminaron las recetas cuyo nombre incluía el texto: " + req.body.nombre})});
})

router.get('/actualizaReceta', (req, res)=>{
		modelo.todasRecetas((error, resultado)=>{
			if(!req.query.nombresRecetas){
			res.render('actualizarReceta', {registros: resultado})
			}
			else{
				modelo.consultaRecetas(req.query.nombresRecetas, (error2, resultado2)=>{
					res.render('actualizarReceta', {registros: resultado, registros2:resultado2})
				})
			}
		});
});

router.put('/actualizaReceta/actualizar', (req, res)=>{
	modelo.updateReceta(req.body, (error, resultado)=>{res.redirect("/actualizaReceta")});
})

module.exports = router;
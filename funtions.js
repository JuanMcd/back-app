import { pool } from "./db.js";

export const getAll = (req, res) => {
  pool.query('select * from alerts')
  .then((data) => {
    const info = data[0]
    res.json({
      data: info
    })
  })
  .catch(error => {
    res.status(404).json({
      error,
      message: "Error al obtener la informacion de las categorias"
    })
  })
}

export const postNewInfo = (req, res) => { 
  const { body } = req
  res.json({
    message: 'Informacion para insertar',
    body
  })
  // pool.query(`
  //   insert into alerts () 
  //   values ();
  // `)
  // .then(data => {
  //   const info = data[0]
  //   res.json({
  //     data: info
  //   })
  // })
  // .catch(e => {
  //   res.status(404).json({
  //     error: e,
  //     message: "Error al obtener la informacion de las categorias"
  //   })
  // })
}

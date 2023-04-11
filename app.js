require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estatico
app.use( express.static( 'public' ) );

app.get('/', ( req, res ) => {
  res.render('home', {
    nombre: 'Francisco',
    title: 'Curso de node'
  });
})

app.get('/generic', ( req, res ) => {
  res.render('generic', {
    nombre: 'Francisco',
    title: 'Curso de node'   
  })
  // res.sendfile( __dirname + '/public/generic.html' );
})

app.get('/elements', ( req, res ) => {
  res.render('elements', {
    nombre: 'Francisco',
    title: 'Curso de node'   
  })
  // res.sendfile( __dirname + '/public/elements.html' );
})

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html' );
})

app.listen( port, () => {
  console.log(`app listening in port: ${ process.env.PORT }`);
} )

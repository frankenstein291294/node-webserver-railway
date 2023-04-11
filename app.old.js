
const http = require('http');

http.createServer( ( req, res ) => {

  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead( 200, { 'Content-Type': 'application/csv' } );

  const data = {
    perro: 'del mal',
    data: 'estamos aqui'
  };

  // res.write( JSON.stringify( data ) );

  /* res.write( 'id, nombre\n' ); */
  /* res.write( '1, Franciso\n' ); */
  /* res.write( '2, Javier\n' ); */
  /* res.write( '3, Nancy\n' ); */
  /* res.write( '4, Morales\n' ); */

  res.write( 'hello world' );

  res.end();

} )
.listen( 8080 );

console.log(' listen in port 8080 ');

import React, {Fragment, useState, useEffect} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Clima from './Clima';
import Error from './Error';
import '../index.css';

const AppContainer = () => {

   // State del componente principal
   const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if(consultar){

        const appId = 'd937ac867e384963e46a254c235b1ce7';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        guardarResultado(resultado);
        guardarConsultar(false)

        // Detecta si hubo resultados correctos en la consulta
        if( resultado.cod === '404'){
          guardarError(true)
        }else{
          guardarError(false)
        }
      }
    }
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if(error){
    componente = <Error mensaje='No hay resultados' className='red darken-4 error' />
  }else{
    componente= <Clima 
                  resultado={resultado}
                />
  }

 

  return ( 
    <Fragment>
      <Header 
        title='This is the header'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className='col m6 s12'>
             {componente}
            </div>      
          </div>
        </div>
      </div>
    </Fragment> 
    );
}
 
export default AppContainer;
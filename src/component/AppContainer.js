import React, {Fragment, useState, useEffect} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import '../index.css';

const AppContainer = () => {

   // State del componente principal
   const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if(consultar){

        const appId = 'd937ac867e384963e46a254c235b1ce7';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        console.log(resultado);
      }
      

     
    }
    consultarAPI();
  }, [consultar]);

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
              2
            </div>      
          </div>
        </div>
      </div>
    </Fragment> 
    );
}
 
export default AppContainer;
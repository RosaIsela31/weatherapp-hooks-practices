import React, {Fragment} from 'react';
import Header from './Header';
import '../index.css';

const AppContainer = () => {
  return ( 
    <Fragment>
      <Header 
        title='This is the header'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              1
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
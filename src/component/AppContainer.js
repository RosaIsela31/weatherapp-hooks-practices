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

      </div>
    </Fragment> 
    );
}
 
export default AppContainer;
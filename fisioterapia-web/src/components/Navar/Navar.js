import React from 'react';
import './Navar.css';
 import logo from '../assets/logo-black.png';
// import ligth from '../night.png'
import searchLogo from '../assets/search-w.png';
function Navar ({theme, setTheme}){
    const toggle_mode =  ()=> {
        theme== 'light' ?  setTheme('dark'): setTheme('light');
    }
    return( 
 <div  className="Navar">
   
<img  src={logo} alt="" className="logo"/>
<ul>  
    <li> Inicio </li>
    <li> Servicio </li>
    <li> sobre nosotros</li>
    <li> agrendar cita</li>

</ul>
 <div className="search-box"> 
<input type="text" className="form-control" placeholder="Buscar"/>
<img src={searchLogo}  alt=''/>

 </div>
{/* <img src={ligth} alt='' className='targe-icon'/> */}
</div>
);
}

export {Navar}
import React, { Fragment, useState, useEffect } from "react";
import styled from '@emotion/styled'

import Menu from "./components/Menu";
import ResultadoPrincipal from "./components/ResultadoPrincipal";
import ResultadoSecundario from "./components/ResultadoSecundario";
import Error from "./components/Error";
import Inicio from "./components/Inicio";


const Contenedor = styled.div`
background-color: #100E1D;
  display: flex;
  width: 100%;
  min-height: 100vh;
  transition : all ease .4s;
  @media (max-width:768px){
    flex-direction: column;
  }
  
`

function App() {

  const [busqueda, guardarBusqueda] = useState({
    cuidad: ''
  }) 

  const [consultar, guardarConsulta] = useState(false)

  const [clima, guardarClima] = useState([]);

  const [error, guardarError] = useState(false);

  const [menu, mostrarMenu] = useState(true);

  const [inicio, mostrarInicio] = useState(true);

  const [resultado, guardarResultado] = useState([{}])

  const {cuidad} = busqueda;

  useEffect(()=>{
    const consultarApi = async ()=>{
    if(consultar){

        const url =`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${cuidad}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado)
        guardarResultado(resultado)
        guardarConsulta(false)

        if(Object.keys(resultado).length === 0){
          guardarError(true)
          mostrarInicio(false)
          mostrarMenu(false)
        }else{
          guardarError(false)
        }
        return;
    }
    }
    consultarApi()
  },[consultar])


  let componente;
  if(error){
    componente = <Error mostrarMenu ={mostrarMenu} mensaje ='No se encontro el resultado' />
  }else{
    componente = <Contenedor><ResultadoPrincipal  mostrarMenu ={mostrarMenu} resultado={resultado} clima ={clima}/><ResultadoSecundario mostrarMenu ={mostrarMenu} resultado={resultado} clima={clima}/></Contenedor>
  }
 

  return (

    <Fragment>
      {componente}
      {menu ?<Menu 
        busqueda = {busqueda}
        guardarBusqueda= {guardarBusqueda}
        guardarConsulta={guardarConsulta}
        mostrarMenu ={mostrarMenu}
        mostrarInicio={mostrarInicio}
        resultado={resultado}
        guardarClima={guardarClima}
      /> :null}
      {inicio ?<Inicio 
        mostrarMenu ={mostrarMenu}
      />:null}
      
    </Fragment>

  );
}

export default App;

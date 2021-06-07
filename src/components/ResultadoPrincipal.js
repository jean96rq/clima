import React from 'react'
import styled from '@emotion/styled'



const MenuContenedor = styled.div`
background-image: url(../images/Cloud-background.png),-webkit-linear-gradient(top left,#1E213A 0,#1E213A 40%,#1E213A);
background-repeat:no-repeat;
background-size: 300px, 100% 100%;
min-height: 100vh;
width: 35%;
max-width: 459px;
display: flex;
align-items: flex-start;
flex-direction: column;
@media (max-width:950px){
   width: 100%;
   max-width: 100%;
   height: 100%;
  }
`;

const ContenedorButtons = styled.div`
width: 90%;
margin: 0 auto;
margin-top: 20px;
text-align: center;
h5{
    font-size: 35px;
    color: #6E707A;
}
h6{
    font-size: 15px;
    color: #6E707A;
    font-weight: 400;
}

.material-icons {
    color: #6E707A;
    font-size: 16px;
}
p{
    font-size: 20px;
    color: #6E707A;
}
`
const Img = styled.img`
width: 221px;
height: 206px;
`
const Boton = styled.button`
background: #6E707A;
color: #E7E7EB;
font-size: 16px;
border: none;
outline: none;
cursor: pointer;
padding: 12px 20px;
float: left;

@media (max-width:950px){
   float: right;
  }
`
const H1 = styled.h1`

font-size: 100px;
font-family: 'Raleway', sans-serif;
font-style: normal;
color: #E7E7EB;
font-weight: 400;
span{
    color: #6E707A;
    font-size: 40px;
    font-weight: 500;
}
`



const ResultadoPrincipal = ({ mostrarMenu, resultado, clima }) => {
    const cerrarMenu = () => {
        mostrarMenu(true)
    }

    const { parent, consolidated_weather, title } = clima;


    if (!parent) return null;

    const imagen = `https://www.metaweather.com/static/img/weather/png/${consolidated_weather[0].weather_state_abbr}.png`

    return (
        <MenuContenedor className="animate__animated animate__fadeIn">
            <ContenedorButtons>
                <Boton onClick={cerrarMenu}>Buscar otro clima</Boton>
            </ContenedorButtons>
            <ContenedorButtons>
                <Img className="animate__animated animate__fadeIn" src={imagen} />
                <H1 className="animate__animated animate__fadeIn">{consolidated_weather[0].the_temp.toFixed(2)}<span>°C</span></H1>
                <h5 className="animate__animated animate__fadeIn">{consolidated_weather[0].weather_state_name}</h5>
                <h6 className="animate__animated animate__fadeIn">{consolidated_weather[0].applicable_date}</h6>
                <p className="animate__animated animate__fadeIn">
                    <span className="material-icons ">fmd_good
                    </span>{title}, {parent.title}</p>
            </ContenedorButtons>
        </MenuContenedor>
    )
}

export default ResultadoPrincipal

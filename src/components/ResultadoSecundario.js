import React from 'react'
import styled from '@emotion/styled'

const MenuContenedor = styled.div`
min-height: 100vh;
width: 65%;
max-width: 981px;
display: flex;
align-items: flex-start;
flex-direction: column;
margin: 0 auto;
@media (max-width:768px){
   width: 90%;
  }
`;

const ContenedorButtons = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
h2{
    font-size: 28px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    color: #E7E7EB;
    margin-bottom: 0;
}
`;

const ContenedorCuadros = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
text-align: center;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 26px;
grid-auto-rows: minmax(auto, 177px);

@media (max-width:950px){
   width: 85%;
   grid-template-columns: repeat(3, 1fr);
   grid-auto-rows: minmax(auto, auto);
  }
@media (max-width:778px){
   width: 85%;
   grid-template-columns: repeat(2, 1fr);
   grid-auto-rows: minmax(auto, 177px);
  }
`;
const ContenedorCuadrosGrandes = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
text-align: center;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 48px;

/* grid-template-rows: 190px 130px; */
@media (max-width:778px){
   width: 85%;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: auto auto;
  }
@media (max-width:590px){
   width: 85%;
   grid-template-columns: repeat(1, 1fr);
  }
`;

const ContenedorParrafo = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
text-align: center;
color: #A09FB1;
a{
    color: #A09FB1;
}
`


const Cuadro = styled.div`
background-color: #1E213A;
h3{
    color: #A09FB1;
    height: 50px;
    margin-bottom:0;
}
p{
    margin-top: 5px;
    color: #E7E7EB;
}
span{
    
    color: #A09FB1;
    font-size: 13px;
}
`;
const CuadroGrande = styled.div`
background-color: #1E213A;
h3{
    color: #E7E7EB;
    font-size: 45px;
    margin-top: 5px;
}
p{
    color: #E7E7EB;
    text-align: center;
}
span{
    
    color: #A09FB1;
    font-size: 30px;
}
`;
const Img = styled.img`
width: 55px;
height: 55px;
`


const ResultadoSecundario = ({ resultado, clima }) => {


    const { consolidated_weather } = clima;
    if (!consolidated_weather) return null;

    const imagen1 = `https://www.metaweather.com/static/img/weather/${consolidated_weather[1].weather_state_abbr}.svg`;
    const imagen2 = `https://www.metaweather.com/static/img/weather/${consolidated_weather[2].weather_state_abbr}.svg`;
    const imagen3 = `https://www.metaweather.com/static/img/weather/${consolidated_weather[3].weather_state_abbr}.svg`;
    const imagen4 = `https://www.metaweather.com/static/img/weather/${consolidated_weather[4].weather_state_abbr}.svg`;
    const imagen5 = `https://www.metaweather.com/static/img/weather/${consolidated_weather[5].weather_state_abbr}.svg`;

    return (
        <MenuContenedor>

            <ContenedorCuadros className="animate__animated animate__fadeIn">
                <Cuadro>
                    <h3 className="animate__animated animate__fadeIn">Mañana</h3>
                    <Img className="animate__animated animate__fadeIn" src={imagen1} />
                    <p className="animate__animated animate__fadeIn">{consolidated_weather[1].min_temp.toFixed(2)}<span>°C</span></p>
                </Cuadro>
                <Cuadro>
                    <h3 className="animate__animated animate__fadeIn">{consolidated_weather[2].applicable_date}</h3>
                    <Img className="animate__animated animate__fadeIn" src={imagen2} />
                    <p className="animate__animated animate__fadeIn">{consolidated_weather[2].min_temp.toFixed(2)}<span>°C</span></p>
                </Cuadro>
                <Cuadro>
                    <h3>{consolidated_weather[3].applicable_date}</h3>
                    <Img className="animate__animated animate__fadeIn" src={imagen3} />
                    <p className="animate__animated animate__fadeIn">{consolidated_weather[3].min_temp.toFixed(2)}<span>°C</span></p>
                </Cuadro>
                <Cuadro>
                    <h3>{consolidated_weather[4].applicable_date}</h3>
                    <Img className="animate__animated animate__fadeIn" src={imagen4} />
                    <p className="animate__animated animate__fadeIn">{consolidated_weather[4].min_temp.toFixed(2)}<span>°C</span></p>
                </Cuadro>
                <Cuadro>
                    <h3 className="animate__animated animate__fadeIn">{consolidated_weather[5].applicable_date}</h3>
                    <Img className="animate__animated animate__fadeIn" src={imagen5} />
                    <p className="animate__animated animate__fadeIn">{consolidated_weather[5].min_temp.toFixed(2)}<span>°C</span></p>
                </Cuadro>
            </ContenedorCuadros>
            <ContenedorButtons>
                <h2>hoy destacado</h2>
            </ContenedorButtons>
            <ContenedorCuadrosGrandes className="animate__animated animate__fadeIn">
                <CuadroGrande>
                    <p className="animate__animated animate__fadeIn">Estado del viento</p>
                    <h3 className="animate__animated animate__fadeIn">{parseInt(consolidated_weather[1].wind_speed)}<span>mph</span></h3>
                </CuadroGrande>
                <CuadroGrande>
                    <p className="animate__animated animate__fadeIn">Humedad</p>
                    <h3 className="animate__animated animate__fadeIn">{consolidated_weather[1].humidity}<span>%</span></h3>
                </CuadroGrande>
                <CuadroGrande>
                    <p className="animate__animated animate__fadeIn">Visibilidad</p>
                    <h3 className="animate__animated animate__fadeIn">{consolidated_weather[1].visibility.toFixed(2)}<span>millas</span></h3>
                </CuadroGrande>
                <CuadroGrande>
                    <p className="animate__animated animate__fadeIn">Presion</p>
                    <h3 className="animate__animated animate__fadeIn">{consolidated_weather[1].air_pressure}<span>mb</span></h3>
                </CuadroGrande>
            </ContenedorCuadrosGrandes>
            <ContenedorParrafo className="animate__animated animate__fadeIn">
                <p>created by <a href="https://devchallenges.io/portfolio/jean96rq">jean96rq</a> - <a href="https://devchallenges.io/">devChallenges.io</a></p>
            </ContenedorParrafo>
        </MenuContenedor>
    )
}

export default ResultadoSecundario

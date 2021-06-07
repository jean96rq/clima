import React, { useState } from 'react'
import Items from './Items';
import styled from '@emotion/styled'

const Form = styled.form`
padding-top: 82px;
width: 80%;
margin: 0 auto;
`;
const ContenedorInputs = styled.div`
width: 100%;
margin-top: 10px;
margin-bottom: 40px;
position: relative;
display: flex;
`;
const Input = styled.input`
width: 100%;
padding: 15px 49px;
box-sizing: border-box;
outline: none;
background-color: transparent;
border: 1px solid #E7E7EB;
font-size: 16px;
color: #616475;
font-weight: 500;
transition: border .3s ease;
&:focus{
    border: 1px solid #616475;
}
`;



const IconBuscar = styled.p`
position: absolute;
left: 10px;
top: 0;
color: #616475;
font-size: 13px;
`


const ContenedorError = styled.div`
border: 1px red solid;
padding: 30px 10px;
text-align: center;
color: red;
width: 100%;
box-sizing: border-box;
`;

const Boton = styled.button`
background: #3C47E9;
color: #E7E7EB;
font-size: 16px;
border: none;
outline: none;
cursor: pointer;
margin-left: 10px;
flex: 90px 0 0;
`


const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta, mostrarMenu, mostrarInicio, resultado, guardarClima }) => {


    const [error, guardarError] = useState(false)

    const [listado, gardarListado] = useState(false)

    const { cuidad } = busqueda;



    const handleChangue = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = e => {
        e.preventDefault();
        //validar
        if (cuidad.trim() === '') {
            guardarError(true)
            return;
        }
        guardarError(false)
        guardarConsulta(true)
        mostrarMenu(true)
        gardarListado(true)
        //Pasar al componente principal
    }
    return (
        <Form
            onSubmit={handleSubmit}
        >
            <ContenedorInputs>
                <Input
                    type="text"
                    name="cuidad"
                    placeholder="Ejem. Lima"
                    value={cuidad}
                    onChange={handleChangue}
                />
                <Boton type="submit">Buscar</Boton>
                <IconBuscar><span className="material-icons">
                    search
                </span></IconBuscar>
            </ContenedorInputs>

            {resultado.map(resul => (
                <Items
                    key={resul.woeid}
                    resul={resul}
                    listado={listado}
                    mostrarMenu={mostrarMenu}
                    guardarClima={guardarClima}
                    mostrarInicio={mostrarInicio}
                />
            ))}


            {error ? <ContenedorInputs><ContenedorError>Todos los campos son obligatorios </ContenedorError></ContenedorInputs> : null}
        </Form>
    )
}

export default Formulario

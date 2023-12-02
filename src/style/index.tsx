import styled from "styled-components";

export const LightTheme = {
    corFundo: '#c0aa2e',
    corTexto: '#000000',
    corTitulo: '#660066'
}

export const DarkTheme = {
    corFundo: '#000000',
    corTexto: '#ffffff',
    corTitulo: '#d0f8ff'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
    display: flex;
    flex-direction: column;
    min-height: 1000px;
`

// Criando um botão
export const Button = styled.div`
    padding: 10px;
    border: none;
    background-color: #4caf5000;
    color: #af634c;
    margin: 8px;
    cursor: default;
`

// Criando um título
export const TitlePage = styled.h1`
    color: #aaff99;
    font-size: 40px;
`

export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`


// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
`

// Criando um nav para fazer o Menu
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 15px;
`

export const Li = styled.li`
    list-style-type: none;
    padding-right: 30px;
`

export const NavRow = styled.div`
    padding-left: 15px;
    display: flex;
    align-items: center;
    background-color: #206600;
`


export const FormSection = styled.section`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: grid;
    margin-inline: auto;
    padding-inline: 24px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
`

export const FormContainer = styled.div`
    background-color: #e9ff99;
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    line-height: 1.5;
    box-shadow: 0 20px 30px;
`

export const FormImage = styled.img`
    width: 300px;
    height: 600px;
    object-fit: cover;
    object-position: center;
`

export const FormContent = styled.div`
    padding: 10px 40px 10px 10px;
`

export const FormTitle = styled.h2`
    font-size: 1.2rem;
    color: ${props => props.theme.corTitulo};
`

export const FormInput = styled.input`
    width: 91%;
    border: none;
    padding: 14px;
    border-radius: 3px;
    border: 2px solid #daecdb;
    margin: 5px 0 10px;
    font-size: 1rem;
    color: #656880;
`

export const FormSubmit = styled.button`
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 3px;
    background-image: linear-gradient(to right, #69ff82, #4cafaf);
    display: block;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
`

export const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    margin-right: 10px;
`

export const ToggleSpan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 30px;
    &:before {
        position: absolute;
        content: "";
        height: 25px;
        width: 25px;
        left: 3px;
        bottom: 2.6px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s;
    }
`

export const ToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${ToggleSpan} {
        background-color: #00c853;
    };
      
    &:checked + ${ToggleSpan}:before {
        transform: translateX(21px);
    };
`

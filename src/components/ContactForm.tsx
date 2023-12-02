import React from 'react';
import axios from 'axios';
import { 
    FormContainer, FormContent, 
    FormImage, FormInput, 
    FormSubmit, FormTitle } from '../style';


export default function ContactForm() {
    // Vamos criar os estados para armazenar o cep e outros ddados do endereço
    const[cep, setCep] = React.useState('')
    const [logradouro, setLogradouro] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [cidade, setCidade] = React.useState('')

    // Estados para armazenar nome e email
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    
    // Estado par armazenar os dados retornados da nossa api VIACEP
    const[data,setData]: any = React.useState({})

    //Estado para manipular o erro
    const[error,setError] = React.useState('')

    //Lidar com a mudança dos campos de entradas
    function handleCepChange(e) {
        setCep(e.target.value)
    }

    function handleLogradouroChange(e) {
        setLogradouro(e.target.value)
    }

    function handleNumeroChange(e) {
        setNumero(e.target.value)
    }

    function handleBairroChange(e) {
        setBairro(e.target.value)
    }

    function handleCidadeChange(e) {
        setCidade(e.target.value)
    }

    function handleNomeChange(e) {
        setNome(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function pesquisaCEP() {
        //Usar o axios: manipula o get (Fazer uma requisição)
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            
            //Define uma função CALLBACK que será chamada se a requisição for bem-sucedida (similar ao try except)
            .then(
                function(response){
                    if(response.data && !response.data.error) {
                        // Guardando o resultado do request
                        setData(response.data)
                        setError('')
                        
                        // Exibindo resultado do request
                        setLogradouro(data.logradouro)
                        setBairro(data.bairro)
                        setCidade(data.localidade)
                    }
                    else{
                        setData({})
                        setError('CEP NÃO ENCONTRADO')
                    }
                }
                
            )
            .catch(
                function() {
                    setData({})
                    setError('CEP NÃO ENCONTRADO')
                }
            )
    }

    return (
        <FormContainer>
            <FormImage src='https://picsum.photos/id/349/300/600' alt='Lorem Picsum' />
            <FormContent>
                <FormTitle>Nos passe seus dados para darmos início:</FormTitle>
                <FormInput 
                    type='text' placeholder='Digite seu CEP' name='CEP'
                    value={cep} onChange={handleCepChange}
                />
                <FormSubmit onClick={pesquisaCEP}>Procurar</FormSubmit>
                <span style={{color: 'red', padding: '4px'}}>{error}</span>
                <hr />
                <FormInput 
                    type='text' placeholder='Logradouro' name='CEP'
                    value={logradouro} onChange={handleLogradouroChange}
                />
                <FormInput 
                    type='text' placeholder='Número' name='numero'
                    value={numero} onChange={handleNumeroChange}
                />
                <FormInput 
                    type='text' placeholder='Bairro' name='bairro'
                    value={bairro} onChange={handleBairroChange}
                />
                <FormInput 
                    type='text' placeholder='Cidade' name='cidade'
                    value={cidade} onChange={handleCidadeChange}
                />
                <FormInput 
                    type='text' placeholder='Digite seu nome completo' name='nome'
                    value={nome} onChange={handleNomeChange}
                />
                <FormInput 
                    type='text' placeholder='Digite seu melhor e-mail' name='email'
                    value={email} onChange={handleEmailChange}
                />
                <FormSubmit type='submit'>Cadastrar</FormSubmit>
            </FormContent>
        </FormContainer>
    )
}

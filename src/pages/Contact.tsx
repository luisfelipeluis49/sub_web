import React from 'react';
import { FormSection, TitlePage } from '../style'
import { Form } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return(
        <>
            <TitlePage>ENTRE EM CONTATO PARA NOS CONTRATAR</TitlePage>

            <FormSection>
                <ContactForm />
            </FormSection>
            
        </>
    )
}
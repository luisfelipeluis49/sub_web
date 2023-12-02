import React from "react";
import UniversityCard from "../components/UniversityCard";

export default function Universities() {
    return (
        <>
            <h1>Principais Universidades em Portugal</h1>
            <ul>
                <UniversityCard
                    nome="Universidade de Lisboa"
                    descricao="A Universidade de Lisboa é uma das mais antigas e prestigiadas instituições de ensino superior em Portugal. Oferece uma ampla variedade de cursos e é reconhecida internacionalmente pela qualidade da sua pesquisa."
                    linkMaisInfo="https://www.ulisboa.pt/"
                />
                <UniversityCard
                    nome="Universidade do Porto"
                    descricao=" Localizada na cidade do Porto, a Universidade do Porto é conhecida pela sua excelência acadêmica e pela contribuição significativa para a pesquisa em diversas áreas. É uma das maiores universidades em Portugal."
                    linkMaisInfo="https://www.up.pt/portal/pt/"
                />
                <UniversityCard
                    nome="Universidade de Coimbra"
                    descricao="A Universidade de Coimbra é uma das mais antigas universidades da Europa e é famosa pela sua rica tradição acadêmica. Oferece uma variedade de cursos em diferentes disciplinas e tem uma atmosfera cultural única."
                    linkMaisInfo="https://www.uc.pt/"
                />
                <UniversityCard
                    nome="Universidade Nova de Lisboa"
                    descricao="A Universidade Nova de Lisboa é reconhecida pela inovação e excelência em ensino e pesquisa. Possui várias faculdades e institutos especializados em diversas áreas do conhecimento."
                    linkMaisInfo="https://www.unl.pt/"
                />
            </ul>
        </>
    );
}
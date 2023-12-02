import React from 'react';

interface UniversityCardProps {
  nome: string;
  descricao: string;
  linkMaisInfo: string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ nome, descricao, linkMaisInfo }) => {
  return (
    <li>
        <div className="university-card">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <a href={linkMaisInfo} target="_blank" rel="noopener noreferrer">
                Mais Informações
            </a>
        </div>
    </li>
    
  );
};

export default UniversityCard;
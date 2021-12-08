import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import styled, { ThemeConsumer } from "styled-components";
import Extrato from "../Extrato";

const ContainerHeaper = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {  
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <ContainerHeaper>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo>
    </ContainerHeaper>
  );
};

export default Container;

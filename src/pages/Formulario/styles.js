import { ArrowBack } from '@mui/icons-material';
import { Button, FormControl, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import styled from 'styled-components';
const blue = '#1976d2'
const colorHeadingForm = '#1C1C1C'
const colorMainBackground= '#E5E5E5'

// export const Container = styled.main`
//   min-height: 100vh;
//   padding: 0 10px;
//   @media(min-width: 768px) {
//     margin: 0 1em;
//     width: 50%;
//   }
// `;

//estilo da pagina inteira
export const Main = styled.main`
    background-color: ${colorMainBackground};
    width: 100%;
    min-height: 100vh;
`;

//estilo do cabeçalho
export const Header = styled.header`
  width: 100%;
  background-color: ${blue};
  height: 286px;
  
`;

//estilo para mexer com o icone de voltar
export const Voltar = styled(IconButton).attrs({
  children: <ArrowBack />
})`
  top: 1em;
`;

//estilo para mexer nos componentes do cabeçalho
export const ContainerHeader = styled(Container)`
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3em;
    padding-left: 7em;
  }

  h1, h2 {
    color: white;
  }
  h2 {
    font-weight: normal;
    font-size: 1.3em;
  }
`;

//container do formulario inteiro, ajusta melhor pelo MUI
export const ContainerMUI = styled(Container)`
  background-color: white;
  border-radius: 2%;
  position: relative;
  top: -4em;
`;

//estilos do form em do form em si (gap nos filhos, direcao e etc)
export const Lista = styled.form`
  display: flex;
  padding-top: 2em;
  flex-direction: column;
  gap: 35px;
  > h2 {
    color: ${colorHeadingForm};
    font-size: 24px;
  }
`;

export const Barra = styled.hr`
margin-bottom: 1.2em;
`;

//container dos inputs para espaçamento
export const InputContainer = styled(FormControl)`
`;

//estilo para rodape com o alert
export const Rodape = styled.section`
  padding-top: 5.7em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const ButtonSubmit = styled(Button)`
  width: 35%;
`;

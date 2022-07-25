import { ArrowBack } from '@mui/icons-material';
import { FormControl, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import styled from 'styled-components';
const blue = '#1976d2';
const colorMainBackground= '#E5E5E5';


export const ContainerMain = styled.main`
  width: 100%;
  background-color: ${colorMainBackground};
  min-height: 100vh;
`;






export const HeaderView = styled.header`
  width: 100%;
  height: 286px;
  background-color: ${blue}
`;

export const ContainerFilter = styled(Container)`
  position: relative;
  top: -5em;
  background-color: transparent;
  disable-gutters: true;

`;


//estilo para mexer nos componentes do cabeçalho
export const ContainerHeader = styled(Container)`
  height: 100%;
  div {
    padding-top: 3em;
    padding-left: 7em;
  }

  h1, h2 {
    color: white;
  }
`;

//estilo para mexer com o icone de voltar
export const Voltar = styled(IconButton).attrs({
  children: <ArrowBack />
})`
  top: 1em;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2em;
`;

//containerView
export const ContainerView = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-radius: 8px;
  padding-top: 1em;
`;

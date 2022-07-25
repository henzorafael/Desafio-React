import { Container } from "@mui/system";
import styled from "styled-components";
import { ReactComponent as Logo } from '../assets/wppLogo.svg';

const colorWpp = '#04D361';


export const LogoWpp = styled(Logo)`

`
export const SectionNome = styled.section`
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-weight: normal;
    font-size: 1em;
  }
  padding-top: 2em;
`;
export const SectionMotivo = styled.section`
  h3 {
    font-weight: normal;
    font-size: 1.3em;
    padding-top: 10px;
  }
  p {
    padding-top: 20px;
    word-wrap: break-word;
  }
  padding-bottom: 2em;
`;
export const SectionTitleMotivo = styled.section`
  display: flex; 
  flex-direction: row;
  align-items: baseline;
  gap: 10px;
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.5em;
    font-weight: normal;
  }
  padding-top: 30px;
`;

export const DivTicket = styled.div`
  background-color: white;
  padding: 0 24px 0 24px;
  border-radius: 8px;
  height: 100%;
  position: relative;
  top: -5em;
  margin-top: 2em;

`;


export const ButtonWpp = styled.button`
  background-color: ${colorWpp}; 
  display: flex;
  flex-direction: row;
  width: 250px;
  align-items: center;
  gap: 1em;
  justify-content: center;
  height: 56px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  h1 {
    font-size: 18px;
    color: white;
  }
`;

export const DivWpp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-top: 1em;
  padding-bottom: 1em;
  h2 {
    padding-top: 0.7em;
    font-weight: normal;
    font-size: 1.3em;
  }

`;
import { FormControl } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 40px;
flex-direction: column;
padding: 0 20px;
@media(min-width: 768px) {
  margin: 0 auto;
  width: 60%;
}
`;

export const Titulo = styled.h2`
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`
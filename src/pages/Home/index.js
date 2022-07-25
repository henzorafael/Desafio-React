import React from "react";
import { Button} from "@mui/material";
import { Container, Titulo } from "./styles";
import {useNavigate} from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();


  return (
    <Container>
      <Titulo>
        Entrada formulario
      </Titulo>
    
      <Button
        variant="contained"
        color="primary"
        onClick={() => {navigate('/formulario')}}
      >
        Clique aqui para começar o formulário
      </Button>
    </Container>
  )
};


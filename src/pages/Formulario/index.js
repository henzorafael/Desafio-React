import { Barra, ButtonSubmit, ContainerHeader, ContainerMUI, Header, Lista, Main, Rodape, Voltar } from "./styles";
import {  Alert, AlertTitle, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { InputContainer } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../common/context/Formulario";
import { useNavigate } from "react-router-dom";

export const motivos = [{
    nome: "Problema1",
    id: 1
}, {
    nome: "Problema2",
    id: 2
}, {
    nome: "Outros",
    id: 3
}]

export default function Formulario() {
    const {setFormData} = useContext(UserContext);
    
    
    const [nome, setNome] = useState("");
    const [wpp, setWpp] = useState("");
    const [motivo, setMotivo] = useState("");
    const [outroMotivo, setOutroMotivo] = useState("")
    const [assunto, setAssunto] = useState("");
    const [helperText, setHelperText] = useState("(use somente números)");

    const navigate = useNavigate();

    
    

    // useEffect(() => {
    //     if(formData.nome) setNome(formData.nome)
    //     if(formData.wpp) setWpp(formData.wpp)
    //     if(formData.motivo) setMotivo(formData.motivo)
    //     if(formData.assunto) setAssunto(formData.assunto)
    //     if(formData.outroMotivo) setOutroMotivo(formData.outroMotivo)

    // }, [formData])

    const handleClickSave = () => {
        const date = new Date();

        const newTicket = {
            nome: nome,
            wpp: wpp,
            motivo: motivo,
            outroMotivo: outroMotivo,
            assunto: assunto,
            date: date
        }
        setFormData((state) => [...state, newTicket])
        
        navigate('/viewformulario')
    }
    

    return (
        <Main>
            <Header>
                <ContainerHeader
                    maxWidth="md"
                >
                    <Voltar 
                        onClick={() => 
                            navigate(-1)
                        }
                    />  
                    <div>
                        <h1>Suporte!</h1>
                        <h2>Descreve brevemente sobre o que podemos te ajudar no sistema.</h2>
                    </div>
                </ContainerHeader>
            </Header>
            <ContainerMUI
                maxWidth='sm'
            >

                <Lista>
                    <h2>Seu dados</h2>
                    <Barra/>
                    <InputContainer>
                        <InputLabel
                        >
                            Nome completo
                        </InputLabel>
                        <OutlinedInput
                            label="Nome completo"
                            value={nome}
                            onChange={(event) => {
                                setNome(event.target.value);
                            }}
                            type="text"
                        />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>
                            WhatsApp
                        </InputLabel>
                        <OutlinedInput
                            label="WhatsApp"
                            value={wpp}
                            inputProps={{maxLength: 11}}
                            onChange={(event) => {
                                let valorWpp = event.target.value;
                                const re = /^[0-9\b]+$/;

                                if (valorWpp === "" || re.test(valorWpp)) setWpp(valorWpp)
                                if(valorWpp.length < 11) setHelperText("(digite 11 números)")
                                else setHelperText("")
                            }}
                        />
                        <FormHelperText>
                            {helperText}
                        </FormHelperText>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>
                            Motivo
                        </InputLabel>
                        <Select
                            value={motivo}
                            label="Motivo"
                            onChange={(event) => {
                                setMotivo(event.target.value);

                            }}   
                        >
                            {
                                motivos.map(motivo => (
                                    <MenuItem key={motivo.id} value={motivo.nome}>
                                        {motivo.nome}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </InputContainer>
                    {
                        motivo && motivo === "Outros" ? (
                            <InputContainer>
                                <InputLabel>
                                    Insira o motivo
                                </InputLabel>
                                <OutlinedInput
                                    label="Insira o motivo"
                                    value={outroMotivo}
                                    onChange={(event) => {
                                        setOutroMotivo(event.target.value)
                                    }}
                                />
                            </InputContainer>
                        ) : (
                            <>
                            </>
                        )
                    }
                    <TextField
                        value={assunto}
                        label="Assunto"
                        multiline={true}
                        rows={5}
                        onChange={(event) => {
                            setAssunto(event.target.value)
                        }}
                    />
                </Lista>
                <Rodape>
                    <Alert severity="info"
                        sx={{
                            "& .MuiAlert-icon": {
                              color: "#8257E5",
                              fontSize: '40px',
                              paddingTop: '10px'
                            }, 
                            backgroundColor: 'white', color:'#848494'
                        }}

                    >
                        <AlertTitle>
                            Importante!
                        </AlertTitle>
                        Preencha todas as informações
                    </Alert>
                    <ButtonSubmit
                        disableElevation
                        variant="contained"
                        sx={{
                            backgroundColor: '#04D361', borderRadius: '8px', 
                            "&:hover": {
                            backgroundColor: '#04D361'
                            }
                        }}
                        disabled={
                            nome.length < 4 || 
                            wpp.length < 11 || 
                            motivo === "" ||
                            (motivo === "Outros" && outroMotivo === "") ||
                            assunto === ""
                        }
                        onClick={handleClickSave}
                    >
                        Salvar Cadastro
                    </ButtonSubmit>
                </Rodape>
            </ContainerMUI>
        </Main>
    )
}
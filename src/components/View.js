import { Typography } from "@mui/material";
import { useState } from "react";
import { ButtonWpp, DivTicket, DivWpp, LogoWpp, SectionMotivo, SectionNome, SectionTitleMotivo } from "./styles";

/* <View form={form} fulano="teste" id="1" /> */

// View({ fulano, id, ...props })
// props.form

// props.fulano
// props.id

// const { fulano, id } = props

// props.form.nome


export default function View(
    {form}
) {


const [buttonWpp, setButtonWpp] = useState(false);

    return(

        <DivTicket>
            <SectionNome>
                <Typography variant="h1"><b>{form.nome}</b></Typography>
                <Typography variant="h2">{new Date(form.date).toLocaleString()}</Typography>
            </SectionNome>            
            <SectionMotivo>
                <SectionTitleMotivo>
                    <Typography variant="h1"><b>Motivo: </b></Typography>
                    <Typography variant="h2">{form.motivo}</Typography>
                </SectionTitleMotivo>
                {
                    form.motivo === "Outros" ? (
                    
                        <Typography variant="h3">{form.outroMotivo}</Typography>
                                        
                    ) : (
                        <>
                        </>
                    )
                }
                <Typography align="justify">{form.assunto}</Typography>
            </SectionMotivo>
            <hr style={{borderColor: '#E6E6F0'}}/>
            <DivWpp>
                <ButtonWpp
                    onClick={() => {
                        if(buttonWpp === false) setButtonWpp(true)
                        else setButtonWpp(false)
                    }}
                >
                    <LogoWpp/>
                    <h1>Entrar em contato</h1>
                </ButtonWpp>
                {
                    buttonWpp === true ? 
                        <h2>{form.wpp}</h2>
                    : 
                        <>
                        </>
                }
            </DivWpp>
        </DivTicket>

    )
}


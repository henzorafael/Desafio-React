import { FormControl, FormLabel, MenuItem, Select, Container } from "@mui/material"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../common/context/Formulario"
import View from "../../components/View"

import { ContainerHeader,ContainerMain,ContainerFilter,HeaderView, Voltar, ContainerView, FilterForm } from "./styles"



export default function ViewFormulario () {
    const {formData} = useContext(UserContext);
    const [motivoView, setMotivoView] = useState("Todos");
    const [ordenacao, setOrdenacao] = useState("Mais antiga");

    // const [tickets, setTickets] = useState(formData)

    // useEffect(() => {
    //     if (formData){
    //         const arraySort = formData.sort((a, b) => {
    //             if (ordenacao === ''){
    //                 return a - b
    //             } else {
    //                 return b - a 
    //             }
    //         })

    //         const arrayFilter = arraySort.filter((item) => {
    //             if (motivoView === 'Todos') {
    //                 return item
    //             } else {
    //                 return item.motivo === motivoView
    //             }
    //         })

    //         setTickets(arrayFilter)


    //     }
    // }, [formData, motivoView, ordenacao])

    const ordenacoes = [{
        nome: "Mais recente",
        id: 1
    }, {
        nome: "Mais antiga",
        id: 2
    }];

    const motivos = [{
        nome: "Todos",
        id: 1
    }, {
        nome: "Problema1",
        id: 2
    }, {
        nome: "Problema2",
        id: 3
    }, {
        nome: "Outros",
        id: 4
    }]

    const navigate = useNavigate();

    return (

        <ContainerMain>
            <HeaderView>
                <ContainerHeader
                    maxWidth="md"
                >
                    <Voltar 
                        onClick={() => 
                            navigate(-1)
                        }
                    />  
                    <div>
                        <h1>Tickets do suporte</h1>
                    </div>
                </ContainerHeader>
            </HeaderView>
            <Container>
                <ContainerFilter
                    maxWidth='sm'
                    disableGutters={true}
                >
                    <FilterForm>
                        <FormControl>
                            <FormLabel
                                sx={{right: '4%', bottom: '10%', color: 'white'}}
                                focused={false}
                            >
                                Motivos
                            </FormLabel>
                            <Select
                                sx={{width: '180px', backgroundColor: 'white'}}
                                value={motivoView}
                                onChange={(event) => {
                                    setMotivoView(event.target.value);
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
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                sx={{right: '4%', bottom: '10%', color: 'white'}}
                                focused={false}
                            >
                                Ordenação
                            </FormLabel>
                            <Select
                                sx={{width: '180px', backgroundColor: 'white'}}
                                value={ordenacao}
                                onChange={(event) => {
                                    setOrdenacao(event.target.value)
                                }}
                            >
                            {
                                ordenacoes.map(ordenacao => (
                                    <MenuItem key={ordenacao.id} value={ordenacao.nome}>
                                        {ordenacao.nome}
                                    </MenuItem>
                                ))
                            }

                            </Select>
                        </FormControl>
                   
                    </FilterForm>
                </ContainerFilter>
                <ContainerView
                    maxWidth='sm'
                    disableGutters={true}
                >
                    {       
                // formData && formData.length > 0 && motivoView === "Todos" ? 
                // formData.map((todos, index) => (
                //     <>
                //         {
                //             index > 0 ? (
                //                 <hr/>
                //             ) : (
                //                 <>
                //                 </>
                //             )
                //         } 
                //         <SectionNome>
                //             <h1>{todos.nome}</h1>
                //             <h2>{todos.date}</h2>
                //         </SectionNome>            
                //         <SectionMotivo>
                //             <SectionTitleMotivo>
                //                 <h1>Motivo: </h1>
                //                 <h2>{todos.motivo}</h2>
                //             </SectionTitleMotivo>
                //         {
                //             todos.motivo === "Outros" ? (
                //             <>
                //                 <h3>{todos.outroMotivo}</h3>
                //             </>
                //                     ) : (
                //                 <></>
                //             )
                            
                //         }
                //             <p>{todos.assunto}</p>

                //         </SectionMotivo>
                //     </>
                // ))
                
                    
                //     : 
                        formData && formData.length > 0 && formData.filter((item) => (motivoView === "Todos" && item) ||  item.motivo === motivoView)
                        .sort((a, b) => {
                                const dataA = new Date(a.date)
                                const dataB = new Date(b.date)
                                if(ordenacao === "Mais recente") return dataB - dataA
                                else return dataA - dataB
                            })
                        .map((form, index) => (
                            <View form={form}/>
                        ))

                    }

            
                </ContainerView> 
            
                {/* {
                    motivoView === formData.motivo ? (
                        <ContainerView
                            maxWidth='sm'
                        >
                        <SectionNome>
                            <h1>{formData.nome}</h1>
                            <h2>{formData.date}</h2>
                        </SectionNome>            
                    <SectionMotivo>
                        <SectionTitleMotivo>
                            <h1>Motivo: </h1>
                            <h2>{formData.motivo}</h2>
                        </SectionTitleMotivo>
                    {
                        formData.motivo === "Outros" ? (
                        <>
                            <h3>{formData.outroMotivo}</h3>
                        </>
                                ) : (
                            <></>
                        )
                    }
                    <p>{formData.assunto}</p>
                </SectionMotivo>
                </ContainerView>
                    ) : (
                        <>
                        </>
                    )
                } */}


            
            
            </Container>
        </ContainerMain>
    )
}
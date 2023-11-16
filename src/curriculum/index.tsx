import React from "react";
import { useNavigate } from 'react-router-dom';
import { LinkHeader, ContainerHeader, Image, Title, Paragraph, ContainerSection, ContainerBody, ContainerMain, Marks } from './styles'
import ufrbLogo from "../assets/ufrb-logo.jpg"
import pesquisaLogo from "../assets/pesquisa-logo.jpeg"
import premiacaoLogo from "../assets/premiacao-logo.jpeg"
import tecnologias from "../assets/tecnologias.png"
import eventos from "../assets/eventos.jpeg"
import contract from '../assets/contract.jpeg'
function Curriculum() {
    const navigate = useNavigate();

    function toHome() {
        return navigate("/")
    }

    function toCurriculum() {
        return navigate("/curriculum")
    }

    function toProjects() {
        return navigate("/projects")
    }
    return (
        <>
            <ContainerHeader>
                <LinkHeader onClick={toHome}>Sobre mim</LinkHeader>
                <LinkHeader onClick={toCurriculum}>Currículo</LinkHeader>
                <LinkHeader onClick={toProjects}>Projetos</LinkHeader>
            </ContainerHeader>

            <ContainerBody>
                <ContainerMain>
                    <ContainerSection>
                        <Title>Formação</Title>

                        <Marks>Bacharela em Ciências Exatas e Tecnológicas - Universidade Federal do Recôncavo da Bahia (2019 - 2023)</Marks>
                        <Marks>Bacharelanda em Engenharia da Computação - Universidade Federal do Recôncavo da Bahia (2023 - Atual)</Marks>


                    </ContainerSection>
                    <ContainerSection>
                        <Image src={ufrbLogo} />
                    </ContainerSection>
                </ContainerMain>

                <ContainerMain>
                    <ContainerSection>
                        <Image src={tecnologias} />
                    </ContainerSection>
                    <ContainerSection>
                        <Title>Tecnologias</Title>
                        <Marks>Uso frequente: HTML, CSS, Material UI Design, React.js.</Marks>
                        <Marks>Atualmente estou buscando aperfeiçoamento: Node.js, Express, SQL, PostgreSQL, Git, Java, R, Python, C/C++, thunderClient, PostBird, Insomnia, MongoDBCompass, MongoDB, Docker.</Marks>
                    </ContainerSection>

                </ContainerMain>

                <ContainerMain>
                    <ContainerSection>
                        <Title>Pesquisa</Title>
                        <Marks>Bolsista - Projeto de Iniciação Científica (10/2022 - 10/2023) </Marks>
                        <Marks>Bolsista - Projeto de Extensão (05/2022 - 12/2022)  </Marks>
                        <Marks>Bolsista - Projeto de Extensão (05/2021 - 12/2021) </Marks>
                    </ContainerSection>
                    <ContainerSection>
                        <Image src={pesquisaLogo} />
                    </ContainerSection>
                </ContainerMain>

                <ContainerMain>
                    <ContainerSection>
                        <Image src={premiacaoLogo} />
                    </ContainerSection>
                    <ContainerSection>
                        <Title>Premiações</Title>
                        <Marks>Melhor Artigo na Área Neural and Machine Learning System do XVI Congresso Brasileiro de Inteligência Computacional.  </Marks>
                        <Marks>4º lugar na Competição Brasileira de Robótica na Categoria
                            De Simulação 2D (2023)  </Marks>
                        <Marks>4º lugar na Robocori na Categoria De Simulação 2D (2022) </Marks>
                        <Marks>4º lugar na Competição Brasileira de Robótica na Categoria De Simulação 2D (2021) </Marks>
                    </ContainerSection>
                </ContainerMain>

                <ContainerMain>
                    <ContainerSection>
                        <Title>Eventos</Title>
                        <Marks>Competição Brasileira de Robótica (Salvador/2023) </Marks>
                        <Marks>Congresso Brasileiro de Inteligência Computacional (Salvador/2023) </Marks>
                        <Marks>Mostra Nacional de Robótica (Salvador/2023) </Marks>
                        <Marks>IX Reconcitec (Cruz das Almas/2023) </Marks>
                    </ContainerSection>
                    <ContainerSection>
                        <Image src={eventos} />
                    </ContainerSection>
                </ContainerMain>

                <ContainerMain>
                    <ContainerSection>
                        <Image src={contract} />
                    </ContainerSection>
                    <ContainerSection>
                        <Title>Experiência</Title>
                        <Marks>Recode Jr (08/2020 - 06/2023)</Marks>
                        <Marks>EcoRecitec (11/2023 - Presente)</Marks>
                    </ContainerSection>
                </ContainerMain>

            </ContainerBody>

        </>
    )
}

export default Curriculum;
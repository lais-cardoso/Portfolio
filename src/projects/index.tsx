import React from "react";
import { LinkHeader, ContainerHeader, ContainerBody, ContainerMain, ContainerSection, Box, Typhograpy, Image, Paragraph, Container, LinkBody, ContainerParagraph } from './styles'
import { useNavigate } from 'react-router-dom';
import landingPage from "../assets/landing-page-recode-jr.jpeg"
import concreteCrack from "../assets/concreteCrack.png"

function Projects() {
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
                <LinkHeader onClick={toProjects} >Projetos</LinkHeader>
            </ContainerHeader>

            <ContainerBody>
                <ContainerMain>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>Landing Page - Recode Jr</Typhograpy>
                            <Container>
                                <Image src={landingPage} />
                                <ContainerParagraph>
                                    <Paragraph>Landing Page desenvolvida para o ensino de novos membros da Recode Jr com as tecnologias HTML e CSS.</Paragraph>
                                    <LinkBody href="https://landing-page-recode-jr.vercel.app/">Acesse o site</LinkBody>
                                </ContainerParagraph>
                            </Container>

                        </Box>
                    </ContainerSection>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>Trenzinho Acadêmico</Typhograpy>
                            <Container>
                                <Image />
                                <ContainerParagraph>
                                    <Paragraph>Aplicação web para divulgar eventos universitários aplicando técnicas de modelagem de banco de dados através do PostgreSQL.</Paragraph>
                                    <LinkBody href="https://landing-page-recode-jr.vercel.app/">Acesse o site</LinkBody>
                                </ContainerParagraph>
                            </Container>
                        </Box>
                    </ContainerSection>
                </ContainerMain>
            </ContainerBody>

            <ContainerBody>
                <ContainerMain>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>DAGenerator</Typhograpy>
                            <Container>
                                <Image src={concreteCrack}/>
                                <ContainerParagraph>
                                    <Paragraph>Algoritmo gerador de imagens artificiais para balanceamento de banco de dados de imagens de classificação de rachaduras.</Paragraph>
                                    <LinkBody href="https://landing-page-recode-jr.vercel.app/">Acesse o repositório</LinkBody>
                                </ContainerParagraph>
                            </Container>
                        </Box>
                    </ContainerSection>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>Prograd - Recode Jr</Typhograpy>
                            <Container>
                                <Image />
                                <ContainerParagraph>
                                    <Paragraph>Aplicativo web para a construção de novos PPC’s para a Universidade Federal do Recôncavo da Bahia.</Paragraph>
                                    <LinkBody>Atenção: Site Privado.</LinkBody>
                                </ContainerParagraph>
                            </Container>
                        </Box>
                    </ContainerSection>
                </ContainerMain>
            </ContainerBody>

        </>
    )
}

export default Projects;
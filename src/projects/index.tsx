import React from "react";
import { LinkHeader, ContainerHeader, ContainerBody, ContainerMain, ContainerSection, Box, Typhograpy, Image, Paragraph, Container, LinkBody, ContainerParagraph, Alert, IconImage, Grid  } from './styles'
import { useNavigate } from 'react-router-dom';
import LandingPage from "../assets/landing-page-recode-jr.jpeg"
import ConcreteCrack from "../assets/concreteCrack.png"
import Prograd from "../assets/prograd-image.jpeg"
import PandIA from "../assets/pandIA.jpeg"
import iconGithub from '../assets/iconGithub.png';
import iconLinkedin from '../assets/linkedin.png';


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
                <Grid>
                    <LinkHeader onClick={toHome}>Sobre mim</LinkHeader>
                    <LinkHeader onClick={toCurriculum}>Currículo</LinkHeader>
                    <LinkHeader onClick={toProjects} >Projetos</LinkHeader>
                </Grid>

                <Grid>
                    <LinkHeader href="https://github.com/lais-cardoso"><IconImage src={iconGithub} alt="github-icon" /></LinkHeader>
                    <LinkHeader href="https://www.linkedin.com/in/lais-cardoso-de-medeiros-enginner"><IconImage src={iconLinkedin} alt="linkedin-icon" /></LinkHeader>
                </Grid>

            </ContainerHeader>

            <ContainerBody>
                <ContainerMain>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>Landing Page - Recode Jr</Typhograpy>
                            <Container>
                                <Image src={LandingPage} />
                                <ContainerParagraph>
                                    <Paragraph>Landing Page desenvolvida para o ensino de novos membros da Recode Jr construída com as tecnologias HTML e CSS.</Paragraph>
                                    <LinkBody href="https://landing-page-recode-jr.vercel.app/">Acesse o site</LinkBody>
                                </ContainerParagraph>
                            </Container>

                        </Box>
                    </ContainerSection>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>Projeto PandIA </Typhograpy>
                            <Container>
                                <Image src={PandIA} />
                                <ContainerParagraph>
                                    <Paragraph>Interface de Aplicação Web desenvolvida para Prefeitura Bragança em Portugal desenvolvido com o framework NextJS. </Paragraph>
                                    <Alert>Atenção: Site Privado.</Alert>
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
                                <Image src={ConcreteCrack} />
                                <ContainerParagraph>
                                    <Paragraph>Algoritmo gerador de imagens artificiais para balanceamento de banco de dados de imagens de classificação de rachaduras com linguagem R.</Paragraph>
                                    <LinkBody href="https://github.com/lais-cardoso/DAGenerator">Acesse o repositório</LinkBody>
                                </ContainerParagraph>
                            </Container>
                        </Box>
                    </ContainerSection>
                    <ContainerSection>
                        <Box>
                            <Typhograpy>Prograd - Recode Jr</Typhograpy>
                            <Container>
                                <Image src={Prograd} />
                                <ContainerParagraph>
                                    <Paragraph>Aplicativo web para a construção de novos PPC’s para a Universidade Federal do Recôncavo da Bahia produzido em React js e Material Ui Design.</Paragraph>
                                    <Alert>Atenção: Site Privado.</Alert>
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
import React from "react";
import { LinkHeader, Image, Title, Paragraph, LinkBody, ContainerHeader, ContainerBody, ContainerSection, IconImage, Container } from './styles'
import Perfil from '../assets/perfil.png'
import { useNavigate } from 'react-router-dom';
import iconGithub from '../assets/iconGithub.png';
import iconLinkedin from '../assets/linkedin.png';


function Home() {
    const navigate = useNavigate();

    function toHome(){
        return navigate("/")
    }

    function toCurriculum(){
        return navigate("/curriculum")
    }

    function toProjects(){
        return navigate("/projects")
    }

    return (
        <>
            <ContainerHeader>
                <Container>
                    <LinkHeader onClick={toHome}>Sobre mim</LinkHeader>
                    <LinkHeader onClick={toCurriculum}>Currículo</LinkHeader>
                    <LinkHeader onClick={toProjects} >Projetos</LinkHeader>
                </Container>

                <Container>
                    <LinkHeader href="https://github.com/lais-cardoso"><IconImage src={iconGithub} alt="github-icon" /></LinkHeader>
                    <LinkHeader href="https://www.linkedin.com/in/lais-cardoso-de-medeiros-enginner"><IconImage src={iconLinkedin} alt="linkedin-icon" /></LinkHeader>
                </Container>

            </ContainerHeader>

            <ContainerBody>
                <ContainerSection>
                    <Image src={Perfil} />
                </ContainerSection>
                <ContainerSection>
                    <Title>Sobre mim</Title>

                    <Paragraph>Laís Cardoso de Medeiros, uma Desenvolvedora Web e Pesquisadora na Área Neural e de Machine Learning em constante aprendizado. Atuo como Desenvoldedora FullStack na EcoRecitec, trabalho com liderança sendo Capitã da Equipe de Simulação 2D da UFRB e possuo experiência em ensino de programação.</Paragraph>

                    <LinkBody href="https://drive.google.com/file/d/1iCG39_1rXDcxF2WeO4ES7uf1gU8Jm1n2/view?usp=sharing">Saiba mais</LinkBody>
                </ContainerSection>
            </ContainerBody>

        </>
    )
}

export default Home;

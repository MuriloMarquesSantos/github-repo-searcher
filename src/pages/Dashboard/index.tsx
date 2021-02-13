import React from 'react';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/github-logo.svg';

const Dashboard: React.FC = () => (
    <>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore Repositórios no Github</Title>
        <Form>
            <input placeholder="Digite o nome do repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            <a href="teste">

            </a>
        </Repositories>
    </>
)

export default Dashboard;
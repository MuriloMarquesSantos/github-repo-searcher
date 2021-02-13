import React from 'react';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/github-logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => (
    <>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore Repositórios no Github</Title>
        <Form>
            <input placeholder="Digite o nome do repositório" />
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            <a href="teste">
                <img src="https://avatars.githubusercontent.com/u/18178861?s=460&u=59603cbfc344014c40f13a1d08cc6da1e1c927a9&v=4"
                    alt="Murilo"
                />
                <div>
                    <strong>murilo-repo</strong>
                    <p>Esse repo é tal</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img src="https://avatars.githubusercontent.com/u/18178861?s=460&u=59603cbfc344014c40f13a1d08cc6da1e1c927a9&v=4"
                    alt="Murilo"
                />
                <div>
                    <strong>murilo-repo</strong>
                    <p>Esse repo é tal</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
            <a href="teste">
                <img src="https://avatars.githubusercontent.com/u/18178861?s=460&u=59603cbfc344014c40f13a1d08cc6da1e1c927a9&v=4"
                    alt="Murilo"
                />
                <div>
                    <strong>murilo-repo</strong>
                    <p>Esse repo é tal</p>
                </div>
                <FiChevronRight size={20}/>
            </a>
        </Repositories>
    </>
)

export default Dashboard;
import React from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/github-logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                Voltar
            </Link>

            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/4245999?s=200&v=4" alt="Clickbus" />
                    <div>
                        <strong>clickbus/clickbus</strong>
                        <p>descricao do repo</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>
                            1800
                        </strong>
                        <span>
                            Stars
                        </span>
                    </li>
                    <li>
                        <strong>
                            48
                        </strong>
                        <span>
                            Forks
                        </span>
                    </li>
                    <li>
                        <strong>
                            67
                        </strong>
                        <span>
                            Issues abertas
                        </span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="asd" >
                    <div>
                        <strong>hello</strong>
                        <p>hello</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
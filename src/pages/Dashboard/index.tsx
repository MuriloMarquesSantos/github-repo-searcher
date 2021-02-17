import React, { FormEvent, useState, useEffect } from 'react';

import { Title, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/github-logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories));
    }, [repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        if (!newRepo) {
            setInputError('Digite autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);
            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca por esse repositório');
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore Repositórios no Github</Title>
            <Form hasError={!! inputError}  onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={event => setNewRepo(event.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            { inputError && <Error>{inputError}</Error>}
            <Repositories>
                {
                    repositories.map(repository => (
                        <a key={repository.full_name} href="teste">
                            <img
                                src={repository.owner.avatar_url}
                                alt={repository.owner.login}
                            />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </a>
                    ))
                }
            </Repositories>
        </>
    )
}



export default Dashboard;
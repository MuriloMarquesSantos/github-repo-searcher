import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    max-width: 450px;
    line-height: 56px;
    color: #3A3A3A;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    
    input {
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        flex: 1;
        height: 70px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')}
        }
    }
`

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(7px)
        }

        /* second element onwards*/
        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }
        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`
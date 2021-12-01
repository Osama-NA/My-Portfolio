import React from 'react';
import { Icon } from '@iconify/react';
import {SocialsContainer} from '../styles/Socials.styled.js';

export const Socials = () => {
    return (
        <SocialsContainer>
            <a href="https://github.com/Osama-NA" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github-square"></i>
                <p>Github</p>
                <p>Osama-NA</p>
            </a>
            <a href="https://www.codewars.com/users/Osama%20NA" target="_blank" rel="noopener noreferrer">
                <Icon icon="simple-icons:codewars" />
                <p>Codewars</p>
                <p>Osama NA</p>
            </a>
            <a href="https://www.instagram.com/osama_a67/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
                <p>Instagram</p>
                <p>@osama_a67</p>
            </a>
            <a href="https://wa.link/9xdd0c" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp-square"></i>
                <p>Whatsapp</p>
                <p>+ 961 81 965 388</p>
            </a>
        </SocialsContainer>
    )
}

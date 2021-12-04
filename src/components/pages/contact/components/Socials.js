import React from 'react';
import { Icon } from '@iconify/react';
import { SocialsContainer } from '../styles/Socials.styled.js';

const SocialsLink = ({ link, icon, platform, username }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <i className={icon}></i>
            <p>{platform}</p>
            <p>{username}</p>
        </a>
    )
}

export const Socials = () => {
    return (
        <SocialsContainer>
            <SocialsLink link="https://github.com/Osama-NA" icon="fab fa-github-square" platform="Github" username="Osama-NA" />

            <a href="https://www.codewars.com/users/Osama%20NA" target="_blank" rel="noopener noreferrer">
                <Icon icon="simple-icons:codewars" />
                <p>Codewars</p>
                <p>Osama NA</p>
            </a>

            <SocialsLink link="https://www.instagram.com/osama_a67/" icon="fab fa-instagram" platform="Instagram" username="@osama_a67" />

            <SocialsLink link="https://wa.link/9xdd0c" icon="fab fa-whatsapp-square" platform="Whatsapp" username="+ 961 81 965 388" />
        </SocialsContainer>
    )
}

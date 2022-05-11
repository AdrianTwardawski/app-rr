import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias perspiciatis, quam repellat reprehenderit soluta culpa, sequi, nesciunt quaerat nulla explicabo itaque pariatur! Unde omnis quod odit? Mollitia, aspernatur alias."
    },
    {
        id: 2,
        title: "Czym jest paradoks ferminego",
        author: "Jan Kowalski",
        text: "But Kot Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias perspiciatis, quam repellat reprehenderit soluta culpa, sequi, nesciunt quaerat nulla explicabo itaque pariatur! Unde omnis quod odit? Mollitia, aspernatur alias."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "Ania Kowalska",
        text: " Dom Dom Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur alias perspiciatis, quam repellat reprehenderit soluta culpa, sequi, nesciunt quaerat nulla explicabo itaque pariatur! Unde omnis quod odit? Mollitia, aspernatur alias."
    },

]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;
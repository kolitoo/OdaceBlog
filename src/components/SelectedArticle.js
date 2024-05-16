import React from 'react';
import '../styles/SelectedArticle.css';

function SelectedArticle({ article, onGoBack }) {
    const handleClick = () => {
        onGoBack();
    };

    return (
        <div className="selected-article-container">
            <div className="article-header">
                <div className="name"><b>{article.name}</b></div>
                <div className="author">
                    <p><b>Autheur:</b> {article.autheur}</p>
                    <img src={article.avatar} alt='avatar-autheur' className='avatar' />
                </div>
            </div>
            <div className="article-content">
                <p>{article.text}</p>
                <p className="date"><b>{article.date}</b></p>
            </div>
            <button onClick={handleClick}>Retour à la liste des articles</button> {/* Bouton de retour */}
        </div>
    );
}

export default SelectedArticle;

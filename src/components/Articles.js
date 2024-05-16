import React, { useState } from 'react';
import { articleList } from '../datas/articles.js';
import '../styles/Articles.css';
import SelectedArticle from './SelectedArticle';

function Articles() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleClick = (id) => {
        setSelectedArticle(id);
    };

    const handleGoBack = () => {
        setSelectedArticle(null);
    };

    if (selectedArticle) {
        const article = articleList.find(article => article.id === selectedArticle);
        return <SelectedArticle article={article} onGoBack={handleGoBack} />;
    }

    return (
        <div className="articles-container">
            {articleList.map(({ name, autheur, avatar, id, text, date }) => (
                <div 
                    key={id} 
                    className="article-container"
                    onClick={() => handleClick(id)}
                >
                    <div className="article-header">
                        <div className="name"><b>{name}</b></div>
                        <div className="author">
                            <p>{autheur}</p>
                            <img src={avatar} alt='avatar-autheur' className='avatar' />
                        </div>
                    </div>
                    <div className="article-content">
                        <p>{text}</p>
                        <p className="date"><b>{date}</b></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Articles;

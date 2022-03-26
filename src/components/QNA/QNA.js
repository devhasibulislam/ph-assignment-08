import React, { useEffect, useState } from 'react';
import './QNA.css';

const QNA = () => {
    const [qna, setQna] = useState([]);
    useEffect(() => {
        fetch('qna.json')
        .then(request => request.json())
        .then(response => setQna(response))
    }, []);
    return (
        <div className='qna-container'>
            {
                qna.map(qa => <QA
                    key={qa.id}
                    qa={qa}
                ></QA>)
            }
        </div>
    );
};

function QA({ qa }) {
    const { question, answer } = qa;
    return (
        <article className='qna'>
            <h2>{question}</h2>
            <p>{answer}</p>
        </article>
    );
}

export default QNA;

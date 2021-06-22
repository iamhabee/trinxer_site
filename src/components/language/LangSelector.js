import React from 'react';

const LangSelector = () => {
    return (
        <nav className="languages">
            <ul className="nav">
                <li className="lang-item current-lang">
                    <a title="En" href={ process.env.PUBLIC_URL + "/" }>En</a>
                </li>

                <li className="lang-item">
                    <a title="Ru" href={ process.env.PUBLIC_URL + "/" }>Ru</a>
                </li>
            </ul>
        </nav>
    );
};

export default LangSelector;

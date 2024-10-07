import React from 'react';


const NotFound: React.FC = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}`;

    return (
        <div className="mockup-browser bg-base-300">
                <div className="mockup-browser-toolbar">
                    <div className="input">{fullUrl}</div>
                </div>
            <div className="bg-base-200 flex justify-center px-4 py-16">Maalesef aradığınız URL'yi bulamadık :/</div>
        </div>
    );
}

export default NotFound;
import React, { PropTypes } from 'react';

function Core({ children }) {
    return (
        <div className="page__container">
            <div className="page__container-view">
                {children}
            </div>
        </div>
    )
}

Core.propTypes = {
    children: PropTypes.element
};

export default Core
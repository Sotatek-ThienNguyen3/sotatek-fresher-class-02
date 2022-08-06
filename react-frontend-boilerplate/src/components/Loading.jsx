/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import ReactLoading from 'react-loading';

const LoadingContainer = ({ children }) => {
    return (
        <LoadingOverlay
            active={false}
            className="overlay-container"
            spinner={<ReactLoading type={'spinningBubbles'} color={'deeppink'} height={100} width={100} />}
            text=""
        >
            {children}
        </LoadingOverlay>
    );
};

export default LoadingContainer;

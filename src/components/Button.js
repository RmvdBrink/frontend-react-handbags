import React from 'react';

function ButtonComponent({buttonText, toBeDisabled}) {
//hier kan je gewonen java script schrijven

//alles wat onder de return komt te staan wordt uitgevoerd in html

    return (
        <>
            <button onClick={() => console.log(buttonText)}
                disabled={toBeDisabled}>
                {buttonText}


            </button>
        </>
    );
}

export default ButtonComponent;
import React from 'react';

function Input({copiedText}) {
    return (
        <div>
            <input type="text" onChange={copiedText} />
        </div>
    );
}

export default Input;
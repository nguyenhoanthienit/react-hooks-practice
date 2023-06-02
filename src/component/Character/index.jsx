import React, { useState, useEffect } from 'react';

function Character() {
    const [character, setCharacter] = useState("");
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    useEffect(() => {
        const characterInterval = setInterval(() => {
            const newChar = characters[Math.floor(Math.random() * characters.length)];
            setCharacter(newChar);
        }, 1000);

        return () => {
            // clean up here
            clearInterval(characterInterval);
        };
    }, []);

    return (
        <div style={{fontSize: "5em"}}>
            {character}
        </div>
    );
}

export default Character;
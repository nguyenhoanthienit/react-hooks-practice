import React, { useState, useEffect } from 'react';

function Cat() {
    const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(CAT_API_URL)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [CAT_API_URL]);

    return (
        <div>
            {data &&
                data.slice(0, 5).map((cat) => {
                    return <p key={cat.id}>Name: {cat.name} - Description: {cat.description}</p>;
                })}
        </div>
    );
}

export default Cat;
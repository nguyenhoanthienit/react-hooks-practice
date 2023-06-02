import React from 'react';

function Country() {
    const COUNTRY_API_URL = "https://restcountries.com/v2/all";
    const [data] = [];

    return (
        <div>
            {data &&
                data.slice(0, 5).map((country) => {
                    return <p key={country.alpha2Code}>Name: {country.name} - Population: {country.population}</p>;
                })}
        </div>
    );
}

export default Country;
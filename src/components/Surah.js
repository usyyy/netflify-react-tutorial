import React, { useState, useEffect } from 'react';

import { getSurahAyahs } from '../apis';

const Surah = ({ surahNumber }) => {
    const [ayahs, setAyahs] = useState([]);

    useEffect(() => {
        getSurahAyahs(surahNumber)
            .then(data => setAyahs(data))
    }, []);

    return (
        <div>
            {
                ayahs.map(({ ayah, ayah_text: ayahText }) => (
                    ayah === 0 ?
                    <h1 key={ ayah } style={{ color: 'red' }}>{ ayahText }</h1>
                    :
                    <h1 key={ ayah } >{ ayahText }</h1>
                ))
            }
        </div>
    );
}

export default Surah;

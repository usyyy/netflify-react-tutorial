import React, { useState, useEffect } from 'react';

import { getAllSurahNames } from '../apis';

const SurahList = ({ setSelectedSurahNumber }) => {
    const [surahs, setSurahs] = useState([]);

    useEffect(() => {
        const fetchData = () => getAllSurahNames()
            .then(data => setSurahs(data));
       
        fetchData();
    }, []);

    return (
        <ul>
            {
                surahs
                    .map(({ surah, surrahname }) => (
                        <li key={ surah } onClick={ () => setSelectedSurahNumber(surah) } >
                            <h1>
                                { surah } { surrahname }
                            </h1>
                        </li>
                    ))
            }
        </ul>
    );
}

export default SurahList;

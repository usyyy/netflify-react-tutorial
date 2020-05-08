import React, { useState, useEffect } from 'react';

import { getAllSurahNames } from '../apis';

const SurahList = () => {
    const [surahs, setSurahs] = useState([]);

    useEffect(() => {
        const fetchData = () => getAllSurahNames()
            .then(data => setSurahs(data));
       
        fetchData();
    }, []);

    return (
        <ul>
            { surahs.map(({ surah, surrahname }) => <li key={ surah }>{ surah } { surrahname }</li>) }
        </ul>
    );
}

export default SurahList;

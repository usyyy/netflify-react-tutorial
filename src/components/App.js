import React, { useState } from 'react';

import SurahList from './SurahList';
import Surah from './Surah';

const App = () => {
    const [selectedSurahNumber, setSelectedSurahNumber] = useState(null);

    return (
        <>
            <a onClick={ () => setSelectedSurahNumber(null) }>Back</a>
            {
                !selectedSurahNumber ?
                    <SurahList setSelectedSurahNumber={ setSelectedSurahNumber } />
                    :
                    <Surah surahNumber={ selectedSurahNumber } />
            }
        </>
    );
};

export default App;

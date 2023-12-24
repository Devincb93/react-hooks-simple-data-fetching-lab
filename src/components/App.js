import React, { useEffect, useState } from 'react';

function App() {
    const [ dogImage, setDogImage] = useState(null);
    const [ isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json()
        .then(data => {
            setDogImage(data.message)
            setIsLoaded(true);}),[])})
        if (!isLoaded) return <p>Loading...</p>
                return (
                    <div>
                        <img src={dogImage} alt="A Random Dog"/>
                    </div>
        )
    };

export default App;
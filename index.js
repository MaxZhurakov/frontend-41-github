//1
import React, { useEffect, useState } from 'react';

const heroes = [
    { name: "Бетмен", power: 80 },
    { name: "Флеш", power: 90 },
    { name: "Кіт у чоботях", power: 40 },
    { name: "Ливоліка", power: 100 }
];

const Academy = () => {
    const [strongHeroes, setStrongHeroes] = useState([]);

    useEffect(() => {
        const filterStrongHeroes = (heroes) => {
            return heroes.filter(hero => hero.power > 50);
        };

        const filteredHeroes = filterStrongHeroes(heroes);
        setStrongHeroes(filteredHeroes);
    }, []);

    return (
        <div id="hero-list">
            {strongHeroes.map((hero, index) => (
                <div key={index}>{hero.name}</div>
            ))}
        </div>
    );
};

export default Academy;

//2
import React, { useState } from 'react';

const MaskGenerator = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [masks, setMasks] = useState([]);

    const generateMask = () => {
        setMasks([...masks, { name, color }]);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={generateMask}>Готово!</button>
            <div id="mask-container">
                {masks.map((mask, index) => (
                    <div
                        key={index}
                        className="mask"
                        style={{ backgroundColor: mask.color }}
                    >
                        {mask.name}
                    </div>
                ))}
            </div>
            <style jsx>{`
                .mask {
                    padding: 10px;
                    margin: 5px;
                    border: 1px solid #000;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
};

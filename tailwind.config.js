const generateFontRems = (min = 8, max = 24) => {
    const results = [];

    for (let i = min; i <= max; i++) {
        results.push(
            [i, `${i}rem`],
            [`${i}/25`, `${i}.25rem`],
            [`${i}/5`, `${i}.5rem`],
            [`${i}/75`, `${i}.75rem`]
        );
    }

    return Object.fromEntries(results);
};

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ['Gotham Narrow SSm A', 'Gotham Narrow SSm B'],
            heading: ['Gotham SSm A', 'Gotham SSm B'],
        },
        extend: {
            minWidth: generateFontRems(4),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

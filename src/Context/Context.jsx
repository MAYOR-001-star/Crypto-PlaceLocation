import React from 'react';

// Create the context and capitalize the name (CoinContext is already good)
const CoinContext = React.createContext();

export const CoinContextProvider = ({ children }) => {
    const [allCoin, setAllCoin] = React.useState([]);
    const [currency, setCurrency] = React.useState({
        name: 'usd',
        symbol: '$',
    });

    // Function to fetch data based on the selected currency
    const fetchData = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-DYYA8hc8pMdatz7tLLSd5f1K',
            },
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then((res) => res.json())
            .then((res) => setAllCoin(res))
            .catch((err) => console.error(err));
    };

    // UseEffect to fetch data when currency changes
    React.useEffect(() => {
        fetchData();
    }, [currency]);

    // Provide the context value to children components
    const contextValue = { allCoin, currency, setCurrency };
    return <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>;
};

// Named export for CoinContext (good practice for consistency)
export { CoinContext };

import React from 'react';

class Menu extends React.Component {
    render() {
        const items = ['rice', 'chicken', 'cookie'];
        return(
            <ol>
                <h2>Menu:</h2>
                {items.map( item => {
                    return <li>{item}</li>
                })}
            </ol>
        );
    }
}

export default Menu;

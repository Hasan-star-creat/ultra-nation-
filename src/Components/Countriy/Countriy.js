import React from 'react';

const Countriy = (props) => {
    const {name,flag,population,region} = props.counryData;
    const flagStyle = {width:'100px',height:'100px'};
    const cartStyle = {border:'1px solid red',margin:'5px'}
     const addcountry = props.handlerCountry;
    return (
        <div style={cartStyle}>
            <h2>This is a {name}</h2> 
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <img style={flagStyle} src={flag} alt=""/><br></br>
            <button onClick={() => addcountry(props.counryData)}>Add country</button>
            
        </div>
    );
};

export default Countriy;
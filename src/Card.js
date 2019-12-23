import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="dib tc bg-light-green br3 ma2 pa3 grow">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
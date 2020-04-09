import * as React from 'react';

const Counter: React.FC<{name: string}> = props => {
    const {name} = props;
    return <p>{name} counter</p>
}

export default Counter;

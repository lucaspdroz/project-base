import React, { useEffect, useState } from 'react';
import redIcon from '../../assets/images/redcircle.png';
import greenIcon from '../../assets/images/greencircle.png';

export default function IconChanger() {
    // 1. React hooks state setup
    const [count, setCount] = useState(0);

    //2. increment count function
    const increment = () => {
        setCount(count + 1);
    };
    //3. decrement count function
    const decrement = () => {
        setCount(count - 1);
    };
    //callback function passed to useEffect
    useEffect(() => {
        const faviconUpdate = async () => {
            //grab favicon element by ID
            const favicon = document.getElementById("favicon");
            //check count value, if below 0 we change href property to our red circle image path
            if (count < 0) {
                favicon.href = redIcon;
                console.log(favicon);
            }
            //if above 0, we set back to green
            else {
                favicon.href = greenIcon;
            }
        };
        //run our function here
        faviconUpdate();

        //2nd paramenter passed to useEffect is dependency array so that this effect only runs on changes to count
    }, [count]);
    //4. html
    return (
        <div className="container-fluid">
            <h1>Dynamic Favicon Tutorial</h1>
            <h2>{count}</h2>
            <button className="btn btn-success" onClick={increment}>
                increase
      </button>
            <button className="btn btn-danger" onClick={decrement}>
                decrease
      </button>
        </div>
    );
}



// const contact = () => <div>Contact</div>;

// export default contact;
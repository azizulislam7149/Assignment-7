import React, { useEffect, useState } from 'react';

const Selected = () => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        console.log(selected);
    }, [selected]); // Add selected to run the effect when it changes.

    return (
        <div>
            {/* Your component's content */}
        </div>
    );
};

export default Selected;
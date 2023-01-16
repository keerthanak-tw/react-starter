import React from "react";

const DemoOutput = (props) => {
    console.log('Demo out running');
    return <p>{props.show ? 'This is new!' : ''}</p>
};

export default React.memo(DemoOutput);
// Previous props are saved and compared. Only if props are changed, component is re-evalated
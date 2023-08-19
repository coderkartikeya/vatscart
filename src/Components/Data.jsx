import React from "react";

const info=[];

const Data=(props)=>{
    const ob={
        apiType:`${props.api}`,
        data:`${props.dt}`,
    }
    info.push(ob);

    console.log(ob);

    


    return ob;
}

export default Data;
export {info};
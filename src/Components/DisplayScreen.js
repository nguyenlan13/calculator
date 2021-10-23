import React from "react";

export default function DisplayScreen({equation, total}) {

    return(
        <>
            <div className="screen2">{equation}</div>
            <div className="screen">{total}</div>
        </>
    )
}
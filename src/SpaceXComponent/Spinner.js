import React from "react";
import loading from './loading.gif'

export default function Spinner(){
    return(
        <div className="mt-3">
            <img src={loading} alt="loading.gif" />
        </div>
    )
}
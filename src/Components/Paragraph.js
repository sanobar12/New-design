import React from "react";


export const Paragraph =(props)=>{
    const {className,children,textColor} = props

    return(
        <p style={{color: textColor}} className={`customPara ${className}`}>{children}</p>
    )
}
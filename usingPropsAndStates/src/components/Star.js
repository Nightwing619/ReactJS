import react from "react";
export default function Star(props){
    let starIcon = props.isFilled ? "../images/star-filled.png" : "../images/star-empty.png"
    return(
        <img src={starIcon} 
            className="star--icon"
            onClick={props.handleClick}
        />  
    )
}
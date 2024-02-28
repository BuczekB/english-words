

const Button  = ({text, handleChange, style, singleId}) =>{
    return(
        <button onClick={handleChange} className={style} id={singleId}>
           {text}
        </button>
    )
}


export default Button

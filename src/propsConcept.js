// Props helps to pass data from parent component to the child component.

// Single element as prop
const Props=(props)=>{
    return(
        <h1>Name is printed using props concept {props.name}</h1>
    )
}
export default Props;

// Multiple elements as props
export const MultipleElementsasProps=(props)=>{
    return(
        <>
            <h1>Name: {props.name}</h1>
            <h1>University: {props.university}</h1>
        </>
    )
}

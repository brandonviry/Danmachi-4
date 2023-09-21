
import "./Navi.css"

function Navi(props:any){


    return (
        <nav style={{margin:"1em"}}>
            <ul  style={props.sx}>
            {
                props.elements.map((elt:[])=>{
                    return <li ><a href={"#"+elt}>{elt}</a></li>
                })
            }</ul>
            </nav>
        
    )
}

export default Navi;
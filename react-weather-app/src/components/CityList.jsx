import { Link } from "react-router-dom";
/**
 * 
 * REFERENCES
 * https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
 */
export default function CityList({cities}){
 
   
    return(
        <div className="citylist">
            {Object.keys(cities).map((keyName,keyIndex)=>(
                <ul key={keyIndex}>
                    <li style={{listStyle:'none'}} key={keyIndex}>
                        <Link key={keyIndex} to = {`/forecast/${keyName}`}>

                            {keyName}

                        </Link>
                    </li>
                </ul>
                ))}
        </div>
    );
}
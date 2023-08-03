import {useNavigate} from 'react-router-dom';
const SearchResultsRow = ({house}) => {

    let navigate = useNavigate();


    let onClickHandler = () => {
        console.log("id is"+house._id);
        navigate(`/searchedhouse/${house._id}`);
    }

    return ( 
        <tr onClick={onClickHandler}>
            <td>{house.address}</td>
            <td>$ {house.price}</td>
        </tr>
     );
}
 
export default SearchResultsRow;
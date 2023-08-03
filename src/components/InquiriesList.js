import { useEffect, useState } from "react";
import axios from 'axios';
const InquiriesList = () => {

    let [enquiries,setEnquiries] = useState([]);

    //get list of enquiries from DB
    useEffect( () =>{
        async function getEnquiries(){
            try {
              const response = await axios.get('http://localhost:3002/enquiries');
              //console.log('called and waiting');
             // console.log(response);
              let data = await response.data;
              setEnquiries(data);
              console.log("*******************");
              console.log(data);
             
            } catch (error) {
              console.error(error);
            }
          }
          getEnquiries();
    },[]);

    return ( 
        <div>
            <h4 className="mt-4"> List of Enquiries </h4>
                  <div>
            
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                        filteredHouses.map((elem) => {
                          return <SearchResultsRow house={elem}/>
                        })
                        }                         */}

                        {
                        enquiries.map((elem) => {
                          return <tr key={elem._id}> 
                                <td> {elem.ename}</td>
                                <td> {elem.email}</td>
                                <td> {elem.remarks}</td>
                            </tr>
                        })
                        }                        
                        
                    </tbody>
                </table>
            </div>
            

        </div>
        </div>
     );
}
 
export default InquiriesList;
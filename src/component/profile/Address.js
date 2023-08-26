import { useEffect, useState } from "react"
import AddressCard from "./AddressCardComponent"
import { URLUSER } from "../../utils/config"
import axios from "axios"
const Address = ()=> {
    const[addresses,setAddresses] = useState([]);
    useEffect(()=>{
        getAllAddresses();

    },[])
    const getAllAddresses = () => {
        const addressUrl = `${URLUSER}/user/getAddress/userId/${sessionStorage.id}`;
        axios.get(addressUrl,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.tokenId}`
            }
        }).then((response) => {
            setAddresses(response.data.data)
            //console.log(response.data.data)
        }).catch((err) => {
            console.log("in error")
        })
    }

    

    return (
        <div>
           <div className="row">
           <h3>My Addresses</h3>
           </div>
            <div className="row">
            {addresses.map((address) => {
              return <AddressCard addr={address} />;
            })}
            {
                console.log(addresses)
            }
            {/* <AddressCard/>
            <AddressCard/> */}
            </div>
        </div>
    )
}

export default Address
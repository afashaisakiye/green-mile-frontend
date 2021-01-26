import React , { useEffect , useState } from 'react'
import SupplierSuggestionsInput from './../../components/SupplierSuggestionsInput'
import ReceiverSuggestionInput from './../../components/ReceiverSuggestionInput'
import { suppliers_suggetions } from "./../../api/suppliers";

import { useSelector } from "react-redux";


function AddCard({ close_form, onsubmit }) {
    const token = useSelector(state => state.authentication.token)  
    const [suppliers, setsuppliers] = useState([])
    const [receivers, setreceivers] = useState([])

    const setReciversSuggestions= (data) =>{
        console.log(data)
        //get recievers from api
        //set the data to setreceivers
    }

    useEffect(() => {
        suppliers_suggetions(token).then((e)=>setsuppliers(e))
        return () => {
        }
      }, [token])

    return (
        <div draggable="true" onDragStart={(e) => e.preventDefault()} className="add-card">
            <div className="wrapper">
                <form>
                    <SupplierSuggestionsInput onSuggetionSelect={setReciversSuggestions} suppliers={suppliers} />
                    <div className="form-group">
                        <input type="text" className="form-control" id="package-name" aria-describedby="emailHelp" placeholder="package name" />
                    </div>
                    <ReceiverSuggestionInput receivers={receivers} onSuggetionSelect={(data) => console.log(data)} />
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Type</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Parcel</option>
                            <option>Soft</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="package-name" aria-describedby="emailHelp" placeholder="weight in kg" />
                    </div>
                    <div className="add-package-buttons">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button onClick={close_form} type="submit" className="btn btn-primary">DISCARD</button>
                    </div>
                </form>
                <br />
            </div>
        </div>
    )
}

export default AddCard

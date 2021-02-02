import React , { useEffect , useState } from 'react'
import SupplierSuggestionsInput from './../../components/SupplierSuggestionsInput'
import ReceiverSuggestionInput from './../../components/ReceiverSuggestionInput'

//apis used
import { suppliers_suggetions  } from "./../../api/suppliers";
import { receiver_suggetions } from "./../../api/receiver";
import { useSelector } from "react-redux";
import ExpandableTextInput from '../../components/ExpandableTextInput';
import PackageInfo from "./PackageInfo";

function AddCard({ close_form, onsubmit }) {
    const token = useSelector(state => state.authentication.token)  
    const [suppliers, setsuppliers] = useState([])
    const [receivers, setreceivers] = useState([])

    const setReciversSuggestions= (data) =>{
        receiver_suggetions(token,data.id).then((data)=>setreceivers(data))
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
                    <div className="package-info">
                        <ExpandableTextInput className="form-control" id='package-info' label="Package Info" placeholder="Package Name"   />
                        <div className="side-form">
                            <PackageInfo />
                        </div>
                    </div>
                    <SupplierSuggestionsInput id="package_supplier" onSuggetionSelect={setReciversSuggestions} suppliers={suppliers} />
                    <ReceiverSuggestionInput receivers={receivers} onSuggetionSelect={(data) => console.log(data)} />
        
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

import React, {useState} from 'react'
import { formInputToObject } from './../../utils/func'

const AddPackageModel = ({ closeAction }) => {
    const [state, setstate] = useState({
        "state":3
    })

    const updateState=(e)=>{
        setstate(formInputToObject(e.target.name,e.target.value,state))
    }
    return (
        <div className="add-package">
            <div>
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New Package</h5>
                            <button type="button" className="close" onClick={closeAction}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" onChange={updateState} id="inputAddress" placeholder="Package Name" />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputEmail4">Type</label>
                                        <select onChange={updateState} name="type" id="inputState" className="form-control">
                                            <option selected>Envelope</option>
                                            <option >Freezed</option>
                                            <option >Pacel</option>
                                            <option >Soft Package</option>
                                            <option>Air</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Size</label>
                                        <div className="form-row">
                                            <div className="col">
                                                <select onChange={updateState} name="size.units" id="inputState" className="form-control">
                                                    <option selected>cm</option>
                                                    <option >m</option>
                                                    <option >ft</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <input type="number" onChange={updateState} name="size.length" className="form-control" placeholder="Length" />
                                            </div>
                                            <div className="col">
                                                <input type="number" onChange={updateState} name="size.width" className="form-control" placeholder="Width" />
                                            </div>
                                            <div className="col">
                                                <input type="number" onChange={updateState} name="size.height" className="form-control" placeholder="Height" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputPassword4">Weight</label>
                                        <div  className="form-row">
                                            <div className="col">
                                                <select onChange={updateState} name="weight.units" id="inputState" className="form-control">
                                                    <option selected>cm</option>
                                                    <option >m</option>
                                                    <option >ft</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <input onChange={updateState} name="weight.value" type="number" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                                <label htmlFor="">Receiver's Information</label>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" onChange={updateState} name="shipping.firstName" className="form-control" id="inputEmail4" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input onChange={updateState} name="shipping.secondName" type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <hr />
                                <label>Contact Information</label>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input onChange={updateState} name="shipping.phone" type="tel" className="form-control" id="inputEmail4" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input onChange={updateState} name="shipping.email" type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputState">Country</label>
                                        <select onChange={updateState} name="shipping.country" id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option value="ug" >Uganda</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputState">Region</label>
                                        <input  onChange={updateState} name="shipping.region" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City /District</label>
                                        <input onChange={updateState} name="shipping.district" type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">State</label>
                                        <input onChange={updateState} name="shipping.state" type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input onChange={updateState} name="shipping.zip" type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Address</label>
                                    <input onChange={updateState} name="shipping.address" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Notes</label>
                                    <textarea onChange={updateState} name="decription" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                                </div>
                            </form>



                        </div>
                        <div className="modal-footer">
                            <button onClick={closeAction} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPackageModel

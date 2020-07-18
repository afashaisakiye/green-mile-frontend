import React from 'react'

const AddPackageModel = ({closeAction}) => {
    return (
        <div className="add-package">
                <div >
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">New Package</h5>
                        <button type="button" class="close" onClick={closeAction}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="inputAddress" placeholder="Package Name" />
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">Type</label>
                                <select id="inputState" class="form-control">
                                <option selected>Envelope</option>
                                <option >Freezed</option>
                                <option >Pacel</option>
                                <option >Soft Package</option>
                                <option>Air</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Size</label>
                                <div className="form-row">
                                    <div className="col">
                                <select id="inputState" class="form-control">
                                    <option selected>cm</option>
                                    <option >m</option>
                                    <option >ft</option>
                                </select>
                                </div>
                                <div className="col">
                                    <input type="number" class="form-control"  placeholder="Length" />
                                </div>
                                <div className="col">
                                    <input type="number" class="form-control"  placeholder="Width" />
                                </div>
                                <div className="col">
                                    <input type="number" class="form-control"  placeholder="Height" />
                                </div>
                                </div>
                            </div>

                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Weight</label>
                                <div className="form-row">
                                <div className="col">
                                <select id="inputState" class="form-control">
                                    <option selected>cm</option>
                                    <option >m</option>
                                    <option >ft</option>
                                </select>
                                </div>
                                <div className="col">
                                    <input type="number" class="form-control"  placeholder="Length" />
                                </div>
                                </div>
                            </div>
                        
                        </div>
                        <hr/>
                        <label htmlFor="">Receiver's Information</label>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control"  placeholder="Last Name" />
                            </div>
                        </div>
                        <hr/>
                        <label>Contact Information</label>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="tel" class="form-control" id="inputEmail4" placeholder="Phone Number" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control"  placeholder="Email" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Country</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="ug" >Uganda</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                            <label for="inputState">Region</label>
                                <input type="text" class="form-control"  />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputCity">City /District</label>
                            <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="inputAddress2">Address</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        </form>



                    </div>
                    <div class="modal-footer">
                        <button onClick={closeAction} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default AddPackageModel

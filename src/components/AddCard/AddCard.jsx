import React from 'react'

function AddCard({close_form}) {
    return (
        <div draggable="true" onDragStart={(e) => e.preventDefault()} className="add-card">
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="package-name" aria-describedby="emailHelp" placeholder="package name" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="package-name" aria-describedby="emailHelp" placeholder="receiver email" />
                    </div>
                    <div class="form-group">
                            <label for="exampleFormControlSelect1">Type</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Parcel</option>
                                <option>Soft</option>
                            </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="package-name" aria-describedby="emailHelp" placeholder="supplier username" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="package-name" aria-describedby="emailHelp" placeholder="weight in kg" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button onClick={close_form} type="submit" className="btn btn-primary">DISCARD</button>
                </form>
            </div>
        </div>
    )
}

export default AddCard

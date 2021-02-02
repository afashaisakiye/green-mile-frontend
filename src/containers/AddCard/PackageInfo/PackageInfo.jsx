import React from 'react'

const PackageInfo = () => {
    return (
        <div>
            <div class="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="weight" />
                <div className="row g-3" >
                    <div class="col-auto">
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="weight" />
                    </div>
                    <div class="col-auto">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                    </div>

                    <div class="col-auto">
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageInfo

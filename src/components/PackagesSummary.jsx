import React from 'react'

export default function PackagesSummary() {
    return (
        <div className="card g-pack-sum">
            <h4>Packages</h4>
            <ul className="g-package-status-li" >
                <li>To City Hub <span className="badge badge-primary">4</span></li>
                <li>Re-bundling <span className="badge badge-secondary">8</span></li>
                <li>On Fleet <span className="badge badge-info">6</span></li>
                <li>Delivered <span className="badge badge-success">4</span></li>
            </ul>
            <div className="total" ><h5>Total</h5>  <span className="badge badge-danger">22</span></div>
        </div>
    )
}

import React from 'react'

export default function PackageList() {
    return (
        <table className="table table-bordered table-striped table-borderless package-list">
        <thead>
            <tr>
            <th >Suplier</th>
            <th >Receiver Email</th>
            <th>Pacakge No.</th>
            <th >Status</th>
            <th >Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jumia</td>
                <td>afashaisakiye@gmail.com</td>
                <td>#00405066</td>
                <td>
                <select>
                        <option value="">Re-Bundling</option>
                        <option defaultValue value="">On Fleet</option>
                        <option value="">Delivered</option>
                    </select>
                </td>
                <td>456794 Ugx</td>
            </tr>
        </tbody>
    </table>
    )
}

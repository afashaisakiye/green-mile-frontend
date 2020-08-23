import React from 'react'
import Select from 'react-select'
import { Line } from 'react-chartjs-2';
export default function Index() {
    const billingoptions=[
        {
            label:"Today",
            value:"today"
        },
        {
            label:"Weekly",
            value:"week"
        },
        {
            label:"Monthly",
            value:"month"
        }
    ]

    const billingdata= {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '',
            data: [12, -1, 3, -7, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return (
        <div className="g-col no-sumary-card">
            <div className="welcome-note">
                <p>Your package progress at glance.</p>
                <span>28, August 2020</span>
            </div>
            <div className="row">
                <div className="card col-md-4">
                    <div class="card-header">
                        <span>Billling Summary</span>
                        <div><Select options={billingoptions} defaultValue={{label:"Today",value:"today"}} /></div>
                    </div>
                    <div class="card-body">
                        <p>next: 400 UGX</p>
                        <p>last: 6000 UGX</p>
                        <p>Refunded: 3000 UGX</p>
                        <h5>Total Spent: 50,000 UGX</h5>
                    </div>
                </div>
                <div className="card col-md-8">
                    <div class="card-header">
                        <span>Packages Summary</span>
                        <div><Select options={billingoptions} defaultValue={{label:"Today",value:"today"}} /></div>
                    </div>
                    <div class="card-body">
                        <Line data={billingdata} />
                    </div>
                </div>
            </div>
        </div>
    )
}

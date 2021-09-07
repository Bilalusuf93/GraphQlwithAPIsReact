import React from 'react'

function LaunchItem(props) {
    const { launch } = props;
    if (launch.length < 1) return <p>N/A :(</p>
    return (

        <div className='card card-body mb-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <h4>Mission: {launch.mission_name}</h4>
                    <p>Date: {launch.launch_date_local}</p>
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-primary'>Launch Details</button>
                </div>
            </div>

        </div>
    )
}

export default LaunchItem

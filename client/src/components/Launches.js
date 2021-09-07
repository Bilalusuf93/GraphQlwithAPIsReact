import React, { Component } from 'react'
import { gql, useQuery } from '@apollo/client'
import LaunchItem from './LaunchItem';


const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
  }
`;
export function Launches() {

    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    <div>
        <h1 className='display-4 my-3'>Launches</h1>
    </div>
    if (loading) return <p>loading...</p>
    if (error) return <p>Error :(</p>
    return (
       <>{

        data.launches.map((launch, i) => (
            <LaunchItem key={i} launch={launch}/>
        ))
       }
       </>
    )

}

export default Launches

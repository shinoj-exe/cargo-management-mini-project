import React,{useState,useEffect} from 'react'

import './FlightDetails.css'

const FlightDetails = () => {
    const [flights, setFlights] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [distances, setDistance] = useState([]);
    const [passengers, setPassengers] = useState([]);
    const [bookings, setBookings] = useState([]);



      useEffect(()=>{
        let res= fetch('https://flight-cargo-server.onrender.com/login/admin/showFlights',
      {
      headers: {
      'Content-type': 'application/json'
      }
      })
      .then (response => response.json())
      .then(data=>setFlights(data));
    //   .then(data=>console.log(data))
      // .then (data=>console.log(data[0]));
      // .then(data=>{
      //   setFlights(data);
      //   console.log(data);
      // });
      // console.log(res.json()); 
      // .then(data=>setFlights(data));
      // const flightData=data;
      // setFlights(flightData)
    //   console.log(flights);
      },[])

      useEffect(()=>{
        let res= fetch('https://flight-cargo-server.onrender.com/login/admin/showRoutes',
      {
      headers: {
      'Content-type': 'application/json'
      }
      })
      .then (response => response.json())
      .then(data=>setRoutes(data));
    //   .then(data=>console.log(data))
      // .then (data=>console.log(data[0]));
      // .then(data=>{
      //   setFlights(data);
      //   console.log(data);
      // });
      // console.log(res.json()); 
      // .then(data=>setFlights(data));
      // const flightData=data;
      // setFlights(flightData)
    //   console.log(flights);
      },[])

      useEffect(()=>{
        let res= fetch('https://flight-cargo-server.onrender.com/login/admin/showDistances',
      {
      headers: {
      'Content-type': 'application/json'
      }
      })
      .then (response => response.json())
      .then(data=>setDistance(data));
    //   .then(data=>console.log(data))
      // .then (data=>console.log(data[0]));
      // .then(data=>{
      //   setFlights(data);
      //   console.log(data);
      // });
      // console.log(res.json()); 
      // .then(data=>setFlights(data));
      // const flightData=data;
      // setFlights(flightData)
    //   console.log(flights);
      },[])

      useEffect(()=>{
        let res= fetch('https://flight-cargo-server.onrender.com/login/admin/showPassenger',
      {
      headers: {
      'Content-type': 'application/json'
      }
      })
      .then (response => response.json())
      .then(data=>setPassengers(data));
    //   .then(data=>console.log(data))
      // .then (data=>console.log(data[0]));
      // .then(data=>{
      //   setFlights(data);
      //   console.log(data);
      // });
      // console.log(res.json()); 
      // .then(data=>setFlights(data));
      // const flightData=data;
      // setFlights(flightData)
    //   console.log(flights);
      },[])

      useEffect(()=>{
        let res= fetch('https://flight-cargo-server.onrender.com/login/admin/showBookings',
      {
      headers: {
      'Content-type': 'application/json'
      }
      })
      .then (response => response.json())
      .then(data=>setBookings(data));
    //   .then(data=>console.log(data))
      // .then (data=>console.log(data[0]));
      // .then(data=>{
      //   setFlights(data);
      //   console.log(data);
      // });
      // console.log(res.json()); 
      // .then(data=>setFlights(data));
      // const flightData=data;
      // setFlights(flightData)
    //   console.log(flights);
      },[])

  return (
    <div>
        <h1 className='heading'> Flight Details</h1>
        {
            <div className='table'>
                <table>
                    <tr>
                        <th>Flight Id</th>
                        <th>Flight Name</th>
                        <th>Flight Space </th>
                        <th>Rating</th>
                    </tr>
                    {
                        flights&&
                        flights.map((flight)=>(
                        <tr>
                            <td>{flight.fid}</td>
                            <td>{flight.fname}</td>
                            <td>{flight.fspace}</td>
                            <td>{flight.frating}</td>
                        </tr>
                        ))

                    }
                </table>
            </div>
        }

        <h1 className='heading'> Route Details</h1>
        {
            <div className='table'>
                <table>
                    <tr>
                        <th>Route Id</th>
                        <th>Flight Id</th>
                        <th>Travel Id </th>
                        <th>Flight Date</th>
                        <th>Flight Time</th>
                        <th>Remaining Space</th>
                    </tr>
                    {
                        routes&&
                        routes.map((route)=>(
                        <tr>
                            <td>{route.rid}</td>
                            <td>{route.fid}</td>
                            <td>{route.tid}</td>
                            <td>{route.fdate.toString().split('T')[0]}</td>
                            <td>{route.ftime}</td>
                            <td>{route.rem_space}</td>
                        </tr>
                        ))

                    }
                </table>
            </div>
        }


        <h1 className='heading'> Distance Details</h1>
        {
            <div className='table'>
                <table>
                    <tr>
                        <th>Travel Id</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Distance</th>
                    </tr>
                    {
                        distances&&
                        distances.map((distance)=>(
                        <tr>
                            <td>{distance.tid}</td>
                            <td>{distance.source}</td>
                            <td>{distance.dest}</td>
                            <td>{distance.distance}</td>
                        </tr>
                        ))

                    }
                </table>
            </div>
        }


        <h1 className='heading'> Passenger Details</h1>
        {
            <div className='table'>
                <table>
                    <tr>
                        <th>Passenger Id</th>
                        <th> Name</th>
                        <th>Gender </th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                    {
                        passengers&&
                        passengers.map((passenger)=>(
                        <tr>
                            <td>{passenger.pid}</td>
                            <td>{passenger.pname}</td>
                            <td>{passenger.pgender}</td>
                            <td>{passenger.email}</td>
                            <td>{passenger.page}</td>
                        </tr>
                        ))
                    }
                </table>
            </div>
        }



        <h1 className='heading'> Booking Details</h1>
        {
            <div className='table'>
                <table>
                    <tr>
                        <th>Booking Id</th>
                        <th>Passenger Id</th>
                        <th>Space Required</th>
                        <th>Route ID</th>
                        <th>Payment</th>
                    </tr>
                    {
                        bookings&&
                        bookings.map((booking)=>(
                        <tr>
                            <td>{booking.bid}</td>
                            <td>{booking.pid}</td>
                            <td>{booking.space_required}</td>
                            <td>{booking.rid}</td>
                            <td>{booking.payment}</td>
                        </tr>
                        ))

                    }
                </table>
            </div>
        }
    </div>

  )
}

export default FlightDetails
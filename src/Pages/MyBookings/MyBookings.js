import React,{useState,useEffect} from 'react'
import './MyBookings.css'

const MyBookings = () => {
    const [pid, setPid] = useState(0);
    const [myFlights, setMyFlights] = useState([]);



    useEffect(() => {
        const pid = JSON.parse(localStorage.getItem('pid'));
        if (pid) {
        setPid(pid);
        }
        console.log(pid);
      }, []);

      useEffect(()=>{
        let res= fetch('https://flight-cargo-server.onrender.com/myBookings',
      {
      headers: {
      'Content-type': 'application/json'
      }, method: 'POST',
      body: JSON.stringify({ 
        pid:pid
      })
      })
      .then (response => response.json())
      .then(data=>setMyFlights(data))
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
      },)

  return (
    <div>
        <h1 className='heading'>My Bookings</h1>

        {
            <div className='table'>
                <table>
                    <tr>
                        <th>Flight Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Date(yyyy/mm/dd)</th>
                        <th>Flight Time</th>
                        <th>Space Required</th>
                        <th>Payment</th>
                    </tr>
                    {
                        myFlights&&
                        myFlights.map((flight)=>(
                        <tr>
                            <td>{flight.fname}</td>
                            <td>{flight.source}</td>
                            <td>{flight.dest}</td>
                            <td>{flight.fdate.toString().split('T')[0]}</td>
                            <td>{flight.ftime}</td>
                            <td>{flight.space_required}</td>
                            <td>{flight.payment}</td>
                        </tr>
                        ))

                    }
                </table>
            </div>
        }
    </div>

  )
}

export default MyBookings
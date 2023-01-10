import React,{useState} from 'react'
import './AdminPage.css'

const AdminPage= () => {

  const [flightid, setFlightId] = useState(0);
  const [flightname, setFlightName] = useState('');
  const [flightspace, setFlightSpace] = useState(0);
  const [flightrating, setFlightRating] = useState(0);


  const [rid,setRid]=useState(0);
  const [tid,setTid]=useState(0);
  const [fid,setFid]=useState(0);
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');


  const [travelid, setTravelId] = useState(0);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(0);

  const handleFlightId = (e) => {
    setFlightId(e.target.value);
    // setSubmitted(false);
  };
  const handleFlightName = (e) => {
    setFlightName(e.target.value);
    // setSubmitted(false);
  };
  const handleFlightSpace = (e) => {
    setFlightRating(e.target.value);
    // setSubmitted(false);
  };
  const handleFlightRating = (e) => {
    setFlightSpace(e.target.value);
    // setSubmitted(false);
  };

  const handleTravelId = (e) => {
    setTravelId(e.target.value);
    // setSubmitted(false);
  };
  const handleOrigin = (e) => {
    setOrigin(e.target.value);
    // setSubmitted(false);
  };
  const handleDestination = (e) => {
    setDestination(e.target.value);
    // setSubmitted(false);
  };
  const handleDistance = (e) => {
    setDistance(e.target.value);
    // setSubmitted(false);
  };

  const handlerid = (e) => {
    setRid(e.target.value);
    // setSubmitted(false);
  };
  const handletid= (e) => {
    setTid(e.target.value);
    // setSubmitted(false);
  };
  const handletime = (e) => {
    setTime(e.target.value);
    // setSubmitted(false);
  };
  const handledate = (e) => {
    setDate(e.target.value);
    // setSubmitted(false);
  };
  const handlefid = (e) => {
    setFid(e.target.value);
    // setSubmitted(false);
  };


  
  const addFlight=async ()=>{
    let res = await fetch("https://flight-cargo-server.onrender.com/login/admin/insertFlights", {
    headers: {
      'Content-type': 'application/json'
    }, 
    method: "POST",
    body: JSON.stringify({
      fid:flightid,
      fname:flightname,
      fspace:flightspace,
      frating:flightrating,
    }),
    });

    // let resJson = await res.json();
    console.log(res);
    if (res.status === 201) {
      setFlightId(0);
      setFlightName('');
      setFlightRating(0);
      setFlightSpace(0);
      alert("Flight Added")
        } else {
          // setMessage("Some error occured");
        }
  }

  const handleAddFlight=(e)=>{
    e.preventDefault();
    addFlight();
  }

  const addDistance=async ()=>{
    let res = await fetch("https://flight-cargo-server.onrender.com/login/admin/insertDistances", {
    headers: {
      'Content-type': 'application/json'
    }, 
    method: "POST",
    body: JSON.stringify({
      tid:travelid,
      source:origin,
      dest:destination,
      distance:distance,
    }),
    });

    // let resJson = await res.json();
    console.log(res);
    if (res.status === 201) {
      setDestination('');
      setDistance(0);
      setTravelId(0);
      setOrigin('');
      alert("Distance Added")
        } else {
          // setMessage("Some error occured");
        }
  }

  const handleAddDistance=(e)=>{
    e.preventDefault();
    addDistance();
  }

  const addTrip=async ()=>{
    let res = await fetch("https://flight-cargo-server.onrender.com/login/admin/insertRoutes", {
    headers: {
      'Content-type': 'application/json'
    }, 
    method: "POST",
    body: JSON.stringify({
      rid:rid,
      fid:fid,
      tid:tid,
      fdate:date,
      ftime:time,
    }),
    });

    // let resJson = await res.json();
    console.log(res);
    if (res.status === 201) {
      // setDestination('');
      // setDistance(0);
      // setTravelId(0);
      // setOrigin('');
      alert("New Route Added")
        } else {
          // setMessage("Some error occured");
        }
      if(res.status===400){
        alert("ERROR: Please check foreign key constraint! (Hint: Check if PID,TID are Available")
      }
  }

  const handleAddTrip=(e)=>{
    e.preventDefault();
    addTrip();
  }


  return (
    <div >
       <p className="textColour">ADMIN PANEL</p>
      <div className="booking">
          <button className='btn' ><a href="/alldetails">Get All Current Details</a></button>
          <h3 className="text">Flight Details</h3>
          <form className="form">
            <label>
              Flight ID :
              <input  type="number"  onChange={handleFlightId} name="name" placeholder='FLight-ID' required />             
            </label>
            <label>
              Flight Name :
              <input type="text" name="name" onChange={handleFlightName} placeholder='Flight-Name' required />             
            </label>
            <label>
              Flight Space :
              <input type="number" name="name" onChange={handleFlightSpace} placeholder='Total Space' required />             
            </label>
            <br />
            <label>
              Flight Rating :
              <input type="number" name="name" onChange={handleFlightRating} placeholder='Rating' required />             
            </label>
            <br />
            <button className="btn" onClick={handleAddFlight} variant="contained">Add Flight</button>
          </form>
          <div style={{ borderTop: "2px solid grey ", marginLeft: 20, marginRight: 20 }}></div>
          <h3 className="text">Trip Details</h3>
          <form className="form">
          <label>
              Route ID :
              <input type="number" onChange={handlerid} name="name" placeholder="R-ID"/>             
            </label>
            <label>
              Flight ID :
              <input type="number" name="name" onChange={handlefid} placeholder="F-ID"/>             
            </label>
            <label>
              Travel ID :
              <input type="number" name="name" onChange={handletid} placeholder="T-ID"/>             
            </label>
            <label>
              <br />
              Date of Flight :
              <input type="date" onChange={handledate} name="name"/>             
            </label>
            <label>
              Time of Flight :
              <input type="time" onChange={handletime} name="name"/>             
            </label>
            <br />
            <button className="btn" onClick={handleAddTrip} variant="contained">Add Routes</button>
          </form>
          <div style={{ borderTop: "2px solid grey ", marginLeft: 20, marginRight: 20 }}></div>
          <div style={{ borderTop: "2px solid grey ", marginLeft: 20, marginRight: 20 }}></div>
          <h3 className="text">Distance Details</h3>
          <form className="form">
          <label>
              Travel ID :
              <input type="number" onChange={handleTravelId} name="name" placeholder="T-ID"/>             
            </label>
            <label>
              Origin Airport :
              <input type="text" onChange={handleOrigin} name="name" placeholder=""/>             
            </label>
            <label>
               Destination Airport :
              <input type="text" onChange={handleDestination} name="name" placeholder=""/>             
            </label>
            <label>
              <br />
              Distance :
              <input type="number" onChange={handleDistance} name="name"/>             
            </label>
            
            <br />
            <button className="btn" onClick={handleAddDistance} variant="contained">Add</button>
          </form>
      </div>
      
    </div>
  )
}

export default AdminPage
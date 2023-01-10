import React ,{useState,useEffect}from 'react'
import "./Booking.css"

const Booking = () => {

  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const [flights,setFlights]=useState([]);

  const [pid, setPid] = useState(0);
  const [rid, setRid] = useState(0);
  const [price, setPrice] = useState(0);

  const [myBooking, setMyBooking] = useState(false);
  

  useEffect(() => {
    const pid = JSON.parse(localStorage.getItem('pid'));
    if (pid) {
    setPid(pid);
    }
    console.log(pid);
  }, []);

  const handleOrigin = (e) => {
    setOrigin(e.target.value);
    };


    const handleDestination = (e) => {
      setDestination(e.target.value);
      };


      const handleDate = (e) => {
        setDate(e.target.value);
        };

        const handleWeight = (e) => {
          setWeight(e.target.value);
          };

          const handleQuantity = (e) => {
            setQuantity(e.target.value);
            };

    const fetchData =() => {
      let res= fetch('https://flight-cargo-server.onrender.com/FlightDetails',
      {
      headers: {
      'Content-type': 'application/json'
      }, method: 'POST',
      body: JSON.stringify({ 
        source:origin,
        dest:destination,
        date:date,
        req_space:weight
      })
      })
      .then (response => response.json())
      .then(data=>setFlights(data))
      // .then (data=>console.log(data[0]));
      // .then(data=>{
      //   setFlights(data);
      //   console.log(data);
      // });
      // console.log(res.json()); 
      // .then(data=>setFlights(data));
      // const flightData=data;
      // setFlights(flightData)
      console.log(flights);
    }

  const handleGetQuotes = (event) => {
      //Prevent page reload
      event.preventDefault();

      fetchData();
      
    };

    const handleBooking=(rid,price)=>{
      console.log(rid);
      setRid(rid);
      setPrice(price);
      console.log(pid);
      console.log(price);
      Booking(); 
      setMyBooking(true);
    }

    const Booking=async()=>{
      let res= await fetch('https://flight-cargo-server.onrender.com/Bookings',
      {
      headers: {
      'Content-type': 'application/json'
      }, method: 'POST',
      body: JSON.stringify({ 
        pid : pid,
        space_required:weight,
        rid:rid,
        payment:price
      })
      })
      // .then (response => response.json())
      // .then (data=>console.log(data));
      // console.log(res.json()); 
      console.log(pid);
      console.log();

      if(res.status==201){
        alert("Successfullly Booked!!");
      }
    
    }

  return (
    <div>

      <div className='BookingSection'>
          <p className="textColour">Easily search for spot,<br />contract and promo rates</p>
        <div className="booking">
            <h3 className="text">Enter your shipment details</h3>
            <form className="form">
              <label>
                Origin Airport :
                <input type="text" name="name" onChange={handleOrigin} placeholder='IATA Airport Code'/>             
              </label>
              <label>
                Destination Airport :
                <input type="text" name="name" onChange={handleDestination} placeholder='IATA Airport Code'/>             
              </label>
              <br />
              <label>
                Shipment Date :
                <input type="date" name="name" onChange={handleDate} placeholder=''/>             
              </label>
            </form>
            <div style={{ borderTop: "2px solid grey ", marginLeft: 20, marginRight: 20 }}></div>
            <h3 className="text">Enter your Laggage details</h3>
            <form className="form">
              <label>
                Quantity :
                <input type="number" onChange={handleQuantity} name="name"/>             
              </label>
              <label>
                Length (cm) :
                <input type="number" name="name"/>             
              </label>
              <label>
                Width (cm) :
                <input type="number" name="name"/>             
              </label>
              <label>
                Height (cm) :
                <input type="number" name="name"/>             
              </label>
              <label>
                Weight (kg) :
                <input type="number" onChange={handleWeight} name="name"/>             
              </label>
              <button className='button' onClick={handleGetQuotes} >Get Quotes</button>
            </form>
        </div>
      </div>
      
        <div className='flightsSection'>
          <h1>Available Flights</h1>
          {/* <div className='flightDetails'>
                <div className='flightName'>
                  <h1>air idnia</h1>
                  <h3>Rating: 3</h3>
                </div>
                <div className='bookingInfo'>
                  <h2>Price : 350</h2>
                </div>
                <div>
                  <button className='button'  >Book Space</button>
                </div>
          </div> */}
          {
            // flights &&
            flights.map((flight)=>(
              <div className='flightDetails' key={flight.rid}>
                <div className='flightName'>
                  <h1>{flight.fname}</h1>
                </div>
                <div className='bookingInfo'>
                  <h2>Price : {(flight.frating*80)*weight*quantity}</h2>
                  <h3>Rating: {flight.frating}</h3>
                </div>
                <div>
                  <button className='button'  onClick={()=>handleBooking(flight.rid,(flight.frating*100)*weight)}>Book Space</button>
                </div>
              </div>
            ))
          }
        </div>

        {
          // myBooking&&
          <div className='myBookingButton'>
            <a href='/mybooking'>My Bookings</a>
          </div>
        }
    </div>
  )
}

export default Booking
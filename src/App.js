import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Card,Button} from "react-bootstrap";
import './App.css';

const App = () => {
 const [data, setData] = useState([]); // where to store the returned data
 const [error, setError] = useState(null); // where to store the coming errors
 useEffect(() => {
   function fetchData() {
     
     axios.get("https://jsonplaceholder.typicode.com/users")
  // when the result comes back with success here is what to do
       .then(res => setData(res.data))
       .catch(err => setError(err)); // if there is an error here what you have to do.
   }
   fetchData();
 }, []);

 return (
   <div>
     <h4>List Of Users</h4>
   <div className="list-card" style={{display:"flex", flexWrap:"wrap"}}>    
       {data.map(user => (
            <div className="user-card" style={{ width: '20rem',}}>
            <Card style={{ display:"flex", backgroundColor:"whitesmoke"}}>
            <Card.Body className="card-body">
                <Card.Title className="name">{user.name}</Card.Title>
                <Card.Text className="name" style={{fontSize:"25px", color: "#483D8B", fontWeight:"500"}}>{user.username}</Card.Text>
                <Card.Text> <h5>Email :</h5>{user.email}</Card.Text>
                <Card.Text> <h5>Phone number :</h5>{user.phone}</Card.Text>
                <Card.Text> <h5>Address :</h5>{user.address.city}</Card.Text>
                <Card.Text> <h5>Website :</h5>{user.phone}</Card.Text>
                <Card.Text> <h5>Company's name :</h5> {user.company.name}</Card.Text>
                <Card.Text> <h5>Company's name :</h5> {user.company.catchPhrase}</Card.Text>
                <Button variant="primary" style={{marginLeft:"18%"}} href={user.website}>Go to the website</Button>
            </Card.Body>
            </Card>
        </div>       
       ))}    
   </div>
   </div>
 );
};
export default App;
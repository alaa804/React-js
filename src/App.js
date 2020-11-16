import React from 'react'
import logo from './logo.svg';
import './App.css';
import Introduction from './profile/Profile component/Introduction'
import imgSrc from "../src/images/man-profile.jpg";
import UserCard from './profile/Profile component/UserCard'


const MyBio =[
  {
    name: "alaa taguiaa",
    age: 27,
    email: "aloulou864@gmail.com",
    address: "Nabeul",
    isAuth: true,
  }
];

export default function App() {
  const alertName = (name) => alert(name);
  return(
    <div>
      <Introduction imgSrc={imgSrc} name="Alaa Taguiaa" />
      {MyBio.map((currentUser,i)=>(
      <UserCard key={i} user={currentUser} alertName={alertName} /> 
      ))}
    
      
    </div>
  );
}
  

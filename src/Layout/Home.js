import React from 'react';
import { Images } from '../db/config/assets/Images';
export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection:"column", rowGap:"2px" }}>
      <img 
        src={Images.homeLogo} 
        alt="homeLogo"  
        style={{ 
          width: "200px",  
          height: "auto",  
          maxWidth: "100%",  
        }} 
      />
      <h4>Welcome to Digitalflake admin</h4>
    </div>
  );
}

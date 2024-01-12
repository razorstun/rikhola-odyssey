import React from 'react';

const Header = () => {
    // Get the current date
    const currentDate = new Date();
  
    // Format the date as "Month day, year"
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
      };
    
      const dateStyle = {
        marginTop: '5px',
      };

  return (
    <header style={headerStyle}>
      <h1>SN</h1>
      <p style={dateStyle}>{formattedDate}</p>
    </header>
  );
};

export default Header;
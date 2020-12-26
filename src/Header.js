import React from 'react';
const headerStyle = {
textAlign: 'center',
padding: 20,
background: '#000',
color: '#fff',
textTransform: 'uppercase'
};
const Header = function() {
   return (
       <div style={headerStyle}>
         Phone Directory
       </div>
   )
}

export default Header;
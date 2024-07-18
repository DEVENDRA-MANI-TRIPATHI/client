// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from './Header';

// const Layout = ({ children,onStationSelect }) => {
//   const location = useLocation();
//   const hideHeaderRoutes = ['/login', '/register']; // Routes where Header should be hidden
//   const shouldHideHeader = hideHeaderRoutes.includes(location.pathname.toLowerCase());

//   return (
//     <div>
//       {!shouldHideHeader && <Header onStationSelect={onStationSelect} />}

//       <main>{children}</main>
//     </div>
//   );
// };

// export default Layout;

// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { StationProvider } from '../../context/StationContext.js';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/register']; // Routes where Header should be hidden
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname.toLowerCase());

  return (
    <StationProvider>
      {!shouldHideHeader && <Header />}
      <main>{children}</main>
    </StationProvider>
  );
};

export default Layout;

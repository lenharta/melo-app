import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  

  return (
    <>
      <StyledNavbar>

      </StyledNavbar>
    </>
  )
}

const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;

`;

export default Navbar


// import "./Header.css"

// function Header2() {
// const [header, setHeader] = useState("header")

// const listenScrollEvent = (event) => {
//   if (window.scrollY < 73) {
//     return setHeader("header")
//   } else if (window.scrollY > 70) {
//     return setHeader("header2")
//   } 
// }

// useEffect(() => {
//   window.addEventListener('scroll', listenScrollEvent);

//   return () =>
//     window.removeEventListener('scroll', listenScrollEvent);
// }, []);

//   return (
//     <header className={header}>
//       <div className="logo">Logo</div>
//       <ul className="links">
//         <li className="link-item">home</li>
//         <li className="link-item">about</li>
//         <li className="link-item">join</li>
//       </ul>
//     </header>
//   );
// }

// export default Header2;

// Styles header.css

// .header {
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 120px;
//   background-color: #fff;
//   color: #333;
//   transform: translateY(0);
//   transition: transform 0.6s ease;
// }

// .header2 {
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   height: 86px;
//   background-color: gray;
//   color: rosybrown;
//   transform: translateY(10);
//   transition: transform 6s ease;
//   animation: myanimation 3s;
// }
// @keyframes myanimation {
//   0% {
//     background-color: transparent;
//     color: transparent;
//   }
//   35% {
//     background-color: gray;
//     color: rosybrown;
//   }
//   100% {
//     background-color: gray;
//     color: rosybrown;
//   }
// }
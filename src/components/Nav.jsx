import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LayoutGroup, motion } from "framer-motion";
import { navSpring, navVariant } from "../utils";
import { MdHome, MdSearch, MdInsertChart, MdLeaderboard, MdOutlineAlbum, MdAlbum, MdQueueMusic, MdExplore, MdMic } from "react-icons/md";

const navLinkData = [
  // {
  //   id: 1,
  //   title: "Playlist",
  //   path: "/playlist",
  //   aria: "Playlist",
  //   // will remove and replace with search component
  //   icon: <MdSearch />,
  // },
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    aria: "Dasboard",
    icon: <MdHome />,
  },
  {
    id: 2,
    title: "Discover",
    path: "#",
    aria: "Discover",
    icon: <MdExplore />,
  },
  {
    id: 3,
    title: "Charts",
    path: "/charts",
    aria: "Top Charts",
    icon: <MdLeaderboard />,
  },
];

const Nav = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Header>
        <Inner>
          <Logo>
            <span>Melo</span>
          </Logo>

          <NavBar>
            <NavLinks>
              <LayoutGroup>
                {navLinkData.map(({ title, path, aria, icon }, i) => (
                  <motion.li key={i} onClick={() => setSelected(i)}>
                    <Link aria-label={aria} to={path}>
                      {icon}
                      {/* {title} */}
                    </Link>
                    {i === selected ? (
                      <Outline layoutId="outline" transition={navSpring} style={{ x: 0 }} />
                    ) : null}
                  </motion.li>
                ))}
              </LayoutGroup>
            </NavLinks>
          </NavBar>
        </Inner>
      </Header>
    </>
  );
};

// Nav Styles
const Header = styled.header`
  ${({ theme }) => theme.mixins.flexCenter}
  ${({ theme }) => theme.mixins.backdropFilter}
  ${(props) => props.theme.header}
  position: fixed;
  width: 100%;
  top: 0;
  height: 100px;
  z-index: 150;

  @media (max-width: 1600px) {
    height: 90px;
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
    height: 80px;
  }
  @media (max-width: 480px) {
  }
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  max-width: 1600px;
  height: 100%;
  width: 100%;
  padding: 0px 100px;

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 25px;
  }
  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`;

const Logo = styled.div`
  ${(props) => props.theme.navLogo};

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

// NAVIGATION

const NavBar = styled.nav`
  ${({ theme }) => theme.mixins.flexCenter}
  height: 55%;
  z-index: 151;

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const NavLinks = styled.ul`
  ${({ theme }) => theme.mixins.flexBetween}
  ${(props) => props.theme.navList};
  justify-content: flex-end;
  height: 100%;
  z-index: 152;
  list-style-type: none;
  border-radius: 50px;

  @media (max-width: 1600px) {
  }
  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  // !!
  @media (max-width: 575px) {
    display: none;
  }

  li {
    ${({ theme }) => theme.mixins.flexCenter}
    position: relative;
    height: 100%;
    width: 120px;
    overflow: visible;
    z-index: 153;

    @media (max-width: 1600px) {
      width: 100px;
    }
    @media (max-width: 1080px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
    }

    svg {
      ${({ theme }) => theme.mixins.flexCenter}
      z-index: 155;
      width: 45px;
      height: 45px;

      @media (max-width: 1600px) {
        width: 40px;
        height: 40px;
      }
      @media (max-width: 1080px) {
        width: 30px;
        height: 30px;
      }
      @media (max-width: 768px) {
        width: 30px;
        height: 30px;
      }
      @media (max-width: 480px) {
      }
    }

    a {
      z-index: 156;
      padding: 20px;
      @media (max-width: 1600px) {
      }
      @media (max-width: 1080px) {
      }
      @media (max-width: 768px) {
      }
      @media (max-width: 480px) {
      }
    }
  }
`;

const Outline = styled(motion.div)`
  ${(props) => props.theme.navSelectedLink}
  z-index: 154;
  display: block;
  position: absolute;
  height: 75px;
  width: 75px;
  border-radius: 100px;

  @media (max-width: 1600px) {
    height: 65px;
    width: 65px;
  }
  @media (max-width: 1080px) {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 768px) {
    height: 55px;
    width: 55px;
  }
  @media (max-width: 480px) {
  }
`;

export default Nav;

/* ${({ theme }) => theme.mixins.flexCenter} */
/* ${({ theme }) => theme.mixins.flexBetween} */

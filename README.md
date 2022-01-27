# **Melo**
#### ***Discover Top Artists, Albums, Charts, and more***
> **Visit [Melo](url) - *hosted by [Netlify](https://www.netlify.com/)***

## **Project Description**
> Melo is a effortless and useful way to discover music from new tracks, albums, artists, top charts, and more. Utilizing the [Deezer Music Streaming API](https://www.deezer.com/us/) with more than 30 million tracks available. Melo helps its users search for new music, dive deep into curated playlists, and learn more about their favorite artists!

<!-- Insert Screenshot -->

## **Features**
* **🌙 Light/Dark Mode**
* **🎧 Audio Previews**
* **🔎 Filtered Search Criteria**        
* **♿ Accessibility**
  >* Reduced Motion
  >* Keyboard Navigation
  >* ARIA
  >* Semantic HTML Elements
  >* Large Touch Targets
  >* Dark Mode for Light Sensitivity
* **⚙️ Custom Loader**
* **🚩 Custom 404 Page**
* **🔃 Scroll-Progess Bar**
* **🤸 Responsive Design**
* **⚖️ Heuristic and Gestalt UX Principles**

## **Tech - Languages**
* **JavaScript**
* **HTML5**
* **CSS**
* **JSX**

## **Tech - Libraries/Frameworks**
* **ReactJS**
  * ES6+ Best Practices
  * useState Hook
  * Functional Components
* **Styled-Components**
  * GlobalStyles
  * Theming Functions
    >* Interpolations to styled component's template literal based on its props
    >* Custom functions for responsive design
  * CSS Variables
* **Axios**
  * Asynchronous Requests
  * Request Functions in ./api
* **React Router DOM V6**
  * Navigation
  * Route History
  * Custom 404 Page
  * Nested Routes
* **React Icons**
* **Framer-Motion**
  * Custom Animation Variant Functions
  * Hooks Used
    >* useViewportScroll
    >* useTransform
    >* useSpring
* **Webpack**
* **NodeJS - Package Manager**

    <!-- useEffect -->
    <!-- ```jsx
      const [themeOn, setThemeOn] = useState(true);
      const toggleSwitch = () => setThemeOn(!themeOn);

      if (themeOn === true) {
        props.setTheme('dark')
      } else {
        props.setTheme('light')
      }
    ```
  * useEffect Hook
    ```jsx
      useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await getTopUsCharts();
            setUsChart(data);
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
      }, []);
    ``` -->

    <!-- ES6+ Best Practices -->
    <!-- ```jsx
    const Nav = () => {
      const one = <Link to="/">Dashboard</Link>;
      const two = <Link to="/uscharts">US Top 100</Link>;
      
      const navItems = [one, two];
      
      return (
        <>
          <StyledNavContainer>
            <StyledNavLogo>
              <Link to="/">
                <span>Melo</span>
              </Link>
            </StyledNavLogo>
            <StyledNavLinks>
              <ul>
                {navItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </StyledNavLinks>
          </StyledNavContainer>
        </>
      );
    };
    ``` -->
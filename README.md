# **Melo** - #### *Discover Top Artists, Albums, Charts, and more*
> **Vist [Melo](url) - *hosted by [Netlify](https://www.netlify.com/)***

## **Project Description**
> Melo is a effortless and useful way to search through music artists, tracks, albums, charts, and more. Utilizing the [Deezer Music Streaming](https://www.deezer.com/us/) API with more than 30 million tracks available, Melo helps its users discover new music from artists they haven't heard and dive deep into playlists of their favorite!

<!-- Insert Screenshot -->

## **Features**
* **Light/Dark Mode**
* **Accessibility**
>  * Reduced Motion
>  * Keyboard Navigation
>  * ARIA
>  * Semantic HTML Elements
>  * Large Touch Targets
>  * Dark Mode for Light Sensitivity
* **Custom Loading Screen**
* **Scroll Progess Bar**
* **Responsive Design**
* **UX Utilizes Heuristic and Gestalt Principles**

## **Tech - Languages**
* **JavaScript**
* **HTML5**
* **CSS**
* **JSX**

## **Tech - Libraries/Frameworks**
* **ReactJS**
  * useState
    ```jsx
      const [themeOn, setThemeOn] = useState(true);
      const toggleSwitch = () => setThemeOn(!themeOn);

      if (themeOn === true) {
        props.setTheme('dark')
      } else {
        props.setTheme('light')
      }
    ```
  * useEffect 
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
    ```
  * Functional Components
* **[Styled-Components](https://styled-components.com/)**
  * GlobalStyles
  * Theming Functions
  >  * Interpolations to styled component's template literal based on its props
  >  * Custom functions for responsive design
  * CSS Variables
* **Axios**
* **React Router DOM**
  * Route History
  * Navigation
  * Custom 404
  * Nested Routes
  * Path URLs
* **React Icons**
* **Framer-Motion**
* **Webpack**
* **NodeJS - Package Manager**




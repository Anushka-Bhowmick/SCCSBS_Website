import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MeetTheDevs from "./pages/MeetTheDevs";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Rectangle from "./pages/Rectangle";
import Rectangle1 from "./pages/Rectangle1";
import Rectangle2 from "./pages/Rectangle2";
import Image1 from "./pages/Image1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-28":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-18":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-19":
        title = "";
        metaDescription = "";
        break;
      case "/image-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MeetTheDevs />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/rectangle-28" element={<Rectangle />} />
      <Route path="/rectangle-18" element={<Rectangle1 />} />
      <Route path="/rectangle-19" element={<Rectangle2 />} />
      <Route path="/image-1" element={<Image1 />} />
    </Routes>
  );
}
export default App;

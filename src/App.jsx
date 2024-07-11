import React from "react";
import Page from "./components/page/Page";
import Page02 from "./components/page/Page02";
import LogIn from "./components/page/LogIn";
import Footer from "./components/section/Footer";
import CustomCursor from "./components/section/CustomCursor";

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Page />
      <Page02 />
      <Footer />

      {/* <LogIn /> */}
    </div>
  );
};

export default App;

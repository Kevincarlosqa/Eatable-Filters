import { Global } from "@emotion/react";
import AnauthenticatedApp from "./AnauthenticatedApp/AnauthenticatedApp";
import { global, reset } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Global styles={reset} />
        <Global styles={global} />
        <AnauthenticatedApp />
      </BrowserRouter>
    </>
  );
}

export default App;

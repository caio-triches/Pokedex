import Routesapp from "./routes";
import { ToastContainer, Bounce } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'
import { SearchProvide } from "./context/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvide>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          />
        <Routesapp/>
      </SearchProvide>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <ToastContainer/>
    <h2 className="text-2xl">h2 from App</h2>
    <main className="py-3">
<Outlet/>
    </main>
    </>
  )
}

export default App
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read from "./page/read.jsx";
import Create from "./page/create.jsx";
import Update from "./page/update.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Read/>} path="/"/>
                    <Route element={<Create/>} path="/create"/>
                    <Route element={<Update/>} path="/update/:id"/>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default App;
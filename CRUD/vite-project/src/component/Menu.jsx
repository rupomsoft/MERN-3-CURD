import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <NavLink to={"/"}>Product List</NavLink>
            <NavLink to={"/create"}>Product Create</NavLink>
        </div>
    );
};

export default Menu;
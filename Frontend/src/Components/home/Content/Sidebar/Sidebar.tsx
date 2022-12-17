import React from "react";
import PrimarySidebar from "./PrimarySidebar/PrimarySidebar";
import Styles from "./Sidebar.module.css"
function Sidebar() {
    return (
        <div className={Styles.sidebar}>
            <PrimarySidebar></PrimarySidebar>

        </div>

    );

}

export default Sidebar;
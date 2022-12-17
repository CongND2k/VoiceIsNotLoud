import React, { Fragment } from 'react';
import Styles from "./ActivitySidebar.module.css"
import ServerList from './ServerList/ServerList';
import TutorialContainer from './TutorialContainer/TutorialContainer';

function ActivitySidebar() {
    return (
        <>
            <nav className={Styles.wrapper + ' ' + Styles.guild} aria-label="Server sidebar" >
                <ul className={Styles.tree}>
                    {/* <div className={Styles.unreadMentionsIndicatorTop}>
                        <div className="bar unreadMentionsBar unread active" aria-hidden="true" style="transform: translateY(-180%);">
                            <span className="text-2GsXbW">new</span></div>
                    </div> */}

                    <div className={Styles.scroller +' '+ Styles.none +' '+ Styles.scrollerBase}>
                        <TutorialContainer />
                        <div className={Styles.list_item}>
                            <div className={Styles.guild_separator}></div>
                        </div>
                        <ServerList />
                    </div>

                    {/* <div className={Styles.unreadMentionsIndicatorBottom}>
                        <div className="bar unreadMentionsBar unread active" aria-hidden="true" style="transform: translateY(180%);">
                            <span className="text-2GsXbW">new</span></div>
                    </div> */}

                </ul>
            </nav>

        </>
    );
}

export default ActivitySidebar;


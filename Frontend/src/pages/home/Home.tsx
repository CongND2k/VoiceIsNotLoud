import React, { Fragment } from 'react';
import Styles from "./Home.module.css";
// import styled from "styled-components";
import ActivitySidebar from '../../Components/home/ActivitySidebar/ActivitySidebar';
import Sidebar from "../../Components/home/Content/Sidebar/Sidebar"
import Content from '../../Components/home/Content/Content';

function Home() {
  return (
    <>
      <div className={Styles.home}>



        <ActivitySidebar></ActivitySidebar>
        <Content></Content>
        {/* <div className={Styles.content}>
          <div className={Styles.private_channels}></div>
          <div className={Styles.sidebar}></div>

          <div className={Styles.container}>
            <div className={Styles.bar_button}></div>
            <div className={Styles.screen}>
              <div className={Styles.people_column}></div>
              <div className={Styles.active}></div>
            </div>
          </div>
        </div> */}

      </div>
      {/* <div className="tutorialContainer-1pL9QS">
        <div className="listItem-3SmSlK">
          <div className="pill-L_aLMQ wrapper-z5ab_q" aria-hidden="true"></div>
          <div className="listItemWrapper-3d87LP">
            <div className="wrapper-28eC3z">
              <svg width="48" height="48" viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
                <defs>
                  <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" id="fa428a3c-9838-410b-8d07-91527e2c8caf-blob_mask"></path>
                  <rect id="fa428a3c-9838-410b-8d07-91527e2c8caf-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
                  <rect id="fa428a3c-9838-410b-8d07-91527e2c8caf-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
                </defs>
                <mask id="fa428a3c-9838-410b-8d07-91527e2c8caf" fill="black" x="0" y="0" width="48" height="48">
                  <use href="#fa428a3c-9838-410b-8d07-91527e2c8caf-blob_mask" fill="white"></use>
                  <use href="#fa428a3c-9838-410b-8d07-91527e2c8caf-upper_badge_masks" fill="black"></use>
                  <use href="#fa428a3c-9838-410b-8d07-91527e2c8caf-lower_badge_masks" fill="black"></use>
                </mask>
                <mask id="fa428a3c-9838-410b-8d07-91527e2c8caf-stroke_mask">
                  <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
                  <use href="#fa428a3c-9838-410b-8d07-91527e2c8caf-upper_badge_masks" fill="black"></use>
                  <use href="#fa428a3c-9838-410b-8d07-91527e2c8caf-lower_badge_masks" fill="black"></use>
                </mask>
                <foreignObject mask="url(#fa428a3c-9838-410b-8d07-91527e2c8caf)" x="0" y="0" width="48" height="48">
                  <div className="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages">
                    <div className="childWrapper-1j_1ub"><svg className="homeIcon-r0w4ny" aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                      <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z">
                      </path>
                    </svg>
                    </div>
                  </div>
                </foreignObject>
              </svg>
              <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
                <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listItem-3SmSlK"><div className="guildSeparator-a4uisj"></div></div> */}


      {/* <div className="wrapper-28eC3z">
        <svg width="48" height="48" viewBox="0 0 48 48" className="svg-2zuE5p" overflow="visible">
          <defs>
            <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
              id="9c2b0579-3f71-4330-9e34-06458a789d5b-blob_mask"></path>
            <rect id="9c2b0579-3f71-4330-9e34-06458a789d5b-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
            <rect id="9c2b0579-3f71-4330-9e34-06458a789d5b-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect>
          </defs>
          <mask id="9c2b0579-3f71-4330-9e34-06458a789d5b" fill="black" x="0" y="0" width="48" height="48">
            <use href="#9c2b0579-3f71-4330-9e34-06458a789d5b-blob_mask" fill="white"></use>
            <use href="#9c2b0579-3f71-4330-9e34-06458a789d5b-upper_badge_masks" fill="black"></use>
            <use href="#9c2b0579-3f71-4330-9e34-06458a789d5b-lower_badge_masks" fill="black"></use>
          </mask>
          <mask id="9c2b0579-3f71-4330-9e34-06458a789d5b-stroke_mask">
            <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
            <use href="#9c2b0579-3f71-4330-9e34-06458a789d5b-upper_badge_masks" fill="black"></use>
            <use href="#9c2b0579-3f71-4330-9e34-06458a789d5b-lower_badge_masks" fill="black"></use>
          </mask>
          <foreignObject mask="url(#9c2b0579-3f71-4330-9e34-06458a789d5b)" x="0" y="0" width="48" height="48">
            <div className="wrapper-3kah-n" role="treeitem" data-list-item-id="guildsnav___540904828591931394" tabindex="-1" aria-label=" 1 mention, Đinô">
              <img className="icon-3AqZ2e" src="https://cdn.discordapp.com/icons/540904828591931394/ef860c09682cd0f2091694609cbf8859.webp?size=96" alt=" " width="48" height="48" aria-hidden="true">
            </div>
          </foreignObject>
        </svg>
        <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
          <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div>
        </div>
      </div> */}

    </>
  );
}

export default Home;


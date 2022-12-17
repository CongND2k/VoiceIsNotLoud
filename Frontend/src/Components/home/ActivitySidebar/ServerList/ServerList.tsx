import React from "react";
import Styles from "./ServerList.module.css"

function ServerList() {
    return (
        <div className={Styles.server}>
            <div className={Styles.list_item}>
                <div className={Styles.pill + ' ' + Styles.select_wrapper} aria-hidden="true">
                    <span className={Styles.item} ></span>
                </div>
                <div className={Styles.wrapper}>
                    <svg
                        className={Styles.svg}
                        width={48}
                        height={48}
                        viewBox='0 0 48 48'
                        overflow="visible"
                    >
                        <defs>
                            <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                                id="path-id-blob_mask"></path>
                        </defs>
                        <mask id="mask-id" fill="black" x="0" y="0" width="48" height="48">
                            <use href="#path-id-blob_mask" fill="white"></use>
                        </mask>
                        <mask id="mask-id-stroke_mask">
                            <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
                        </mask>
                        <mask fill='black' x='0' y='0' width='48' height='48'></mask>
                        <foreignObject mask="url(#mask-id)" x="0" y="0" width="48" height="48">
                            <div className={Styles.sidebar_wrapper_} >

                                <img className={Styles.icon} src='images/my_icon/name_light.png' alt='.' aria-hidden='true'></img>

                            </div>

                        </foreignObject>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function ServerListBase() {
    return (
        <div className={Styles.server}>
            <div className={Styles.list_item}>
                <div className={Styles.pill + ' ' + Styles.select_wrapper} aria-hidden="true">
                    {/* <span class="item-2LIpTv" style="opacity: 1; height: 40px; transform: none;"></span> */}
                    <span className={Styles.item} ></span>
                </div>
                <div className={Styles.wrapper}>
                    <svg
                        className={Styles.svg}
                        width={48}
                        height={48}
                        viewBox='0 0 48 48'
                        overflow="visible"
                    >
                        <defs>
                            <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                                id="path-id-blob_mask"></path>
                            {/* <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect> */}
                            {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
                        </defs>
                        <mask id="mask-id" fill="black" x="0" y="0" width="48" height="48">
                            <use href="#path-id-blob_mask" fill="white"></use>
                            {/* <use href="#path-id-upper_badge_masks" fill="black"></use> */}
                            {/* <use href="#path-id-lower_badge_masks" fill="black"></use> */}
                        </mask>
                        <mask id="mask-id-stroke_mask">
                            <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
                            {/* <use href="#mask-id-upper_badge_masks" fill="black"></use> */}
                            {/* <use href="#mask-id-lower_badge_masks" fill="black"></use> */}
                        </mask>
                        <mask fill='black' x='0' y='0' width='48' height='48'></mask>
                        <foreignObject mask="url(#mask-id)" x="0" y="0" width="48" height="48">
                            <div className={Styles.sidebar_wrapper_} >
                                {/* <div className={Styles.sidebar_wrapper__} aria-hidden="true"></div> */}

                                <img className={Styles.icon} src='images/my_icon/name_light.png' alt='.' aria-hidden='true'></img>

                            </div>

                        </foreignObject>
                    </svg>
                    {/* <div className={Styles.lowerBadge} >
          <div className={Styles.numberBadge}></div>
        </div> */}
                </div>
            </div>
        </div>
    );
}

export default ServerList;
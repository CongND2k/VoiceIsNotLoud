import React from "react";
import Styles from "./TutorialContainer.module.css"

function TutorialContainer() {
  const mystyle = {
    opacity: "1",
    height: "40px",
     transform: "none"
  }
  return (
    <div className="container">
      <div className={Styles.listItem}>
      <div className={Styles.select_wrapper+ ' ' +  Styles.pill } aria-hidden="true">
        <span className={Styles.item} style={mystyle}></span>
        {/* <span className={Styles.item}></span> */}
      </div>
      <div className={Styles.listItemWrapper + ' ' + Styles.selected}>
        <div className={Styles.wrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" className={Styles.svg} overflow="visible">
            <defs>
              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                id="path-id-blob_mask"></path>
              <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
              {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
            </defs>
            <mask id="path-id" fill="black" x="0" y="0" width="48" height="48">
              <use href="#path-id-blob_mask" fill="white"></use>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            <mask id="path-id-stroke_mask">
              <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            {/* <circle cx="50" cy="50" r="45" fill="red" mask="url(#path-id)" /> */}

            <foreignObject x="0" y="0" width="48" height="48" mask="url(#path-id)" >
              {/* <div className="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages"> */}
              <div className={Styles.wrapper_ + ' ' + Styles.selected} role="treeitem" data-list-item-id="guildsnav___home" aria-label="Direct Messages">
                <div className={Styles.childWrapper}>
                  <svg className={Styles.homeIcon} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div className={Styles.lowerBadge} >
            <div className={Styles.numberBadge + ' ' + Styles.base + ' ' + Styles.eyebrow + ' ' + Styles.baseShapeRound}>1</div>
            {/* <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
            <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div> */}

          </div>
        </div>
      </div>
    </div>

    <div className={Styles.listItem}>
      <div className={Styles.select_wrapper+ ' ' +  Styles.pill } aria-hidden="true">
        <span className={Styles.item} style={mystyle}></span>
        {/* <span className={Styles.item}></span> */}
      </div>
      <div className={Styles.listItemWrapper + ' ' + Styles.selected}>
        <div className={Styles.wrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" className={Styles.svg} overflow="visible">
            <defs>
              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                id="path-id-blob_mask"></path>
              <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
              {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
            </defs>
            <mask id="path-id" fill="black" x="0" y="0" width="48" height="48">
              <use href="#path-id-blob_mask" fill="white"></use>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            <mask id="path-id-stroke_mask">
              <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            {/* <circle cx="50" cy="50" r="45" fill="red" mask="url(#path-id)" /> */}

            <foreignObject x="0" y="0" width="48" height="48" mask="url(#path-id)" >
              {/* <div className="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages"> */}
              <div className={Styles.wrapper_ + ' ' + Styles.selected} role="treeitem" data-list-item-id="guildsnav___home" aria-label="Direct Messages">
                <div className={Styles.childWrapper}>
                  <svg className={Styles.homeIcon} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div className={Styles.lowerBadge} >
            <div className={Styles.numberBadge + ' ' + Styles.base + ' ' + Styles.eyebrow + ' ' + Styles.baseShapeRound}>1</div>
            {/* <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
            <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div> */}

          </div>
        </div>
      </div>
    </div>

    <div className={Styles.listItem}>
      <div className={Styles.select_wrapper+ ' ' +  Styles.pill } aria-hidden="true">
        <span className={Styles.item} style={mystyle}></span>
        {/* <span className={Styles.item}></span> */}
      </div>
      <div className={Styles.listItemWrapper + ' ' + Styles.selected}>
        <div className={Styles.wrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" className={Styles.svg} overflow="visible">
            <defs>
              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                id="path-id-blob_mask"></path>
              <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
              {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
            </defs>
            <mask id="path-id" fill="black" x="0" y="0" width="48" height="48">
              <use href="#path-id-blob_mask" fill="white"></use>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            <mask id="path-id-stroke_mask">
              <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            {/* <circle cx="50" cy="50" r="45" fill="red" mask="url(#path-id)" /> */}

            <foreignObject x="0" y="0" width="48" height="48" mask="url(#path-id)" >
              {/* <div className="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages"> */}
              <div className={Styles.wrapper_ + ' ' + Styles.selected} role="treeitem" data-list-item-id="guildsnav___home" aria-label="Direct Messages">
                <div className={Styles.childWrapper}>
                  <svg className={Styles.homeIcon} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div className={Styles.lowerBadge} >
            <div className={Styles.numberBadge + ' ' + Styles.base + ' ' + Styles.eyebrow + ' ' + Styles.baseShapeRound}>1</div>
            {/* <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
            <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div> */}

          </div>
        </div>
      </div>
    </div>

    <div className={Styles.listItem}>
      <div className={Styles.select_wrapper+ ' ' +  Styles.pill } aria-hidden="true">
        <span className={Styles.item} style={mystyle}></span>
        {/* <span className={Styles.item}></span> */}
      </div>
      <div className={Styles.listItemWrapper + ' ' + Styles.selected}>
        <div className={Styles.wrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" className={Styles.svg} overflow="visible">
            <defs>
              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                id="path-id-blob_mask"></path>
              <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
              {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
            </defs>
            <mask id="path-id" fill="black" x="0" y="0" width="48" height="48">
              <use href="#path-id-blob_mask" fill="white"></use>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            <mask id="path-id-stroke_mask">
              <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            {/* <circle cx="50" cy="50" r="45" fill="red" mask="url(#path-id)" /> */}

            <foreignObject x="0" y="0" width="48" height="48" mask="url(#path-id)" >
              {/* <div className="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages"> */}
              <div className={Styles.wrapper_ + ' ' + Styles.selected} role="treeitem" data-list-item-id="guildsnav___home" aria-label="Direct Messages">
                <div className={Styles.childWrapper}>
                  <svg className={Styles.homeIcon} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div className={Styles.lowerBadge} >
            <div className={Styles.numberBadge + ' ' + Styles.base + ' ' + Styles.eyebrow + ' ' + Styles.baseShapeRound}>1</div>
            {/* <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
            <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div> */}

          </div>
        </div>
      </div>
    </div>

    <div className={Styles.listItem}>
      <div className={Styles.select_wrapper+ ' ' +  Styles.pill } aria-hidden="true">
        <span className={Styles.item} style={mystyle}></span>
        {/* <span className={Styles.item}></span> */}
      </div>
      <div className={Styles.listItemWrapper + ' ' + Styles.selected}>
        <div className={Styles.wrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" className={Styles.svg} overflow="visible">
            <defs>
              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                id="path-id-blob_mask"></path>
              <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
              {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
            </defs>
            <mask id="path-id" fill="black" x="0" y="0" width="48" height="48">
              <use href="#path-id-blob_mask" fill="white"></use>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            <mask id="path-id-stroke_mask">
              <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            {/* <circle cx="50" cy="50" r="45" fill="red" mask="url(#path-id)" /> */}

            <foreignObject x="0" y="0" width="48" height="48" mask="url(#path-id)" >
              {/* <div className="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages"> */}
              <div className={Styles.wrapper_ + ' ' + Styles.selected} role="treeitem" data-list-item-id="guildsnav___home" aria-label="Direct Messages">
                <div className={Styles.childWrapper}>
                  <svg className={Styles.homeIcon} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div className={Styles.lowerBadge} >
            <div className={Styles.numberBadge + ' ' + Styles.base + ' ' + Styles.eyebrow + ' ' + Styles.baseShapeRound}>1</div>
            {/* <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
            <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div> */}

          </div>
        </div>
      </div>
    </div>

    <div className={Styles.listItem}>
      <div className={Styles.select_wrapper+ ' ' +  Styles.pill } aria-hidden="true">
        <span className={Styles.item} style={mystyle}></span>
        {/* <span className={Styles.item}></span> */}
      </div>
      <div className={Styles.listItemWrapper + ' ' + Styles.selected}>
        <div className={Styles.wrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" className={Styles.svg} overflow="visible">
            <defs>
              <path d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                id="path-id-blob_mask"></path>
              <rect id="path-id-upper_badge_masks" x="28" y="-4" width="24" height="24" rx="12" ry="12" transform="translate(20 -20)"></rect>
              {/* <rect id="path-id-lower_badge_masks" x="28" y="28" width="24" height="24" rx="12" ry="12" transform="translate(0 0)"></rect> */}
            </defs>
            <mask id="path-id" fill="black" x="0" y="0" width="48" height="48">
              <use href="#path-id-blob_mask" fill="white"></use>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            <mask id="path-id-stroke_mask">
              <rect width="150%" height="150%" x="-25%" y="-25%" fill="white"></rect>
              <use href="#path-id-upper_badge_masks" fill="black"></use>
              <use href="#path-id-lower_badge_masks" fill="black"></use>
            </mask>
            {/* <circle cx="50" cy="50" r="45" fill="red" mask="url(#path-id)" /> */}

            <foreignObject x="0" y="0" width="48" height="48" mask="url(#path-id)" >
              {/* <div className="wrapper-3kah-n selected-1Drb7Z" role="treeitem" data-list-item-id="guildsnav___home" tabindex="-1" aria-label="Direct Messages"> */}
              <div className={Styles.wrapper_ + ' ' + Styles.selected} role="treeitem" data-list-item-id="guildsnav___home" aria-label="Direct Messages">
                <div className={Styles.childWrapper}>
                  <svg className={Styles.homeIcon} aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                    <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
                  </svg>
                </div>
              </div>
            </foreignObject>
          </svg>
          <div className={Styles.lowerBadge} >
            <div className={Styles.numberBadge + ' ' + Styles.base + ' ' + Styles.eyebrow + ' ' + Styles.baseShapeRound}>1</div>
            {/* <div className="lowerBadge-3WTshO" style="opacity: 1; transform: translate(0px, 0px);">
            <div className="numberBadge-37OJ3S base-3IDx3L eyebrow-132Xza baseShapeRound-3epLEv" style="background-color: var(--status-danger); width: 16px; padding-right: 1px;">1</div> */}

          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

function TutorialContainerBase() {
  return (
    <div className={Styles.tutorial_container}>
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
        </div>
      </div>
    </div>
  );
}
export default TutorialContainer;
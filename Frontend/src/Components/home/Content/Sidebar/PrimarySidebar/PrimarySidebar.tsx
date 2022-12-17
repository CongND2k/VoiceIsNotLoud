import React from "react";
import Styles from "./PrimarySidebar.module.css"

function PrimarySidebar() {
    const mystyle = {
        // position: "absolute", 
        // pointer-events: "none", 
        top: "-1px",
        left: "-1px",
        width: "1px",
        height: "1px"
    }
    return (
        <div className={Styles.PrimarySidebar}>
            {/* <svg viewBox="0 0 1 1" aria-hidden="true" style={position: "absolute", pointer-events: "none", top: "-1px", left: "-1px", width: "1px", height: "1px"}> */}
            <svg viewBox="0 0 1 1" aria-hidden="true" style={mystyle}>
                <mask id="svg-mask-squircle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <path fill="white" d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z"></path></mask >
                <mask id="svg-mask-header-bar-badge" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="1" height="1"></rect>
                    <circle fill="black" cx="0.75" cy="0.75" r="0.25"></circle></mask >
                <mask id="svg-mask-voice-user-summary-item" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" width="1" height="1"></rect>
                    <circle fill="black" cx="1.2083333333333333" cy="0.5" r="0.5416666666666666"></circle></mask >
                <mask id="svg-mask-vertical-fade" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <linearGradient id="svg-mask-vertical-fade-gradient" gradientTransform="rotate(90)" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="white"></stop><stop offset="100%" stop-color="black"></stop></linearGradient >
                    <rect fill="url(#svg-mask-vertical-fade-gradient)" x="0" y="0" width="1" height="1"></rect></mask >
                <mask id="svg-mask-panel-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="1" height="1"></rect>
                    <circle fill="black" cx="0.75" cy="0.75" r="0.25"></circle></mask >
                <mask id="svg-mask-channel-call-control-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8214285714285714" cy="0.8214285714285714" r="0.25"></circle></mask >
                <mask id="svg-mask-channel-call-control-button-badge-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.6428571428571429" y="-0.07142857142857142" width="0.42857142857142855" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427"></rect></mask >
                <mask id="svg-mask-channel-call-control-button-badge-22" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.5357142857142857" y="-0.07142857142857142" width="0.5357142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427"></rect></mask >
                <mask id="svg-mask-channel-call-control-button-badge-29" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.4107142857142857" y="-0.07142857142857142" width="0.6607142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427"></rect></mask >
                <mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle></mask >
                <mask id="svg-mask-avatar-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8125" cy="0.8125" r="0.3125"></circle></mask >
                <mask id="svg-mask-avatar-decoration-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7604166666666667" cy="0.7604166666666667" r="0.2604166666666667"></circle></mask >
                <mask id="svg-mask-avatar-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.5" y="0.3125" width="0.625" height="0.8125" rx="0.1625" ry="0.1625"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.5" y="0.34375" width="0.5208333333333334" height="0.6770833333333334" rx="0.1625" ry="0.1625"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.21875" y="0.5" width="1.1875" height="0.625" rx="0.3125" ry="0.3125"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.265625" y="0.5" width="0.9895833333333334" height="0.5208333333333334" rx="0.0968967013888889" ry="0.0968967013888889"></rect></mask >
                <mask id="svg-mask-avatar-status-round-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.25"></circle></mask >
                <mask id="svg-mask-avatar-decoration-status-round-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.20833333333333334"></circle></mask >
                <mask id="svg-mask-avatar-status-mobile-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-mobile-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.5833333333333333" y="0.45833333333333337" width="0.4166666666666667" height="0.5416666666666667" rx="0.13" ry="0.13"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-typing-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.3958333333333333" y="0.5833333333333333" width="0.7916666666666666" height="0.4166666666666667" rx="0.0920138888888889" ry="0.0920138888888889"></rect></mask >
                <mask id="svg-mask-avatar-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.2916666666666667"></circle></mask >
                <mask id="svg-mask-avatar-decoration-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7777777777777779" cy="0.7777777777777779" r="0.24305555555555558"></circle></mask >
                <mask id="svg-mask-avatar-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.5416666666666666" y="0.375" width="0.5833333333333334" height="0.75" rx="0.15" ry="0.15"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.5347222222222222" y="0.3958333333333333" width="0.48611111111111116" height="0.625" rx="0.15" ry="0.15"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.2916666666666667" y="0.5416666666666666" width="1.0833333333333333" height="0.5833333333333334" rx="0.2916666666666667" ry="0.2916666666666667"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.3263888888888889" y="0.5347222222222222" width="0.9027777777777778" height="0.48611111111111116" rx="0.091772762345679" ry="0.091772762345679"></rect></mask >
                <mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.84375" cy="0.84375" r="0.25"></circle></mask >
                <mask id="svg-mask-avatar-decoration-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7864583333333334" cy="0.7864583333333334" r="0.20833333333333334"></circle></mask >
                <mask id="svg-mask-avatar-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.59375" y="0.4375" width="0.5" height="0.65625" rx="0.13125" ry="0.13125"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.578125" y="0.4479166666666667" width="0.4166666666666667" height="0.546875" rx="0.13125" ry="0.13125"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.359375" y="0.59375" width="0.96875" height="0.5" rx="0.25" ry="0.25"></rect></mask>
                <mask id="svg-mask-avatar-decoration-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.3828125" y="0.578125" width="0.8072916666666667" height="0.4166666666666667" rx="0.08875868055555558" ry="0.08875868055555558"></rect></mask >
                <mask id="svg-mask-avatar-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.25"></circle></mask>
                <mask id="svg-mask-avatar-decoration-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.20833333333333334"></circle></mask>
                <mask id="svg-mask-avatar-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13"></rect></mask>
                <mask id="svg-mask-avatar-decoration-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.5833333333333333" y="0.45833333333333337" width="0.4166666666666667" height="0.5416666666666667" rx="0.13" ry="0.13"></rect></mask>
                <mask id="svg-mask-avatar-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25"></rect></mask>
                <mask id="svg-mask-avatar-decoration-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.3958333333333333" y="0.5833333333333333" width="0.7916666666666666" height="0.4166666666666667" rx="0.0876736111111111" ry="0.0876736111111111"></rect></mask>
                <mask id="svg-mask-avatar-status-round-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8392857142857143" cy="0.8392857142857143" r="0.19642857142857142"></circle></mask>
                <mask id="svg-mask-avatar-decoration-status-round-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7827380952380953" cy="0.7827380952380953" r="0.1636904761904762"></circle></mask>
                <mask id="svg-mask-avatar-status-mobile-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.6428571428571429" y="0.5178571428571429" width="0.39285714285714285" height="0.5178571428571429" rx="0.10357142857142858" ry="0.10357142857142858"></rect></mask>
                <mask id="svg-mask-avatar-decoration-status-mobile-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.6190476190476191" y="0.5148809523809524" width="0.3273809523809524" height="0.4315476190476191" rx="0.10357142857142858" ry="0.10357142857142858"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.45535714285714285" y="0.6428571428571429" width="0.7678571428571429" height="0.39285714285714285" rx="0.19642857142857142" ry="0.19642857142857142"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-typing-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.46279761904761907" y="0.6190476190476191" width="0.6398809523809524" height="0.3273809523809524" rx="0.08576920351473921" ry="0.08576920351473921"></rect></mask >
                <mask id="svg-mask-avatar-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.175"></circle></mask >
                <mask id="svg-mask-avatar-decoration-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.14583333333333334"></circle></mask >
                <mask id="svg-mask-avatar-decoration-profile-status-square-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7916666666666667" cy="0.7916666666666667" r="0.14583333333333334"></circle></mask >
                <mask id="svg-mask-avatar-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.675" y="0.575" width="0.35" height="0.45" rx="0.09" ry="0.09"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.6458333333333334" y="0.5625" width="0.2916666666666667" height="0.375" rx="0.09" ry="0.09"></rect></mask >
                <mask id="svg-mask-avatar-decoration-profile-status-mobile-square-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.6206896551724138" y="0.5517241379310345" width="0.24137931034482757" height="0.3103448275862069" rx="0.09" ry="0.09"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.525" y="0.675" width="0.65" height="0.35" rx="0.175" ry="0.175"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.5208333333333334" y="0.6458333333333334" width="0.5416666666666667" height="0.2916666666666667" rx="0.08485243055555552" ry="0.08485243055555552"></rect></mask >
                <mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666"></circle></mask >
                <mask id="svg-mask-avatar-decoration-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
                    <circle fill="black" cx="0.7777777777777779" cy="0.7777777777777779" r="0.1388888888888889"></circle></mask >
                <mask id="svg-mask-avatar-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.6666666666666666" y="0.5666666666666667" width="0.3333333333333333" height="0.43333333333333335" rx="0.08666666666666667" ry="0.08666666666666667"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.6388888888888888" y="0.5555555555555556" width="0.2777777777777778" height="0.36111111111111116" rx="0.08666666666666667" ry="0.08666666666666667"></rect></mask >
                <mask id="svg-mask-avatar-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.5166666666666667" y="0.6666666666666666" width="0.6333333333333333" height="0.3333333333333333" rx="0.16666666666666666" ry="0.16666666666666666"></rect></mask >
                <mask id="svg-mask-avatar-decoration-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="100%" height="100%"></rect >
                    <rect fill="black" x="0.513888888888889" y="0.6388888888888888" width="0.5277777777777778" height="0.2777777777777778" rx="0.08429783950617281" ry="0.08429783950617281"></rect></mask >
                <mask id="svg-mask-status-online-mobile" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" x="0" y="0" width="1" height="1" rx="0.1875" ry="0.125"></rect >
                    <rect fill="black" x="0.125" y="0.16666666666666666" width="0.75" height="0.5"></rect><ellipse fill="black" cx="0.5" cy="0.8333333333333334" rx="0.125" ry="0.08333333333333333"></ellipse></mask >
                <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle></mask >
                <mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle></mask >
                <mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle >
                    <rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125"></rect></mask >
                <mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.5" cy="0.5" r="0.25"></circle></mask >
                <mask id="svg-mask-status-streaming" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle><polygon fill="black" points="0.35,0.25 0.78301275,0.5 0.35,0.75"></polygon></mask >
                <mask id="svg-mask-status-typing" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" cx="0" cy="0" width="1" height="1" ry="0.5" rx="0.2"></rect></mask >
                <mask id="svg-mask-avatar-voice-call-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.2"></circle></mask >
                <mask id="svg-mask-avatar-call-icon" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="1"></circle>
                    <circle fill="black" cx="0.85" cy="0.15" r="0.2"></circle></mask >
                <mask id="svg-mask-avatar-call-icon-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="0.5"></circle>
                    <circle fill="black" cx="0.8" cy="0.25" r="0.325"></circle></mask >
                <mask id="svg-mask-sticker-rounded-rect" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <path d="M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z" fill="white"></path></mask >
                <mask id="svg-mask-chat-input-button-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect width="1" height="1" fill="white"></rect>
                    <circle cx="0.85" cy="0.85" r="0.25" fill="black"></circle></mask >
                <mask id="svg-mask-sticker-shop-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect width="1" height="1" fill="white"></rect>
                    <circle cx="0.9" cy="0.9" r="0.5" fill="black"></circle></mask >
                <mask id="svg-mask-autocomplete-emoji-upsell-emoji" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <rect fill="white" width="1" height="1"></rect>
                    <circle fill="black" cx="1.33" cy="0.5" r="0.5833333333333334"></circle></mask >
                <mask id="svg-mask-event-ticket" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1" >
                    <path d="M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z" fill="white"></path></mask></svg>

            <svg viewBox="0 0 1 1" aria-hidden="true" style={mystyle}>
                {/* <svg viewBox="0 0 1 1" aria-hidden="true" style="position: absolute; pointer-events: none; top: -1px; left: -1px; width: 1px; height: 1px;"> */}
                <linearGradient id="e1bef500-8b76-4c4f-8ed0-efdb2b3592b8">
                    <stop stop-color="var(--premium-tier-1-blue)"></stop>
                    <stop offset="1" stop-color="var(--premium-tier-1-purple)"></stop>
                </linearGradient>
                <linearGradient id="3000b24f-445b-4c18-8938-647401e57f37"><stop stop-color="var(--premium-tier-1-blue)"></stop>
                    <stop offset="1" stop-color="var(--premium-tier-1-purple)"></stop></linearGradient>
                <linearGradient id="249f6a8c-97f2-4fc1-b23c-d0f5d86eda6f">
                    <stop stop-color="var(--premium-tier-2-purple-for-gradients)"></stop>
                    <stop offset="0.502368" stop-color="var(--premium-tier-2-purple-for-gradients-2)"></stop>
                    <stop offset="1" stop-color="var(--premium-tier-2-pink-for-gradients)"></stop></linearGradient>
                <linearGradient id="3d64f201-949a-42f7-96f8-843f50050e5b">
                    <stop stop-color="var(--guild-boosting-blue)"></stop>
                    <stop offset="1" stop-color="var(--guild-boosting-purple)"></stop></linearGradient>
                <linearGradient id="0183adf8-0ca8-4675-a3b3-af9d836f6b4f">
                    <stop stop-color="var(--creator-revenue-start)"></stop>
                    <stop offset="1" stop-color="var(--creator-revenue-end)"></stop></linearGradient>
                <linearGradient id="658c4827-2098-422d-a1ec-96fcd30117d8">
                    <stop stop-color="var(--premium-tier-2-purple)"></stop>
                    <stop offset="1" stop-color="var(--premium-tier-2-pink)"></stop></linearGradient></svg>
            <div className={Styles.searchBar}>
                <button type="button" className={Styles.searchBarButton}>Ngon mày đụng tao xem</button>
            </div>
            <div className={Styles.scroller}>
                <ul className={Styles.content} aria-label="Direct Messages">

                    <li className={Styles.channel + ' ' + Styles.container} >
                        <div className={Styles.interactive + ' ' + Styles.linkButton}>
                            <a className={Styles.link + ' ' + Styles.layout} href="./">
                                <div className={Styles.avatarWithText}>
                                    <div className={Styles.avatar}>
                                        <svg
                                            className={Styles.linkButtonIcon}
                                            aria-hidden="true"
                                            role="img"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path
                                                    fill="currentColor"
                                                    fill-rule="nonzero"
                                                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                                                    transform="translate(2 4)">
                                                </path>
                                                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={Styles.content_}>
                                        <div className={Styles.nameAndDecorators}>
                                            <div className={Styles.name}>Friends</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className={Styles.channel + ' ' + Styles.container} >
                        <div className={Styles.interactive + ' ' + Styles.linkButton}>
                            <a className={Styles.link + ' ' + Styles.layout} href="./">
                                <div className={Styles.avatarWithText}>
                                    <div className={Styles.avatar}>
                                        <svg
                                            className={Styles.linkButtonIcon}
                                            aria-hidden="true"
                                            role="img"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24">
                                            <g fill="none" fill-rule="evenodd">
                                                <path
                                                    fill="currentColor"
                                                    fill-rule="nonzero"
                                                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                                                    transform="translate(2 4)">
                                                </path>
                                                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={Styles.content_}>
                                        <div className={Styles.nameAndDecorators}>
                                            <div className={Styles.name}>Friends</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <a></a>
                    <h2 className={Styles.privateChannelsHeaderContainer + ' ' + Styles.container}>
                        <span className={Styles.headerText}>Direct Messages</span>
                    </h2>
                    <li className={Styles.channel + ' ' + Styles.friend_container} >
                        <div className={Styles.interactive + ' ' + Styles.linkButton}>
                            <a className={Styles.link + ' ' + Styles.layout} href="./">
                                <div className={Styles.avatarWithText}>
                                    <div className={Styles.avatar}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={Styles.mask +' '+ Styles.svg}  aria-hidden="true">
                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                <div className={Styles.avatarStack}>
                                                    <img src="images/my_icon/name_light.png" alt=" " className={Styles.friend_avatar} aria-hidden="true"  />
                                                </div>
                                            </foreignObject>
                                            <rect width="10" height="10" x="22" y="22" fill="#747f8d" mask="url(#svg-mask-status-offline)" className={Styles.pointerEvents}>
                                            </rect>
                                        </svg>
                                    </div>
                                    <div className={Styles.content_}>
                                        <div className={Styles.nameAndDecorators}>
                                            <div className={Styles.friend_name +' ' + Styles.name}>Nguyen Duc Cong</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className={Styles.channel + ' ' + Styles.friend_container} >
                        <div className={Styles.interactive + ' ' + Styles.linkButton}>
                            <a className={Styles.link + ' ' + Styles.layout} href="./">
                                <div className={Styles.avatarWithText}>
                                    <div className={Styles.avatar}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={Styles.mask +' '+ Styles.svg}  aria-hidden="true">
                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                <div className={Styles.avatarStack}>
                                                    <img src="images/my_icon/name_light.png" alt=" " className={Styles.friend_avatar} aria-hidden="true"  />
                                                </div>
                                            </foreignObject>
                                            <rect width="10" height="10" x="22" y="22" fill="#747f8d" mask="url(#svg-mask-status-offline)" className={Styles.pointerEvents}>
                                            </rect>
                                        </svg>
                                    </div>
                                    <div className={Styles.content_}>
                                        <div className={Styles.nameAndDecorators}>
                                            <div className={Styles.friend_name +' ' + Styles.name}>Nguyen Duc Cong</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className={Styles.channel + ' ' + Styles.friend_container} >
                        <div className={Styles.interactive + ' ' + Styles.linkButton}>
                            <a className={Styles.link + ' ' + Styles.layout} href="./">
                                <div className={Styles.avatarWithText}>
                                    <div className={Styles.avatar}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={Styles.mask +' '+ Styles.svg}  aria-hidden="true">
                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                <div className={Styles.avatarStack}>
                                                    <img src="images/my_icon/name_light.png" alt=" " className={Styles.friend_avatar} aria-hidden="true"  />
                                                </div>
                                            </foreignObject>
                                            <rect width="10" height="10" x="22" y="22" fill="#747f8d" mask="url(#svg-mask-status-offline)" className={Styles.pointerEvents}>
                                            </rect>
                                        </svg>
                                    </div>
                                    <div className={Styles.content_}>
                                        <div className={Styles.nameAndDecorators}>
                                            <div className={Styles.friend_name +' ' + Styles.name}>Nguyen Duc Cong</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className={Styles.channel + ' ' + Styles.friend_container} >
                        <div className={Styles.interactive + ' ' + Styles.linkButton}>
                            <a className={Styles.link + ' ' + Styles.layout} href="./">
                                <div className={Styles.avatarWithText}>
                                    <div className={Styles.avatar}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" className={Styles.mask +' '+ Styles.svg}  aria-hidden="true">
                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                                <div className={Styles.avatarStack}>
                                                    <img src="images/my_icon/name_light.png" alt=" " className={Styles.friend_avatar} aria-hidden="true"  />
                                                </div>
                                            </foreignObject>
                                            <rect width="10" height="10" x="22" y="22" fill="#747f8d" mask="url(#svg-mask-status-offline)" className={Styles.pointerEvents}>
                                            </rect>
                                        </svg>
                                    </div>
                                    <div className={Styles.content_}>
                                        <div className={Styles.nameAndDecorators}>
                                            <div className={Styles.friend_name +' ' + Styles.name}>Nguyen Duc Cong</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>   
                </ul>
            </div>
        </div>
    );

}

export default PrimarySidebar;
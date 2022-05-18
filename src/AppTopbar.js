import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import moment from 'moment-timezone'


export const AppTopbar = (props) => {
    const [datetime, setDatetime] = useState(moment().format('LT'))
    useEffect(() => {
        console.log('props.layoutColorMode' , props.layoutColorMode);
    }, [props.layoutColorMode])

    useEffect(() => {
        let timer = setInterval(() => setDatetime(moment().tz('America/Guatemala').format('LT')), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
        
    })

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                {/* <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo"/> */}
                <img  src={'assets/layout/images/parking-car-parking-svgrepo-com.svg'} alt="logo"/>
                <span style={{marginLeft:10}}>Decima</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars"/>
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>
            <span style={{fontSize:18}}>{datetime}</span>


                {/* <ul className={classNames("layout-topbar-menu lg:flex origin-top", {'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-calendar"/>
                            <span>Events</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-cog"/>
                            <span>Settings</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                            <i className="pi pi-user"/>
                            <span>Profile</span>
                        </button>
                    </li>
                </ul> */}
        </div>
    );
}

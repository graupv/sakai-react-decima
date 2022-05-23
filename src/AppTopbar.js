import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import { InputSwitch } from 'primereact/inputswitch';
import moment from 'moment'


export const AppTopbar = (props) => {
    // const [switchValue, setSwitchValue] = useState(true);

    const [datetime, setDatetime] = useState(moment().format('LT'))
    useEffect(() => {
        console.log('props.layoutColorMode', props.layoutColorMode);
    }, [props.layoutColorMode])

    useEffect(() => {
        let timer = setInterval(() => setDatetime(moment().format('LT')), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    })

    return (
        <div className="layout-topbar" style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars" />
            </button>


            <Link to="/" className="layout-topbar-logo" >
                
                <img src={'assets/layout/images/parking-car-parking-svgrepo-com.svg'} alt="logo" />
                <span style={{ marginLeft: 10, fontSize:24 }}>Decima</span>
            </Link>


            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>
            <span style={{ fontSize: 18 }}>{datetime}</span>
            {/* <InputSwitch checked={switchValue} onChange={(e) => setSwitchValue(e.value)} /> */}

        </div>
    );
}

import React, { useEffect, useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import moment from 'moment'

export const Printing = (props) => {
    const [datetime, setDatetime] = useState(moment().format('LTS'))
    const codeElement = useRef(null);
    const toast = useRef(null);




    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-2">
                <div className="card mb-0">
                    <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                        <div>
                            <div className="flex justify-content-between mb-2">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Printer Status</span>

                                </div>
                                <div className="flex align-items-center justify-content-center bg-gray-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    {/* <i className="pi pi-map-marker text-orange-500 text-xl"/> */}
                                    <i className="pi pi-check text-green-500 text-xl" />
                                </div>
                            </div>
                            <Divider/>

                            <div className="flex justify-content-between mb-4">
                                {/* <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{width: '2.25rem', height: '2.25rem'}}>
                            <i className="pi pi-info-circle text-blue-500 text-xl"/>
                        </div> */}
                                <div>
                                    <span className="block text-500 font-medium mb-3">Último Impreso</span>
                                    <div className="text-900 font-medium text-xl" style={{ textAlign: 'center', marginRight: '2rem' }}># 152</div>
                                </div>
                            </div>

                            <span className="text-green-500 font-medium">{datetime}</span>
                        </div>

                    </div>
                    {/* <span className="text-500">since last visit</span> */}

                </div>
            </div>

           
            <div className="col-12 lg:col-6 xl:col-2">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Customers</span>
                            <div className="text-900 font-medium text-xl">28441</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">520  </span>
                    <span className="text-500">newly registered</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-2">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Comments</span>
                            <div className="text-900 font-medium text-xl">152 Unread</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 text-xl" />
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">responded</span>
                </div>
            </div>
        </div>
    );
}

Printing.defaultProps = {
    lang: 'jsx',
    style: null
};

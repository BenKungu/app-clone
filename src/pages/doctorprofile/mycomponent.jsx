import React from 'react';
import { Link } from 'react-router-dom';
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';


const MyComponent=()=>{

    return( 
        // <SimpleReactLightbox>
            <div>                            
            {/* <SRLWrapper>             */}
            <ul className="clinic-gallery">
                <li >
                    <Link to="#">
                        <img alt="Feature" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img  alt="Feature" />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img  alt="Feature"/>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img  alt="Feature" data-attribute="SRL"/>
                    </Link>
                </li>
            </ul>
        
            {/* </SRLWrapper> */}
        </div>
    // </SimpleReactLightbox>              
    );
    }


export default MyComponent;
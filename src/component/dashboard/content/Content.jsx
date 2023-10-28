import React, { useState } from 'react';
import '../../../assets/css/project.css';
import Logo2 from '../../../assets/image/imgregis/logo-prima.png';

import '@coreui/coreui/dist/css/coreui.min.css'
import { CImage ,CCarouselItem,CCarousel} from '@coreui/react'


function ContentDashboard() {

    return (
      
<>
    <div className='container-dashboard'>
        <div className='container-colousel'>

            <CCarousel  controls indicators>
                <CCarouselItem  >
                    <CImage className="d-block w-100" src={Logo2} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 " src={Logo2} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem >
                    <CImage className="d-block w-100" src={Logo2} alt="slide 3" />
                 </CCarouselItem>
            </CCarousel>
        </div>
    <div className='container-count'>
        <div className='content-proses'>
        <p>Detail Proses</p>
          <span>8</span>
        </div>
        <div className='content-proses'>
        <p> Department</p>
          <span>8</span>
        </div>
        <div className='content-proses'>
        <p> Lolos</p>
          <span className='lolos'>8</span>
        </div>
        <div className='content-proses'>
        <p>Tidak Lolos</p>
          <span className='tidak-lolos'>8</span>
        </div>
    </div>
 </div>

   
</>
    );
  }
  
  export default ContentDashboard;
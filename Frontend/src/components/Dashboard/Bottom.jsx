import React from 'react'
import './Bottom.css'

import {Box,Image} from '@chakra-ui/react';
const Bottom = () => {
  return (
    <div>
         <Box
        
          maxW={'1170px'}
          h={'200px'}
          m="15px auto "
         mt="50px"
         boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        >
        

          <div className="middle__bottom" style={{padding:"20px"}}>
            <div className="bottom__first">
              <Image
                style={{ height: '40px', marginRight: ' 10px' }}
                src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/icon_heart_rate.png"
              />
              <h4 style={{ color: 'grey' }}>Health on July 22</h4>
              <Image
                style={{ height: '40px', marginLeft: ' 10px' }}
                src="https://www.mynetdiary.com/img/icon/date_range_gray.png"
              />
            </div>
            
            <div className="bottom__second">
              <div className="bottom__second__left">
                <p>Daily Steps</p>
                <div>
                  <h4 style={{ color: 'grey' }}>no target</h4>
                  <h4 style={{ color: 'grey' }}>not logged</h4>
                </div>
                
              </div>
              <div className="bottom__second__right">
                <p>Heart Rate</p>
                <div>
                  <h4 style={{ color: 'grey' }}>no target</h4>
                  <h4 style={{ color: 'grey' }}>not logged</h4>
                </div>
                
              </div>
            </div>
       
          </div>
        </Box>
    </div>
  )
}

export default Bottom
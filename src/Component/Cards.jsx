import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios'


function Cards(props) {
    
    return (
       
            <div>
              
                    <>
            <MDBRow>
             <MDBCol md='4'>
               <MDBCard wide cascade>
                 <MDBView cascade>
                   <MDBCardImage
                     hover
                     overlay='white-slight'
                     className='card-img-top'
                     src=''
                     alt='Card cap'
                   />
                 </MDBView>
       
                 <MDBCardBody cascade className='text-center'>
                   <MDBCardTitle className='card-title'>
                     <strong> {props.name} </strong>
                   </MDBCardTitle>
       
                   <p className='font-weight-bold blue-text'>{props.email}</p>
       
                   <MDBCardText>
                    {props.body}{' '}
                   </MDBCardText>
       
                   <MDBCol md='12' className='d-flex justify-content-center'>
                     <a href='!#' className='px-2 fa-lg li-ic'>
                       <MDBIcon fab icon='linkedin-in'></MDBIcon>
                     </a>
       
                     <a href='!#' className='px-2 fa-lg tw-ic'>
                       <MDBIcon fab icon='twitter'></MDBIcon>
                     </a>
       
                     <a href='!#' className='px-2 fa-lg fb-ic'>
                       <MDBIcon fab icon='facebook-f'></MDBIcon>
                     </a>
                   </MDBCol>
                 </MDBCardBody>
               </MDBCard>
             </MDBCol>
           </MDBRow>
           </>
          
               </div>
     
    )
}

export default Cards

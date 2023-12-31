import React from 'react'
import{  useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate =useNavigate();
  return (
    <div className="page-container">
        <div style={{
            marginTop:"64px",
        }}><h1>해당 페이지를 찾을 수 없습니다</h1></div>
        <div
        style={{
            fontSize: "20px",
            lineHeight:"1.6",

        }}>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
        <div 
        onClick={()=>navigate('/')}
        style={{
            fontSize: "20px",
            lineHeight:"1.6",
            color:'red',
            cursor:'pointer',


        }}
        >메인 페이지로 이동</div>
       
         </div>
  )
}

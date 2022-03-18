import React, { useEffect, useState,} from 'react'
import axios from 'axios'


function FunctionTag() {
    const [mytext, mytextUpdate] = useState(' mytext의 초기값이다.');

    useEffect( async ()=>{
        await axios.post('/getsend/post',{})
        .then (res => {
            mytextUpdate(res.data.title)
            }
        )        
    },[])

   
  return (
    <div>  post 는 axios .post 로 응답받는다 .  {mytext}</div>
  )
}

export default FunctionTag
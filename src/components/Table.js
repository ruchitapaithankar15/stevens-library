import React from 'react'
import styled from 'styled-components'
import Blog from "../app/json files/data.json"
// import '../Table.css'
import '../Table.css'
import { useEffect, useState } from "react";
function Table() {
  return (
    <Container style={{display: 'flex',  justifyContent:'center', color: 'black'}}>
    <div style= {{padding:'50px'}}>
      <tbody className='content-table'>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        {Blog.map((item, index) => (
          <tr key={index}>
            <td>{item.ID}</td>
            <td>{item.Name}</td>
            {/* <td>
              <img src={item.Image} alt="" height={100} />
            </td> */}
            <td>{item.Floor}</td>
          </tr>
        ))}
      </tbody>
    </div>
    </Container>
  )
}

export default Table



const Container = styled.div`
    h4{
        font-size: 20px;
        letter-spacing: 1.8 px;
        color: black;
    }
    color: black
`

import React from 'react'
import styled from 'styled-components'
import Blog from "../app/json files/data.json"
// import '../Table.css'
import '../Table.css'
import { useEffect, useState } from "react";
function Table() {
  return (
    <Container>
    <div className='container'>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        </thead>
        <tbody>
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
      </table>
    </div>
    </Container>
  )
}

export default Table



const Container = styled.div`
color: black;
   
`

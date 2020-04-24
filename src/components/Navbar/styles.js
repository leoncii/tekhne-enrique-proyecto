import React from 'react'
import Styled from 'styled-components'

export const Img = Styled.img`
  border-radius: 50%;
  height: 85px;
  width: 85px;
  box-sizing: border-box;
  object-fit: cover;
  contain: size;
`

export const Div = Styled.div`
  display: grid;
  grid-template-columns:minmax(85px, auto) 1fr 1fr 1fr ;
  grid-template-rows: 85px;
  /* text-align: center; */
  /* align-items: center; */
  place-items:center;
  background-color: ghostwhite;

`
export const Button = Styled.button`
border: none;
  border-style: none;
  /* border: 2px solid #0099CC; */
  background-color: ghostwhite;
  border-radius: 5px;
`
export const Span = Styled.span`
  color: black;
  font-size: 1rem;
  letter-spacing: 1px;
`

export const A = Styled.a`
  text-decoration: none;
  font-weight: 500;
  /* padding: 10px; */
  padding: 8px;
  max-width: 180px;
  color: black;
  font-size: 1.2em;
`

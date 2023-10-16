import React from 'react'




export default function Figure({imageURL, date}) {
    return (
      <figure>
      <img src ={imageURL} />
      <figcaption>Awesome Pic taken on {date}</figcaption>
    </figure>
    )
  }
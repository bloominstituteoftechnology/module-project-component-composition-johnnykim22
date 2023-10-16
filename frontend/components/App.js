import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'










function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setPhoto(res.data)
      })
      .catch(err => {
        console.log(err.message)
    })
    }
    fetchPhoto()
    setApod({
      "date": "2019-07-31",
      "explanation": "What's happening to this spiral galaxy? Just a few hundred million years ago, NGC 2985 was a normal spiral galaxy -- spinning, creating stars -- and with noticeably less gas and dust than it has today.  Only in the last few hundred million years has NGC 2985's overall shape been distorted by gravitational interactions with its neighbor NGC 2984, not pictured.  The interactions have caused gas and dust to be pulled from the inside of NGC 2985 to the outside, causing gas and dust to be abnormally spread out and creating the spiral arms visible here.  The interactions have also triggered unusually strong star formation in the outer arms.  NGC 2985 spans about 80,000 light years and lies about 70 million light years away toward the constellation of the Great Bear (Ursa Major).",
      "hdurl": "https://apod.nasa.gov/apod/image/1907/NGC2985_Hubble_960.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 2985: Not Your Parents' Spiral Galaxy",
      "url": "https://apod.nasa.gov/apod/image/1907/NGC2985_Hubble_960.jpg"
    })
  }, [])

  if (!apod) return 'Fetching photo of the day...'
  return (
  <section>
   <Card
    title={apod.title}
    text= {apod.explanation}
    imageURL={apod.url}
    date={apod.date}
   />
    
  </section>
  )
}

export default App

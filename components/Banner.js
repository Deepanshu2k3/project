import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are always looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your project to the next level!🚀' />
          </div>
          <div> <a href="https://calendly.com/viralweb3/"><button className='button-primary'>Schedule a meeting →</button></a>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

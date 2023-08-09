import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Taking your project to exponential growth' />
              <p className='desc-p'>At ViralWeb3, we begin by understanding your project and goals, then we launch dynamic marketing campaigns using influencers, KOLs, AMAs, and innovative growth tactics to make your Web3 project go viral. We handle everything from launch to scaling, including community management, content strategy, and project planning.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Successful projects</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Team members</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/logovw.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At ViralWeb3, our mission is to ignite digital revolutions by empowering Web3 projects with strategic marketing prowess, fostering thriving communities, and propelling innovation to reshape the online landscape. With organic growth strategies, we help projects elevate from ground zero to soar towards the moon</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency

import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsTwitter } from "react-icons/bs"
import { AiFillTelegram, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='ViralWeb3' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> 
              </span>
              <br />
              <a target="_blank" href="mailto:contact@viralweb3.com"><h3>contact@viralweb3.com</h3></a>
              
              <br />
              <a target="_blank" href="https:t.me/viralweb3"> 
              <button className='button-primary'>Request for quote</button> </a>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About agency</Link>
              </li>
              <li>
                <Link href='/'>Our team</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Project Marketing & Management</Link>
              </li>
              <li>
                <Link href='/'>Project Growth Hacking</Link>
              </li>
              <li>
                <Link href='/'>Influencers and KOL Marketing</Link>
              </li>
              <li>
                <Link href='/'>Advisory for early projects</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link target="_blank" href='https://twitter.com/viralweb3com'>
                    <BsTwitter size={25} />
                  </Link>
                </li>
                
                <li>
                  <Link target="_blank" href='https://instagram.com/viralweb3_'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href='https://www.linkedin.com/company/viralweb3/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 ViralWeb3. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>ViralWeb3</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

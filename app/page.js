import Image from 'next/image'
import bgImg from './assets/Combined White.png'
import profileImg from './assets/ProfileUpdate.jpg'

export default function Home() {
  return (
    <>
      <div className="home-gallery">
    <Image src={bgImg}  className="img-swap" alt=""/>
</div>

<div className="aboutclip">
    <div className="homeProfileContainer">
        <Image src={profileImg}  className="homeProfile img-swap" alt=""/>
    </div>
    <div className="aboutclip-text">
        <h2 className="text-2xl">Welcome to Norlight Photography</h2>
        <p className='text-lg'>A site dedicated to the amazing beauty of northern BC and Alberta. Through this adventure I have been able to see many places that I would not have visited otherwise. 
          The last couple of years have been an awesome adventure and I can&apos;t wait to see where it takes me next! </p>
    </div>
    
</div>
</>
  )
}

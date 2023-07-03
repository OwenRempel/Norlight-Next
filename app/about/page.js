import Image from 'next/image'
import profile from '../assets/ProfileUpdate.jpg'
import create from '../assets/create.png'
import banner from '../assets/banners/5.jpg'
export default function page(params) {
    return(
        <>
        <div className="header">
            <Image src={banner} alt=''  className="headerImg img-swap" />
        </div>
        <div className="mid-content">
            <h1 className="title-text text-5xl">
                About
            </h1>
            <div className="about-cont">
                <div className="about">
                    <Image src={profile} className="about-img img-swap" alt=""/>
                    <p className="about-text">Hello there my name is Owen! For the past couple of years I
                        have discovered that I have a passion for nature and landscape photography. 
                        I am fortunate in that I grew up in an area with so many beautiful landscapes. 
                        You never have to look very far here in the north to find an amazing spectacle;
                        they are all around us and all we have to do is find them. Finding these sorts 
                        of spots is somewhat of an obsession of mine. I find myself spending large amounts 
                        of time just seeing if there is something amazing at the end of a road or waking up 
                        when it is still dark out to possibly glimpse an amazing sunrise. A sunrise that you 
                        didn&apos;t know was going to be there until the moment it breaks; these are some of 
                        the most amazing things in this world. Yes, sometimes there will be nothing at 
                        the end of the road and sometimes I get to my spot to find that it is overcast 
                        and there will be no sunrise. But that doesn&apos;t matter, it is the journey more 
                        than the final image that excites me and keeps me looking for the next great image. 
                        Every one of my images has a story. Some images have amazing stories like 
                        waking up at three in the morning to go to an amazing spot to wait for the 
                        sunrise, or pushing over that next ridge to see what the view is like on the 
                        other side.  Other images have stories about me just happening to be in the right
                            place at the right time and snapping the shot. So no matter the photo, I&apos;m glad 
                            for the story behind them because they all make up my journey of finding what&apos;s 
                            out there and see some amazing new sight of creation. I hope you enjoy my photos 
                            as much as I enjoy taking them!
                    </p>
                </div>
                <div className="about-more">
                    <Image src={create} className='create-img img-swap' alt="create"/>
                    <div className="tech1">
                        <h2 className="tech-text text-xl">Gear</h2>
                        <ul className='tech-list'>
                            <li><a href='https://www.amazon.ca/Canon-DSLR-Camera-Body-Only/dp/B01D55X5U8' target="_blank">Canon 80D</a></li>
                            <li><a href='https://www.amazon.ca/Canon-T6-Digital-18-55mm-3-5-5-6/dp/B01CO2JPYS?th=1' target="_blank">Canon Rebel T6</a></li>
                            <li><a href='https://www.amazon.ca/DJI-Mavic-Air-Arctic-White/dp/B078WP48CH/' target="_blank">DJI Mavic Air</a></li>
                            <li><a href='https://www.amazon.ca/dp/B086XCGMN7/' target="_blank">DJI Mavic Air 2</a></li>
                            <li><a href='https://www.amazon.ca/Canon-EF-16-35mm-USM-Lens/dp/B00K8942SO/' target="_blank">Canon 16-35mm f4</a></li>
                        </ul>
                    </div>
                    <div className="tech2">
                        <h2 className="tech-text text-xl">Awesome Locations</h2>
                        <ul className='tech-list'>
                            <li><a href="https://goo.gl/maps/qesw2Nfeq6RiknQP6" target="_blank">Hole in the wall</a></li>
                            <li><a href="https://goo.gl/maps/HJqFKG7BXEAUVoC37" target="_blank">Sukunka Falls</a></li>
                            <li><a href="https://goo.gl/maps/K53LtPYeCyDDqyu66" target="_blank">Kinuseo Falls</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

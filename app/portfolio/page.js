import Image from 'next/image'
import banner from '../assets/banners/3.jpg'
import splitImg from '../assets/splits/banner bg.png'
import Links from '../components/Links'
export default function page(params) {
    return(
        <>
            <div className="header">
                <Image src={banner} alt=''  className="headerImg img-swap" />
            </div>
            <div className="mid-content">
                <h1 className="title-text text-5xl">
                    Portfolio
                </h1>
                <div className="info">
                    <p className="title-p">Here are a few of my favorite images that I&apos;ve taken. There are far too many to show all of them but here are some of the best. If you want to see more try refreshing the page or go checkout my social media accounts!
                    </p>
                    <Links/>
                </div>               
            </div>
        </>
    )
};
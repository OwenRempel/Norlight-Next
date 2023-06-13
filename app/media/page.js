import Image from 'next/image'
import banner from '../assets/banners/6.jpg'
import splitImg from '../assets/splits/banner bg.png'
export default function page(params) {
    return(
        <>
            <div className="header">
                <Image src={banner}  className="headerImg img-swap" />
            </div>
            <div className="mid-content" >
                <h1 className="title-text text-5xl">Videos</h1>
                <p className="title-p text-center">Here are some short videos and some time lapses I've made mostly from drone footage. </p>
            </div>
            <div className="youtube">
                <iframe className="yt-vid" title="Videos from my Youtube" src="https://www.youtube.com/embed/jsf_bDR8tSM" frameborder="0" allowfullscreen></iframe>
                <iframe className="yt-vid" title="Videos from my Youtube" src="https://www.youtube.com/embed/YFJCY4MKMYs" frameborder="0" allowfullscreen></iframe>
                <iframe className="yt-vid" title="Videos from my Youtube" src="https://www.youtube.com/embed/XGhglOOEe2Q" frameborder="0" allowfullscreen></iframe> 
                <iframe className="yt-vid" title="Videos from my Youtube" src="https://www.youtube.com/embed/rNGg4AQy4To" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="mid-content">
                <h1 className="title-text text-5xl">
                    Walpapers
                </h1>
                    <p className="title-p text-center">Here are some of my favorite walpapers. Feel free to download and use them!</p>

                <div className="wallpapers" id='Wall'>
                </div>
            </div>
        </>
    )
};

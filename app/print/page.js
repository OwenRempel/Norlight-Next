import Image from 'next/image'
import banner from '../assets/banners/4.jpg'
export default function page(params) {
    return(
        <>
            <div className="header">
                <Image src={banner}  className="headerImg img-swap" />
            </div>
            <div className="mid-content">
                <h1 className="title-text text-5xl">
                    Prints
                </h1>
                <div className="info">
                    <p className="title-p">This area is still under development
                    </p>
                </div>               
            </div>
        </>
    )
};
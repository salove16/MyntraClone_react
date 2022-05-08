import React from 'react'
import styles from"./Footer.module.css"
import googlePlay from "./images/googlePlay.png"
import Appstore from "./images/AppStore.png"
import Social from "./images/Social.png"
import Guarantee from "./images/Guarantee.png"

export const Footer=() =>{
    const footer1=[
        {title:"ONLINESHOPPING",
        sub:["Men","Women","Kids","Home & Living","Beauty","Gift Cards","Myntra Insider"]},
        {title:"USEFUL LINKS",
        sub:["Contact Us","FAQ","T&C","Terms of Use","Track Order","Shipping","Cancellation","Returns","Whitehat","Blog","Careers","Privacy policy","Site Map","Corporation Information"]},
    ]

    return (
        <div className={styles.Footerbody}>
        <hr></hr>
            <div className={styles.Footerclass}>
                {footer1.map((item,j)=><div key={j} className={styles.Footerclassdiv1}>
                   <h5 className={styles.colorblack}>{item.title}</h5>
                        {item.sub.map((el,z)=><p key={z}>{el}</p>)}
                    </div>)}
                <div  className={styles.Footerclassdiv2}>
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <div>
                        <img className={styles.footericon1} src={googlePlay} alt="" />
                        <img className={styles.footericon2} src={Appstore} alt="" />
                    </div>
                    <h5>KEEP IN TOUCH</h5>
                    <img src={Social} alt="" />
                </div>
                <div>
                    <img className={styles.footer4} src={Guarantee} alt="" />
                </div>
            </div>
            <hr></hr> 
            <div className={styles.footer_popular}>Popular Searches</div>
            <div className={styles.footer_popular_details}>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</div>
            <div className={styles.footer5}>
            <p className={styles.bottom}>In case of any concern, <span className={styles.footerspan}>Contact Us</span></p>
            <p className={styles.bottom}>© 2022 www.myntra.com. All rights reserve</p>
            </div> 
            <hr></hr>     
        </div>
    )
}



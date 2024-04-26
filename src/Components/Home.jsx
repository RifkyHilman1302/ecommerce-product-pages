import './Home.css'
import iconsMenu from '../Assets/images/icon-menu.svg'
import iconsCart from '../Assets/images/icon-cart.svg'
import imagesUser from '../Assets/images/image-avatar.png'
import iconsDelete from '../Assets/images/icon-delete.svg'
import iconsClose from '../Assets/images/icon-close.svg'
import iconsNext from '../Assets/images/icon-next.svg'
import iconsPrev from '../Assets/images/icon-previous.svg'
import imagesProduct1 from '../Assets/images/image-product-1.jpg'
import imagesProduct2 from '../Assets/images/image-product-2.jpg'
import imagesProduct3 from '../Assets/images/image-product-3.jpg'
import imagesProduct4 from '../Assets/images/image-product-4.jpg'
import thumbnail1 from '../Assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../Assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../Assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../Assets/images/image-product-4-thumbnail.jpg'

import { useRef, useState, useEffect } from 'react'

const Home = () => {
    const alertCart = useRef(null)
    const cartProduct = useRef(null)
    const result = useRef(null)
    const btnCheckout = useRef(null)
    const alertSucces = useRef(null)
    const navbar = useRef(null)
    const imagesClickedContent = useRef(null)
    const [jumlahProduct, setJumlahProduct] = useState(0)
    const [noImages, setNoImages] = useState(1)
    const [noImagesClicked, setNoImagesClicked] = useState(1)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    let totalPrice = 125 * jumlahProduct


    useEffect(() => {
        setShowSuccessAlert(true);

        const timeout = setTimeout(() => {
            setShowSuccessAlert(false);
        }, 5000);

        return () => clearTimeout(timeout); 
    }, []);


    const Hover = () => {
        alertCart.current.style.display = 'flex'
    }

    const NoHover = () => {
        alertCart.current.style.display = 'none'
    }

    let selectImagesProduct 
    let selectImagesProductClicked 

    if (noImages === 1) {
        selectImagesProduct = imagesProduct1
        
    } 
    else if (noImages === 2) {
        selectImagesProduct = imagesProduct2
    }
    else if (noImages === 3) {
        selectImagesProduct = imagesProduct3
    }
    else if (noImages === 4) {
        selectImagesProduct = imagesProduct4
    }
    else {
        selectImagesProduct = imagesProduct1
    }

    if (noImagesClicked === 1) {
        selectImagesProductClicked = imagesProduct1
    } 
    else if (noImagesClicked === 2) {
        selectImagesProductClicked = imagesProduct2
    }
    else if (noImagesClicked === 3) {
        selectImagesProductClicked = imagesProduct3
    }
    else if (noImagesClicked === 4) {
        selectImagesProductClicked = imagesProduct4
    }
    else {
        selectImagesProductClicked = imagesProduct1
    }

    const klikThumbnail1 = (items) => {
        items = 1
        setNoImages(items)
    }
    const klikThumbnail2 = (items) => {
        items = 2
        setNoImages(items)
    }
    const klikThumbnail3 = (items) => {
        items = 3
        setNoImages(items)
    }
    const klikThumbnail4 = (items) => {
        items = 4
        setNoImages(items)
    }

    const kurangKlik = () => {
        const newJumlah = jumlahProduct - 1;
        setJumlahProduct(newJumlah);
    }

    const tambahKlik = () => {
        const newJumlah = jumlahProduct + 1;
        setJumlahProduct(newJumlah);
    }

    const addToCart = () => {
        cartProduct.current.style.display = 'flex';
        btnCheckout.current.style.display = 'flex';
        result.current.style.display = 'none';
        alertSucces.current.style.display = 'flex';
    }

    const clickBars = () => {
        navbar.current.style.display = 'flex';
    }
    const clickClose = () => {
        navbar.current.style.display = 'none';
    }

    const clickNext = () =>  {
        const NewJumlah = noImagesClicked + 1
        setNoImagesClicked(NewJumlah);
    }
    const clickPrev = () =>  {
        const NewJumlah = noImages - 1
        setNoImagesClicked(NewJumlah);
    }

    const iconsCLoseCLicked = () => {
        imagesClickedContent.current.style.display = 'none'
    }
    const imagesProductClicked = () => {
        imagesClickedContent.current.style.display = 'flex'
    }

    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-menu">
                        <div className="nav-title">
                            <img className='icons-menu' onClick={clickBars} src={iconsMenu} alt="" />
                            <h1>sneakers</h1>
                        </div>
                        <div className="nav-btn" ref={navbar}>
                            <img src={iconsClose}  onClick={clickClose} className='icons-close' alt="" />
                            <button>Collections</button>
                            <button>Man</button>
                            <button>Women</button>
                            <button>About</button>
                            <button>Contact</button>
                        </div>
                    </div>
                    <div className="navbar-images">
                        <div className="images-cart">
                            <img src={iconsCart} alt="" onMouseOver={Hover} onMouseOut={NoHover} className='icons-cart'/>
                            <p>1</p>
                        </div>
                        <img src={imagesUser} alt="" className='img-user'/>
                    </div>
                </div>
            </div>
            <div className="images-clicked" ref={imagesClickedContent}>
                    <div className="product-images-clicked">
                        <div className="click-icons-close">
                            <img src={iconsClose} onClick={iconsCLoseCLicked} className='icons-close-click' alt="" /> 
                        </div>
                        <div className="clicked-images-product">
                            <img src={selectImagesProductClicked} className='img-product-clicked' alt="" />
                            <div className="next-icons" onClick={clickNext}>
                                <img src={iconsNext}  class='iconsNext' alt=''/>
                            </div>
                            <div className="prev-icons" onClick={clickPrev} disabled={noImages === 1}>
                                <img src={iconsPrev}  class='iconsPrev' alt=''/>
                            </div>
                        </div>
                        <div className="product-images-select">
                            <div className="img-thumbnail-click" >
                                <img src={thumbnail1}  className='img-product-thumbnail-click' alt="" />
                            </div>
                            <div className="img-thumbnail-click">
                                <img src={thumbnail2} className='img-product-thumbnail-click' alt="" />
                            </div>
                            <div className="img-thumbnail-click" >
                                <img src={thumbnail3} className='img-product-thumbnail-click' alt="" />
                            </div>
                            <div className="img-thumbnail-click">
                                <img src={thumbnail4} className='img-product-thumbnail-click' alt="" />
                            </div>
  
                        </div>
                    </div>
            </div>
            <div className="alert-cart" ref={alertCart}>
                <p className='cart-title'>Cart</p>
                <div className="hr"></div>
                <div className="cart-content" ref={cartProduct}>
                    <div className="cart-content-product">
                        <img src={selectImagesProduct} className='img-cart-product' alt="" />
                        <div className="cart-product">
                            <p className='cart-product-name'>Fall Limited Edition Sneakers</p>
                            <div className="cart-price">
                                <p className='harga-price'>$125.00</p>
                                <p className='harga-kali'>x</p>
                                <p className='harga-Jumlah'>{jumlahProduct}</p>
                                <p className='harga-total'>${totalPrice}.00</p>
                            </div>
                        </div>
                        <img src={iconsDelete} className='icons-delete' alt="" />
                    </div>
                </div>
                <div className="btn-cart-checkout" ref={btnCheckout}>
                    <button className='btn-cart' >Checkout</button>
                </div>
                <div className="no-result" ref={result}>
                    <p className='cart-no-result'>No Result</p>
                </div>
            </div>


            <div className="product-container">
                <div className="product-content">
                    <div className="product-images">
                        <img src={selectImagesProduct} onClick={imagesProductClicked} className='img-product' alt="" />
                        <div className="product-images-select">
                            <div className="img-thumbnail" onClick={klikThumbnail1}>
                                <img src={thumbnail1}  className='img-product-thumbnail' alt="" />
                            </div>
                            <div className="img-thumbnail" onClick={klikThumbnail2}>
                                <img src={thumbnail2} className='img-product-thumbnail' alt="" />
                            </div>
                            <div className="img-thumbnail" onClick={klikThumbnail3}>
                                <img src={thumbnail3} className='img-product-thumbnail' alt="" />
                            </div>
                            <div className="img-thumbnail" onClick={klikThumbnail4}>
                                <img src={thumbnail4} className='img-product-thumbnail' alt="" />
                            </div>
  
                        </div>
                    </div>
                    <div className="product-titles">
                        <p className='product-title-first'>Sneaker Company</p>
                        <p className='product-title-two'>Fall Limited Edition Sneakers</p>
                        <p className='product-title-three'> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                        <div className="product-price">
                            <div className="product-title-price">
                                <p className='title-price-first'>$125.00</p>
                                <p className='title-price-two'>50%</p>
                            </div>
                            <div className="disc-price">
                                <s className='title-price'>$250.00</s>
                            </div>
                        </div>
                        <div className="product-input-btn">
                            <div className="input-product">
                                <button onClick={kurangKlik} disabled={jumlahProduct === 0}>-</button>
                                <p className='product-total'>{jumlahProduct}</p>
                                <button onClick={tambahKlik}>+</button>
                            </div>
                            <button className='btn-add-cart' disabled={jumlahProduct === 0} onClick={addToCart}>Add to cart</button>
                            
                        </div>
                    </div>
                    {showSuccessAlert && (
                        <div class="success" ref={alertSucces}>
                            <div class="success__icon">
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" fill="#393a37" fill-rule="evenodd"></path></svg>
                            </div>
                            <div class="success__title">Product Berhasil Di Tambahkan</div>
                            <div class="success__close"><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
                        </div>

                    )}
                </div>
            </div>
                
        </div>
    )
}

export default Home
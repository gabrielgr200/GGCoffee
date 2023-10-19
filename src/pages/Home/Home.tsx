import './home.css'
import Main from '../../img/main.png'
import About from '../../img/cafe.jpg'
import Header from '../../components/Header/Header'
import Products from '../../components/Produts/Products'
import Cutomers from '../../components/Cutomers/Cutomers'
import Footer from '../../components/Footer/Footer'

export default function Home() {
 
  return (
    <>
    <Header/>
    <section className="home" id="homr">
      <div className="home-text">
        <h1>Comece o dia <br /> com café</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, a.</p>
        <a href="/" className="btn">Compre agora</a>
      </div>
      <div className="home-img">
        <img src={Main} />
      </div>
    </section>

    <section className="about" id="about">
      <div className="about-img">
        <img src={About} />
      </div>
      <div className="about-text">
        <h2>Nossa história</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, eveniet sunt beatae iure dolore inventore illum vel deleniti expedita!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat, eveniet sunt beatae iure dolore inventore illum vel deleniti expedita!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis qui quis ducimus?</p>
        <a href="/" className='btn'>Saiba Mais</a>
      </div>
    </section>

    <Products/>
    <Cutomers/>
    <Footer/>

    <div className="copyright">
      <p>&#169; GGCoffee All Right Reserved</p>
    </div>
    </>
  )
}

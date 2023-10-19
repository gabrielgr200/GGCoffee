import React from 'react'
import '../../pages/Home/home.css'
import P1 from '../../img/p1.png'
import P2 from '../../img/p2.png'
import P3 from '../../img/p3.png'
import P4 from '../../img/p4.png'
import P5 from '../../img/p5.png'
import P6 from '../../img/p6.png'

export default function Products() {
  return (
    <>
    <section className="products" id="products">
        <div className="heading">
            <h2>Nossos produtos populares</h2>
        </div>
    </section>
    <div className="products-container">
        <div className="box">
            <img src={P1}/>
            <h3>Americano puro</h3>
            <div className="content">
                <span>R$ 25,00</span>
                <a href="/">Adicionar ao carrinho</a>
            </div>
        </div>
        <div className="box">
            <img src={P2}/>
            <h3>Americano puro</h3>
            <div className="content">
                <span>R$ 25,00</span>
                <a href="/">Adicionar ao carrinho</a>
            </div>
        </div>
        <div className="box">
            <img src={P3}/>
            <h3>Americano puro</h3>
            <div className="content">
                <span>R$ 25,00</span>
                <a href="/">Adicionar ao carrinho</a>
            </div>
        </div>
        <div className="box">
            <img src={P4}/>
            <h3>Americano puro</h3>
            <div className="content">
                <span>R$ 25,00</span>
                <a href="/">Adicionar ao carrinho</a>
            </div>
        </div>
        <div className="box">
            <img src={P5}/>
            <h3>Americano puro</h3>
            <div className="content">
                <span>R$ 25,00</span>
                <a href="/">Adicionar ao carrinho</a>
            </div>
        </div>
        <div className="box">
            <img src={P6}/>
            <h3>Americano puro</h3>
            <div className="content">
                <span>R$ 25,00</span>
                <a href="/">Adicionar ao carrinho</a>
            </div>
        </div>
    </div>
    </>
  )
}

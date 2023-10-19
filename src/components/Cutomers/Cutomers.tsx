import React from 'react'
import '../../pages/Home/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import Rev1 from '../../img/rev1.jpg'
import Rev2 from '../../img/rev2.jpg'
import Rev3 from '../../img/rev3.jpg'

export default function Cutomers() {
  return (
    <>
    <section className="customers" id="customers">
        <div className="heading">
            <h2>Nossos clientes</h2>
        </div>
        <div className="customers-container">
            <div className="box">
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStarHalf} className='bx'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi quae, ullam ab rem at dicta natus rerum iste veniam?</p>
                <h2>Leirbag Queiroz</h2>
                <img src={Rev1} />
            </div>
            <div className="box">
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStarHalf} className='bx'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi quae, ullam ab rem at dicta natus rerum iste veniam?</p>
                <h2>Leirbag Queiroz</h2>
                <img src={Rev2} />
            </div>
            <div className="box">
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStar} className='bx'/>
                    <FontAwesomeIcon icon={faStarHalf} className='bx'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi quae, ullam ab rem at dicta natus rerum iste veniam?</p>
                <h2>Leirbag Queiroz</h2>
                <img src={Rev3} />
            </div>
        </div>
    </section>
    </>
  )
}

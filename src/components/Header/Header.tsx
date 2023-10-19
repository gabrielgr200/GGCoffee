import React, { useState } from 'react';
import '../../pages/Home/home.css'
import Logo from '../../img/coffee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isSearchActive, setSearchActive] = useState(false);

    const toggleSearch = () => {
      setSearchActive(!isSearchActive);
    };

    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('shadow', window.scrollY > 0);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <header>
        <a href="/Home" className='logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <FontAwesomeIcon icon={faBars}  className='fa-solid' id='menu-icon' />

        <ul className="navbar">
          <li><a href="/Home">Home</a></li>
          <li><a href="/">Sobre nós</a></li>
          <li><a href="/">Produtos</a></li>
          <li><a href="/">Clientes</a></li>
        </ul>
        <div className="header-icon">
          <FontAwesomeIcon icon={faCartShopping} className='fa-solid' />
          <FontAwesomeIcon icon={faSearch}  className='fa-solid' id='search-icon' onClick={toggleSearch} />
        </div>
        <div className={`search-box ${isSearchActive ? 'active' : ''}`}>
          <input type="search" name="" id="" placeholder='pesquise o seu café  &#128521;'/>
        </div>
      </header>
  )
}

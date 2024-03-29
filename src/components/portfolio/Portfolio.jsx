import React from 'react'
import './port.css'
import Proj1 from '../../assets/proj1.jpg'
import Proj2 from '../../assets/proj2.png'
import Proj3 from '../../assets/proj3.png'
import Proj4 from '../../assets/proj4.png'
import Proj5 from '../.././assets/dotDesign.jpg'
import Proj6 from '../../assets/outplace.jpg'

const data = [
  {
    id:1,
    img:Proj1,
    title:'Furballs Corner',
    github:'https://github.com/mendoza2929/S.E-FurballsCorner',
    demo: 'https://dribbble.com/shots/18502880-Furballs-Corner'

  },
  {
    id:2,
    img:Proj2,
    title:'Animerch Ecommerce',
    github:'https://github.com/mendoza2929/animerch',
    demo: 'https://dribbble.com/shots/18503201-Animerch-ecommerce'

  },
  {
    id:3,
    img:Proj3,
    title:'Onepiece Tour',
    github:'https://github.com/mendoza2929/OnepieceTour',
    demo: 'https://dribbble.com/shots/18503280-Onepiece-Tour'

  },
  {
    id:4,
    img:Proj4,
    title:'KLC HOMES',
    github:'https://github.com/mendoza2929/',
    demo: 'https://dribbble.com/shots/18503300-KLC-HOMES'

  },
  {
    id:5,
    img:Proj5,
    title:'dotDesign',
    github:'https://github.com/Jessy-G26/dotDesign.git',
    demo: 'https://dribbble.com/shots/18970007-dotDesign'

  },
   {
    id:6,
    img:Proj6,
    title:'Outplace',
    github:'https://github.com/mendoza2929/booking.git',
    demo: 'https://dribbble.com/shots/18970069-Outplace-capstone-project'

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
  <div className="container portfolio_container">

       {
        data.map(({id,img,title,github,demo})=>{
          return (
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-img">
              <img src={img} alt={title}/>
            </div>
              <h3>{title}</h3>
             <div className="portfolio_item-cta">
             <a href={github} rel="noreferrer"className='btn' target='_blank'>Github</a>
             <a href={demo} rel="noreferrer" className='btn btn-primary' target='_blank'>Dribbble</a>
             </div>
          </article> 
  
          )
        })
       }
      </div>
     
    </section>
  )
}

export default Portfolio
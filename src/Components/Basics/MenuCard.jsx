import React from 'react'
import Menu from './MenuApi'

const MenuCard = ({menuData}) => {
  console.log(menuData)


  return (
    <>
      <section className='main_container'>

        {

          menuData.map((curEle)=>{

            // destructuring 

            const {id ,name,category,description,image} =curEle
            return(
              <>
               <div className='card_container' key={id}>
              <div className='card'>
                  <div className='card_body'><br />
                      <span className='card_number card_circle'>{id}</span>
                      <span className='card_author'> {category}</span>
                      <h2 className='card_title'>{name}</h2>
                      <span className='card_description'>
                      {description}
                      </span>
                      <div className='card_read'> Read</div>

                  </div>
    
                  <img src={image}alt="Images" className='card_media'/>

                  <span className='card_tag'> Order Now </span>
                  

              </div>

          </div>
              </>
            )
          })
        }
         

      </section>
    </>
  )
}

export default MenuCard

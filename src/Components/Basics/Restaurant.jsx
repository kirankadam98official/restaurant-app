import React,{useState} from 'react'
import MenuCard from './MenuCard'
import Menu from './MenuApi'
import "./style.css"
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((curEle)=>{

  return curEle.category;
})),  "All" ,
];

console.log(uniqueList)


const Restaurant = () => {

  const [menuData,setMenuData] = useState(Menu)

  const [menuList,setMenuList] =useState(uniqueList);

  const filterItem=(category)=>{

    if(category==="All"){
     return setMenuData(Menu)
  
    }

    const updatedList =Menu.filter((curEle)=>{
return curEle.category ===category;

    })
    setMenuData(updatedList);


  }

  return (
    <>

   <Navbar filterItem={filterItem}  menuList={menuList} />
    <MenuCard menuData={menuData}/>
      
    </>
  )
}

export default Restaurant

import { listItems } from './navbarListItems'


const Navbar = () => {
  return (
    <nav>
    <ul className='navbar'>
      {listItems.map((item,index) =>{

        return (

          <li className='list-items' key={index}>
            <a href={item.url}> {item.title}</a>
          </li>

        );
      })}
    
    </ul>

    
    </nav>
  )
}

export default Navbar
import styles from '../components styles/Nav.module.css'
function Nav(){
  const menu = ["Booking", "Tourism", "FAQ", "About"];
  
  
  return(
    <header>
      <nav>
        {menu.map((element) => (
          <ul key={element}>
            <li>
              <a href="http://">{element}</a>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  );
}
export default Nav;
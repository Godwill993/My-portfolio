function NAvbar() {
  return (
    <>
      <nav>
        <h3>LENDZELE GODWILL</h3>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
           </div>
          <img className="just-for" src="/src/assets/ICONS/bars-solid-full.svg" alt="" />
       
      </nav>
      <style>
        {`

.just-for{
filter: brightness(0) invert(1) ;
width:40px;
display: none;
}
 nav{

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color:rgba(24, 18, 13, 0.51);
  padding-left: 8rem;
  padding-right: 8rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  
}
  .links{
  display: flex;
  gap: 2rem;
  
  
  }

.links a{
  margin-right: 1rem;
  text-decoration: none;
  color: white;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.2rem;
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color:rgb(198, 62, 62);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
@media (max-width: 768px) {
 
  nav{
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .links{
    display: none;
  }
  .just-for{
    display: block;
  }
}


`}
      </style>
    </>
  );
}

export default NAvbar;

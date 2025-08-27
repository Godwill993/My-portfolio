function NAvbar() {
  return <>
  <nav>
    <h3>LENDZELE GODWILL</h3>
    <div className="links">
      <a href="/">Home</a>  
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
      
    </div>
   
  </nav>
  <style>{`
 nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color:rgb(24, 18, 13);
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
}`}
 
</style>

  </>;
}

export default NAvbar;

function HeroSec() {
  return (
    <div className="hero-section">
      <div className="text-part">
        <h3>
          Hello<span>.</span>
        </h3>
        <span className="anothercc"></span>
        <h2>I'm GODWILL</h2>
        <h1>A Frontend Developer</h1>
        <div className="forbutt">
          <button className="first">View projects</button>
          <button className="second">Contacts</button>
        </div>
      </div>
      <div className="image-part">
        <img className="img2" src="/src/assets/PXL_20250615_101901360.MP~2.png" />
        <img
          className="img1"
          src="/src/assets/vecteezy_3d-icon-play-button_17339076.png"
        />
      </div>
      <style>
        {`
   

.hero-section {
    display: flex;
  
    justify-content: space-between;
    align-items: center;    
}
  .text-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding-left: 8rem;
    padding-top: 5rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 8rem;
  }
  .text-part h3 {
    line-height: 2;
    font-size: 2rem;
    color: rgb(240, 235, 232);
    margin: 0;
  }
  .text-part h1 {
    font-size: 3.5rem;
    line-height: 2;
    margin: 0;
    color: rgb(238, 235, 233);
  }
  span {
    color: rgb(198, 62, 62);
    heigth: 20px;
    width: 20px;
    font-size: 3rem;
    font-weight: bold;
  }
    .anothercc {    
        width: 200px;    
        height: 5px;    
        background-color: rgb(198, 62, 62);    
        margin-top: -10px;    
        margin-bottom: 10px;    
        border-radius: 5px;    
      }
  
  .image-part {
  position: relative;
    margin-right: 10rem;
   
   
   
  }
    .img2 {
        position: absolute;
        top: 0px;
        right: 85px;
      
        width: 540px;
        z-index: 1;
       
        cursor: pointer;
    }
    .img1 {
        width: 460px;
        height: 400px;
        margin-right: 8rem;
        margin-top: 18rem;
        animation: spin 11s linear infinite;
        z-index: 0;
    }
    @keyframes spin {
        from{
            transform: rotate(0deg);}
            to{
                transform: rotate(360deg);
            }
    }
    .forbutt{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }
    .first{
        background-color: rgb(198, 62, 62);
        color: white;
        padding-inline: 3.3rem;
        padding-block: 1.3rem;
        border: none;
        cursor: pointer;
        font-weight: bold;  
        margin-right: 2rem;
     

    }   
    .second{
        background-color: transparent;
          padding-inline: 3.3rem;
        padding-block: 1.3rem;
        color:rgb(198, 62, 62) ;
        border: 2px solid rgb(198, 62, 62);
        cursor: pointer;
        font-weight: bold;
        transition: 0.3s;
        
    }    
.second:hover{
    background-color: rgb(198, 62, 62);
    color: white;
    
}
    .first:hover{
        background-color: transparent;
        color: rgb(198, 62, 62);
        border: 2px solid rgb(198, 62, 62);
    }
  @media (max-width: 768px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
    }
    .text-part {
      align-items: center;
      padding-left: 0;
      margin-left: 0;
    }
    .image-part {
      margin: 2rem 0;
    }
  }
  
`}
      </style>
    </div>
  );
}

export default HeroSec;

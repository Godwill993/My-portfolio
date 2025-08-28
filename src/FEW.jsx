function Qualification() {
  return (
    <>
      <div className="left-sec">
        <h3>My Skills</h3>

        <div className="vertical-line-container">
          <div className="dd">  <img
            className="icons"
            src="/src/assets/ICONS/code-solid-full (9).svg"
            alt=""
          />
          <p className="pp">Website development</p></div>
          <div className="dd">
            <img
            className="icons"
            src="/src/assets/ICONS/mobile-screen-button-solid-full.svg"
            alt=""
          />
          <p className="pp">App development</p>
          </div >
          <div className="dd">
            <img
            className="icons"
            src="/src/assets/ICONS/code-solid-full (9).svg"
            alt=""
          />
          <p className="pp">Cloud management</p>
          </div>
         

          

          
        </div>
      </div>
      <style>
        {`
        .dd{
        margin-bottom:50px;
        display: flex;
        align-items: center;
        gap:28px;
        }
        .pp{
        display: inline-block;
        margin-left: 300px;
        color: rgb(130, 131, 129);
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 1.5;
        }
            .icons{
            filter: brightness(0) invert(1) ;
            width: 50px;
            }
            .vertical-line-container {
            position: relative;
             
            padding-left: 30px; /* space for the line */
            }

            .vertical-line-container::before {
            content: "";
            position: absolute;
            top: 0;
           
            left: 10px; /* distance from the container edge */
            width: 2px;
            height: 100%;
            background-color:rgb(198, 62, 62);
            }

            .vertical-line-container p {
            margin: 20px 0;
            position: relative;
            }
            .left-sec {
            margin-left:50px;
            }
}

            `}
      </style>
    </>
  );
}

export default Qualification;

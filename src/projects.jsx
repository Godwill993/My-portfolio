

const CardGrid = () => {
  const cardStyle = {
    backgroundColor: 'rgb(24, 18, 13)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    width: '400px',
    margin: '20px',
    boxShadow: '0 2px 8px rgb(83, 79, 77)',
  };
  const ok={
    filter: 'brightness(0) invert(1) ',
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  }
  const all={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  }

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  };

  const loremText = "Lorem ipsum dolor sit amet.";

  return (
    <div style={gridStyle}>
      
      
        <div style={all} className="ALL">
          <a href="">
              <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
          <a href="">
             <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
          
         <a href="">
          <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
         </a>
          <a href="">
            <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
          <a href="">
            <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
          <a href="">
            <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
          <a href="">
            <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
          <a href="">
             <div style={cardStyle}>
         <img style={ok} src="/src/assets/ICONS/code-solid-full (9).svg" alt="" />
          <div>{loremText}</div>
        </div>
          </a>
         
        </div>
        <style>
          {`
          .ALL a{
            text-decoration: none;
            color: white;
          }
          .ALL a:hover{
            transform: scale(1.05);
            transition: all 0.3s ease-in-out;
          }
          @media (max-width: 768px) {
            .ALL {
              flex-direction: column;
              align-items: center;
            }
          }
          `}
        </style>
      
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <CardGrid />
    </div>
  );
}export default App;
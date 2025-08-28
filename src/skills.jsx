function Skills() {
  return (
    <div className="skills">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Git</li>
      <li>GitHub</li>

      <style>
        {`
            .skills{
            display: flex;
            justify-content: space-around;
                background-color:rgb(48, 46, 45);
                padding: 30px;
               position: relative;
                z-index: 10;
                max-width: 100%;
                margin: 20px auto;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-top:180px;
            }
            
            .skills li {
                list-style: none;
                color: grey;
                padding: 10px;
                text-align: center;
                font-weight: bold;
                font-size: 2rem;
            }
        `}
      </style>
    </div>
  );
}
export default Skills;

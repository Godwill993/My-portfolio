function About(){
    return(
        <>
        <div className="ooo">
            <div className="life">
                <h1>About Me</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, reprehenderit culpa neque ipsam aliquam labore magni illum
                 rem esse praesentium explicabo ad sed architecto, iusto distinctio libero quae quis voluptates! Lorem ipsum dolor, sit amet 
                 consectetur adipisicing elit. Architecto asperiores quasi doloremque ullam blanditiis perspiciatis nesciunt vero. Dolore voluptatum 
                 quos, quas accusantium labore alias ad reiciendis sint reprehenderit omnis vitae.</p>
            </div>
            <div className="analysis">
                <div>
                    <h1>78 <span>+</span></h1>
                    <p>Lorem ipsum dolor sit amet consect</p>
                </div>
                <div>
                     <h1>78 <span>+</span></h1>
                    <p>Lorem ipsum dolor sit amet consect</p>
                </div>
                <div>
                     <h1>78 <span>+</span></h1>
                    <p>Lorem ipsum dolor sit amet consect</p>
                </div>
                <div>
                     <h1>78 <span>+</span></h1>
                    <p>Lorem ipsum dolor sit amet consect</p>
                </div>
            </div>


        </div>
          
            





            <style>
                {`
                p{
                line-height: 1.6rem;
                font-size: 1.2rem;
                }
                h1{
                margin-bottom: 20px;
                }
                .ooo{
                width: 50%;
                margin-right:100px;
                }
                .analysis{
                display: flex;
                align-item: center;
                justify-content: space-between; 
                }
                .analysis div{
                width: 100px;
                }
                @media (max-width: 768px) {
                    .ooo{
                        width: 90%;
                        margin: auto;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    .analysis{
                        flex-direction: column;
                        gap: 20px;
                        align-items: center;
                    }
                    .analysis div{
                        width: 200px;
                        text-align: center;
                    }
                        p{
                            font-size: 1rem;
                            text-align: center;

                }

                `}
            </style>
            
    
        </>
    )
        
      
}
export default About;
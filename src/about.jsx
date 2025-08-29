function About(){
    return(
        <>
        <div className="ooo">
            <div className="life">
                <h1>About Me</h1>
            <p>Hi, my name is LENDZELE GODWILL. I'm a passionate and motivated web developer who began my coding journey just two months ago. Despite being early in my path, I've made rapid progress and already have a solid understanding of key web technologies — from HTML, CSS, and JavaScript all the way up to Node.js.

I'm currently gaining hands-on experience through an internship at TIC Foundation, where I’m working on real-world projects, collaborating with other developers, and deepening my skills in full-stack development. I’m especially excited by backend development and building scalable, efficient web applications.

Every day, I strive to learn more, build better, and grow as a developer.</p>
            </div>
            <div className="analysis">
                <div>
                    <h1>78 <span>+</span></h1>
                    <p>Lorem ipsum dolor sit amet consect</p>
                </div>
                <div>
                     <h1>250 <span>+</span></h1>
                    <p>Number of commits so far</p>
                </div>
                <div>
                     <h1>15 <span>+</span></h1>
                    <p>Number of projects worked on</p>
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
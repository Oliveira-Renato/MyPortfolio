export function Skills(){
    return (
        <>
            <section className="skills" id="skills">
                <div className="title black">
                    <h2>Minhas Habilidades</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">Minhas <span className="hab">Habilidades</span> <span className="simbol">&</span> <span className="exp">Experiências</span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia officia, et provident soluta facere, cum non, nihil molestias quas eveniet natus assumenda similique optio. Officia cumque quasi sit ex nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nam aliquam possimus laboriosam enim animi, delectus voluptas est ullam sed deleniti dolorum voluptates dolorem tempore nobis. Cupiditate quas possimus. </p>
                        </div>
                {/* Habilidades e Experiencia | divs responsaveis pelas habilidades e niveis        */}
                        <div className="column right">
                            <div className="bars">
                                
                                <div>
                                    <p></p>
                                </div>
                                <div className="info">
                                    <span>HTML</span>
                                    <span>30%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>35%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">   
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>45%</span>
                                </div>
                                <div className="line js"></div>
                            </div> 
                            <div className="bars">  
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>30%</span>
                                </div>
                                <div className="line sql"></div>
                            </div>
                            <div className="bars"> 
                                <div className="info">
                                    <span>Python</span>
                                    <span>30%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
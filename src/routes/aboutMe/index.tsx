import myself from '../../assets/images/myself.jpeg'

export function AboutMe(){
    return (
        <>
             {/* Sessão Sobre */}
             <section className="about" id="about">
                <div className="title white">
                    <h2>Sobre mim</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="content">
                    <div className="textBx">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus amet in voluptatem cupiditate voluptatibus dignissimos rem perspiciatis. Nulla tempore rerum quasi voluptates quos quod eveniet consequuntur! Magnam, fugit excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim quisquam magnam at libero voluptate recusandae eveniet labore architecto dolore consequatur accusantium doloremque fugiat veniam perferendis ab eum, quos maxime!<br/><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe dicta quia natus odio atque aspernatur quam ex quod nemo fugit officiis amet, neque quidem? Ratione repudiandae rerum perferendis accusantium numquam.</p>
                    </div>
                    {/* Imagem pessoal da pagina sobre */}
                    <div className="imgBx">
                        <img src={ myself } />
                    </div>
                </div>
            </section>
        </>
    )
}
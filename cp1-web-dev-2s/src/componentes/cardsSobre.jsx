export default function Cards({dados}){


    return(
        <>
        {
            dados.map((pegaDados, index) => (
            <div className="cards"
            key={index}>
                <div className="card-top" style={{backgroundColor: pegaDados.color }}>
                    <p className="titulo">{pegaDados.titulo}</p>
                </div>
                <div className="restoCard">
                    <p className="pessoas">{pegaDados.pessoas1}</p>
                    <p className="planos1">{pegaDados.planos}</p>
                    <img className="sobreimagem" src={pegaDados.img} alt="" />
                    <p className="pessoas">{pegaDados.pessoas2}</p>
                    <p className="planos1">{pegaDados.planos2}</p>
                    <button className="botaoplanos"style={{backgroundColor: pegaDados.color}}>{pegaDados.botao}</button>
                </div>
     
            </div>
            ))
        
    }
        </>
    )
}
export default function Cards({dados}){


    return(
        <>
        {
            dados.map((pegaDados, index) => (
            <div className="card"
            key={index}>
                <div className="card-top" style={{backgroundColor: pegaDados.color }}>
                    <p className="titulo">{pegaDados.titulo}</p>
                </div>
                <div className="restoCard">
                    <p className="pessoas">{pegaDados.pessoas1}</p>
                    <p className="planos">{pegaDados.planos}</p>
                    <img src={pegaDados.img} alt="" />
                    <p className="pessoas">{pegaDados.pessoas2}</p>
                    <p className="planos">{pegaDados.planos2}</p>
                    <button className="botaoplanos"style={{backgroundColor: pegaDados.color}}>{pegaDados.botao}</button>
                </div>
     
            </div>
            ))
        
    }
        </>
    )
}
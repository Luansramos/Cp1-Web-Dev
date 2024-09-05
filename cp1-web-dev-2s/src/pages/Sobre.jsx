import "./Sobre.css"
import "../componentes/cardsSobre.css"
import Cards from "../componentes/cardsSobre";


function Sobre(){
    const conteudo = [
        {
          titulo: "Individual",
          pessoas1: "1 Usuário",
          pessoas2:"",
          planos: "10 Vídeos R$15",
          planos2: "",
          botao:"Cadastrar",
          color:"#6B74E6",
          img:""
          
        },
        {
          titulo: "Profissional - Times",
          pessoas1: "1-10 Usuários",
          pessoas2: "+10 Usuários",
          planos: "Vídeos ilimitados R$40",
          planos2: "Vídeos ilimitados R$20",
          botao:"Cadastrar",
          color:"white",
          img:""
        },
        {
            titulo: "Corporativo",
            pessoas1: "",
            pessoas2: "",
            img: "https://i.ibb.co/k5vk6jN/Screenshot-2.png",
            botao:"Entre em contato",
            color:"white",
            planos:"",
            planos2:""
        }
      ]
    return(

        <body>
            <div className="principal">
                <div className="tudo">
                    <section className="container-1">
                    <div className="texto">
                        <h1 className="titulo">Bem-vindo à revolução dos vídeos</h1>
                        <p className="descricao">Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
                    </div>
                    <button className="botao">Baixe o app</button>
                    </section>

            <figure className="container-2">
                <div className="imagem-1"></div>
                <div className="imagem-2"></div>
            </figure>
        </div>

        <div className="novo-conteudo">
            <div>
                <h2 className="tituloplanos">Planos</h2>
            </div>
            <div className="planos">
                <Cards dados={conteudo}/>
            </div>
        </div>
    </div>
</body>
                

                
    )
}
export default Sobre;
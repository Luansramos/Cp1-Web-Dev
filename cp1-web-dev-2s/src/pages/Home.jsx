import React from "react";
import Card from "../componentes/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Crie seus vídeos online</h1>
      <p>
        Transforme suas ideias em filmes memoráveis; onde a criatividade
        encontra a simplicidade.
      </p>
      <button className="home-button">Começar agora!</button>

      <div className="card-container">
        <Card
          bgColor="#f28b82"
          title="YouTube"
          icon="📹"
          number="01"
          description="Produza conteúdos criativos e envolventes para atrair um público digital do mundo todo."
        />
        <Card
          bgColor="#fbbc04"
          title="TikTok"
          icon="🎵"
          number="02"
          description="Explore as curiosidades da internet e compartilhe seus vídeos com a comunidade global do TikTok."
        />
        <Card
          bgColor="#34a853"
          title="Facebook"
          icon="📘"
          number="03"
          description="Conecte-se com seus espectadores e compartilhe seus vídeos na linha do tempo e no feed do Facebook."
        />
        <Card
          bgColor="#4285f4"
          title="Instagram"
          icon="📸"
          number="04"
          description="Compartilhe sua visão e expresse sua criatividade com vídeos e histórias no Instagram."
        />
      </div>
    </div>
  );
}

export default Home;

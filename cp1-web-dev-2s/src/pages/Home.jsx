import React from "react";
import Card from "../componentes/Card";
import "./Home.css";
import "../componentes/Card.css";

function Home() {
  const cardData = [
    {
      bgColor: "#f28b82",
      title: "YouTube",
      icon: "📹",
      number: "01",
      description:
        "Produza conteúdos criativos e envolventes para atrair um público digital do mundo todo.",
    },
    {
      bgColor: "#fbbc04",
      title: "TikTok",
      icon: "🎵",
      number: "02",
      description:
        "Explore as curiosidades da internet e compartilhe seus vídeos com a comunidade global do TikTok.",
    },
    {
      bgColor: "#34a853",
      title: "Facebook",
      icon: "📘",
      number: "03",
      description:
        "Conecte-se com seus espectadores e compartilhe seus vídeos na linha do tempo e no feed do Facebook.",
    },
    {
      bgColor: "#4285f4",
      title: "Instagram",
      icon: "📸",
      number: "04",
      description:
        "Compartilhe sua visão e expresse sua criatividade com vídeos e histórias no Instagram.",
    },
  ];

  return (
    <div className="home">
      <div className="home-content">
        <div className="text-content">
          <h1>Crie seus vídeos online</h1>
          <p>
            Transforme suas ideias em filmes memoráveis; onde a criatividade
            encontra a simplicidade.
          </p>
          <button className="home-button">Começar agora!</button>
        </div>
        <div>
          <img
            className="home-image"
            src="https://s3-alpha-sig.figma.com/img/015a/13d5/4ab40031538d3268e234fe4bef1c6a8f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dGYlIAmjcSIRyIBEh3Gg6~yS3JJZhhwQTpaVasa0shc9pQg1oTkeK6-nFG3syIRqMn9WoGqw~Z7UlGdY-EbQWdgB3ZLHZsHlGj1Lr9-MRI2M-HvS8XXHh1T1HNdLFZ0tjdmL43ZTNL~W6c~peJulehwz6MOj3PsNdgjpFlVHK~tK0VcZPxLtV0z~XVFbKt0BSHtxt4ZYiG1B35cGiqFY73SQoZj8j5sH8dcBq1rDfy6dR4sTf-hJgAega0gcuhffWTNwcNlLOKyE0wAQIS1BJ1~~o8u2XN-FdvcQN3mesjKuRq6cqxXE7Bb4UB85F6dAXy3OngJDHNV5kLmDmJExlA__"
            alt="Homem pulando"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            bgColor={card.bgColor}
            title={card.title}
            icon={card.icon}
            number={card.number}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

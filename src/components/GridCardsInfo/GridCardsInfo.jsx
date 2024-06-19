import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {

  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={"Daniel Japones Inglid Alexandro"}
              value={"no meu pc nao funcionou"}
              info={"Muito foda lek bora dançar"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;

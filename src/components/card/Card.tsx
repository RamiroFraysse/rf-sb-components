import "./card.css";

export default function Card() {
  return (
    <div className="small">
      <img src="/img/mee.webp" alt="alt" className="img" />
      <span>title</span>
      <p>description</p>
      <div>
        <button>confirmar</button>
        <button>cancelar</button>
      </div>
    </div>
  );
}

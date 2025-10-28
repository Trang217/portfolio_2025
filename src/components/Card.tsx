import type { Skill } from "../data";

interface CardProps {
  skill: Omit<Skill, "id">;
}
function Card({ skill: { title, text, icon } }: CardProps) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
}

export default Card;

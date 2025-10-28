import Title from "../components/Title";
import aboutSvg from "../images/about.svg";
function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <Title text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            error, repudiandae dicta dolorem cupiditate, eos cum totam vitae,
            repellat velit nihil. Incidunt dignissimos nobis, adipisci inventore
            ratione rem! Suscipit, distinctio.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;

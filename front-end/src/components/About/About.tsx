import AboutCard from "./AboutCard";
import abouts from "./abouts.json";

const About = () => {
  return (
    <section className="bg-p_black text-p_white">
      <div className=" max-w-[90%] mx-auto py-8">
        <h2 className="text-3xl text-center mb-8">
          Conheça todas as nossas facilidades
        </h2>
        <div className="flex flex-start flex-col gap-4">
          {abouts.map((about) => (
            <AboutCard {...about} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

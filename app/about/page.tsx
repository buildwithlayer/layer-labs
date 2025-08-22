import CalendarEmbed from "../_components/CalendarEmbed";

const AboutPage = () => {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-full max-w-[--content-width] flex flex-col py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Who are we?</h1>
        <br />
        <p className="text-lg">
          We are a small team of builders who design, iterate, and distribute AI
          products. Surprisingly, our team actually started as a fitness product
          in 2019. Since our inception we have launched and distributed several
          products.
          <br />
          <br />
          Many AI products today try to fully automate away work. We believe
          this is a bad design pattern. Products that make their users obsolete
          don’t succeed.
          <br />
          <br />
          Every product we design follows these underlying principals:
          <br />
          <br />
          <ol className="list-decimal ml-8">
            <li>
              <strong>Teach, Don’t Replace:</strong> The product should teach
              users more about the world, not less.
            </li>
            <li>
              <strong>Ask, Don’t Assume:</strong> Questions spark curiosity and
              force people to pause, reflect, and grow.
            </li>
            <li>
              <strong>Automate With Purpose:</strong> Processes have purpose.
              Make sure the automation doesn’t undermine that purpose.
            </li>
          </ol>
          <br />
          <br />
          We believe following these principles makes a major difference in how
          people interact with AI products.
          <br />
          <br />
          We are always happy to chat.
        </p>
        <div className="h-10" />
        <CalendarEmbed />
      </div>
    </div>
  );
};

export default AboutPage;

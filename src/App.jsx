import Form from "./comopnents/Form/Form";
import "./App.css";
import Card from "./comopnents/Card/Card";
import Logo from "./comopnents/Logo/Logo";

const App = () => {
  const cardData = [
    { heading: "Presentation Design", icon: "icon1" },
    { heading: "Audio-Visual Production", icon: "icon2" },
    { heading: "Translation Service", icon: "icon3" },
    { heading: "Graphic Design", icon: "icon4" },
    { heading: "Research & Analytics", icon: "icon5" },
    { heading: "Data Processing", icon: "icon6" },
  ];

  return (
    <div className="main">
      <div className="left-section">
        <div>
          <Logo />
        </div>
        <div className="sub-heading">Suite of Business Support Service</div>
        <div className="web-text">
          {" "}
          Enim, maxime voluptatibus earum, laborum fugiat impedit dolore optio
          nemo reiciendis accusantium sunt rerum consequuntur ipsum, tenetur
          iste incidunt nulla mollitia commodi.
        </div>
        <div className="form1">
          <Form />
        </div>
      </div>
      <div className="right-section">
        {cardData?.map((card, index) => (
          <Card cardHeading={card.heading} key={index} icon={card.icon} />
        ))}
      </div>
      <div className="form2">
      <Form/>
      </div>
      
    </div>
  );
};

export default App;

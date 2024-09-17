import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div className="about-body" id="About">
      <Container>
        <Row>
          <Col md="12" lg="6">
            <img
              className="about-main-img"
              src={require("../imgs/bodyImg/about us 1.png")}
            />
          </Col>
          <Col xs md="12" lg="6">
            <div className="about-col-2-container rubik-regular">
              <h1 className="about-heading ">about us</h1>
              <div className="about-hr-top">
                <div className="about-ht-bottom"></div>
              </div>
              <p className="about-paragraph">
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </p>
              <div className="about-service">
                <div className="about-Engagement-container">
                  <img
                    className="about-Engagement-img"
                    src={require("../imgs/bodyImg/Enagagement icon 1.png")}
                  />
                  <h1 className="about-Engagement-heading">ENGAGEMENT</h1>
                  <p className="about-Engagement-paragraph">
                    We are engagement specialists, who have led projects at all
                    levels of the IAP2 spectrum. <br />
                    <a className="about-read">READ MORE</a>
                  </p>
                </div>
                <div className="about-Communications-container">
                  <img
                    className="about-Communications-img"
                    src={require("../imgs/bodyImg/coomunication icon 1.png")}
                  />
                  <h1 className="about-Communications-heading">
                    COMMUNICATIONS
                  </h1>
                  <p className="about-Communications-paragraph">
                    We are award-winning leaders in communications and campaign
                    management.
                    <a className="about-read">READ MORE</a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

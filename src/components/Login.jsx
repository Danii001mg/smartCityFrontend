import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Row,
  Col,
  Container,
  Alert,
  Card,
  CardTitle,
  CardText,
  Media,
} from "reactstrap";

import { GoogleLogin } from '@react-oauth/google';
import config from "../config.js";

import MyImgLogin from "../images/background_mernflixdark.png";

var imgStyle = {
  width: "100%",
  height: "100%",
};

export default function Login() {
  const [loginMessage, setLoginMessage] = useState(null);

  const navigate = useNavigate();

  const onSuccess = (res) => {
    ////////////////////////Lo que debería contener onSucess////////////////////////
    console.log("[Login Success]");
    navigate("/home");
  };

  const onFailure = (res) => {

    ////////////////////////Lo que debería contener onFailure////////////////////////
    console.log("[Login Failed] res:", res);
    setLoginMessage(<Alert color="danger">Wrong login access. Try again</Alert>);

  };

  return (
    <Container>
      <Row>
        <Col>
          <Card
            inverse
            body
            className="text-center"
            style={{ backgroundColor: "#000", borderColor: "#000" }}
          >
            <CardTitle tag="h5">Welcome to MERNFlix</CardTitle>
            <CardText>React-based web project"</CardText>
            <CardText>
              <GoogleLogin
                clientId={config.clientID}
                buttonText="Login"
                theme="dark"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                useBrowser= {false}
              />
              {loginMessage}
            </CardText>
            <Media style={imgStyle} object src={MyImgLogin} alt="Login" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

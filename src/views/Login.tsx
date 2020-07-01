import React, { Component } from "react";
import "../assets/login.scss";
import { Card } from "antd";
import InnerForm from "../components/login/InnerForm";
import Particles from "react-tsparticles";
import Author from "../components/login/Author";

interface Props {}
interface State {}

const particlesConfig = {
  background: {
    color: {
      value: "#1890ff",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

export default class Login extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="login">
        <Particles width="100%" height="100%" params={particlesConfig} />
        <Author />

        <Card
          className="login-center"
          title="User Login"
          hoverable={true}
          type="inner"
        >
          <InnerForm />
        </Card>
      </div>
    );
  }
}

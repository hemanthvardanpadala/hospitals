import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Food",
        info:
          "Free food is served for the person , with the cost of zero, and more more"
      },
      {
        icon: <FaHiking />,
        title: "Special care",
        info:
          "special care take for old age people , take care of them very well more more"
      },
      {
        icon: <FaShuttleVan />,
        title: "24 hours service",
        info:
          "ambulance is available for 24/7 for totally free of cost"
      },
      {
        icon: <FaBeer />,
        title: "extra services ",
        info:
          "something is written here with no meaning please dont read sorry"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

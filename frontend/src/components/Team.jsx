import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          We are a dynamic and passionate team of developers, designers, and food enthusiasts dedicated to revolutionizing the 
          food delivery experience. Our diverse skill sets allow us to create a seamless, user-friendly platform that connects customers with their 
          favorite meals quickly and efficiently. Each team member brings a unique perspective to the table, ensuring that our app not only meets but 
          exceeds the expectations of modern foodies. Together, we are committed to innovation, quality, and delivering the best possible service to our 
          users.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;

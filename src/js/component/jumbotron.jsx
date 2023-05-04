import React from "react";

const Jumbotron = () => {
  return (
    <main class="container">
      <div class="bg-light p-5 rounded">
        <h1>A phrase to start ...</h1>
        <p class="lead">
          "Be the change that you wish to see in the world." <br /> <strong>Mahatma Gandhi</strong>
        </p>
        <a
          class="btn btn-lg btn-primary"
          href="https://github.com/spacemc2"
          role="button"
        >
          Ask for advice!
        </a>
      </div>
    </main>
  );
};

export default Jumbotron;

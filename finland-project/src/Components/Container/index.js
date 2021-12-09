import react from "react";

const Container = () => {
    return (
        <main className="itens-apartments">
          <h1 className="title">
            Stay in Finland
          </h1>

          <div className="box-apartament">
            <img className="apartament" />
            <span className="super-item">
              Super Host
            </span>
            <span className="type-apartment">
              Entire apartment . 2 beds
            </span>
            <span className="level-star">
              <img className="icon--star" src="star.svg" />
              4.40
            </span>
            <div className="text--apartment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus integer feugiat. 
            </div>
          </div>
        </main>
    );
};

export default Container;
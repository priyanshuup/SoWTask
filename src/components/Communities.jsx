import React, { useEffect, useState } from "react";
import axios from "axios";

import { Oval } from "react-loader-spinner";

const Communities = () => {
  let [datas, setdata] = useState([]);

  /* Making API request */
  useEffect(function () {
    (() => {
      axios.get("https://web-dev.dev.kimo.ai/v1/highlights").then((res) => {
        setdata(res.data);
      });
      // console.log(datas);
    })();
  });

  return (
    <div className="communitiesmaindiv">
      <h1>COMMUNITIES WE MANAGE</h1>
      <div className="datamain">
        {datas.length === 0 ? (
          <Oval
            height="80"
            width="80"
            radius="9"
            color="gray"
            secondaryColor="gray"
            ariaLabel="loading"
          />
        ) : (
          datas.map((items) => {
            return (
                <div className="itemsmain">
              <div className="itemdiv">
                <div className="Image">
                  <img src={items.image} alt="imae aana tha idhar" />
                </div>
                <div className="text">
                  <h3>{items.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, voluptates placeat quibusdam vitae quas nisi error suscipit ducimus! Voluptatum fugit unde tempore voluptates quo maxime aperiam porro quod explicabo </h3>
                </div>
                <div className="Title">
                  <h2>{items.title}</h2>
                </div>
              </div>
              <div className="itemdiv">
                <div className="Image">
                  <img src={items.image} alt="imae aana tha idhar" />
                </div>
                <div className="text">
                  <h3>{items.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, voluptates placeat quibusdam vitae quas nisi error suscipit ducimus! Voluptatum fugit unde tempore voluptates quo maxime aperiam porro quod explicabo </h3>
                </div>
                <div className="Title">
                  <h2>{items.title}</h2>
                </div>
              </div>
            

              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Communities;

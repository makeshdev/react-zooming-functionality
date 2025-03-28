import React from "react";
import img from "./assets/bg.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Zoom</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <TransformWrapper
          initialScale={1}
          initialPositionY={100}
          initialPositionX={100}
        >
          <TransformComponent>
            <div>
              <img
                src={img}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "800px",
                  maxHeight: "800px",
                }}
                alt="Test_Img"
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </>
  );
};

export default App;

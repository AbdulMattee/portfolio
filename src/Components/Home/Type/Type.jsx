import React, { useState, useEffect } from "react";
import Typist from "react-typist";
const Type = () => {
  let sentences = [
    " a Front-End Developer.",
    " a ReactJs Developer.",
    " a NextJs Developer.",
    // "",
  ];
  let [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(false);
  const HandleIndex = () => {
    setIndex(index === sentences.length - 1 ? 0 : index + 1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          fontFamily: "Nunito",
          fontStyle: "italic",
        }}
      >
        <Typist
          onTypingDone={() => {
            setDisplay(!display);
          }}
          cursor={{ show: false }}
          avgTypingDelay={200}
        >
          I'm &nbsp;
        </Typist>
        {display && (
          <Typist
            key={index}
            ms={500}
            onTypingDone={HandleIndex}
            avgTypingDelay={100}
            cursor={{ element: "|", blink: true }}
          >
            {sentences[index]}
            <Typist.Backspace count={sentences[index].length} delay={500} />
          </Typist>
        )}
      </div>
    </>
  );
};

export default Type;

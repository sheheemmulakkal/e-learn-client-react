// import React, { MouseEvent, useRef } from "react";

// interface HoverScaleTextProps {
//   text: string;
// }

// const HoverScaleText: React.FC<HoverScaleTextProps> = ({ text }) => {
//   const headingRef = useRef<HTMLHeadingElement>(null);

//   const handleHover = (event: MouseEvent<HTMLHeadingElement>) => {
//     const letters = event.currentTarget.innerText.split("");
//     const transformedText = letters.map((letter, index) => (
//       <span
//         key={index}
//         className="hover:scale-110"
//         style={{ display: "inline-block" }}
//       >
//         {letter}
//       </span>
//     ));

//     // Clear existing content
//     if (headingRef.current) {
//       headingRef.current.innerHTML = "";

//       // Append each transformed letter
//       transformedText.forEach((element) => {
//         headingRef.current?.appendChild(element as unknown as Node);
//       });
//     }
//   };

//   const handleLeave = () => {
//     // Reset the inner HTML to the original text
//     if (headingRef.current) {
//       headingRef.current.innerHTML = text;
//     }
//   };

//   return (
//     <h1
//       ref={headingRef}
//       className="text-2xl font-bold"
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//     >
//       {text}
//     </h1>
//   );
// };

// export default HoverScaleText;

// import React from "react";

function HoverScaleText() {
  // const splittedString = text.split("")
  // const mappedString = splittedString.map((stirng) => {
  //     return sti
  // })
  return (
    <h1 className="text-2xl font-bold">
      <span className="text-[#F48C06] relative transition-transform hover:scale-110">
        A
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        l
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        l
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        -
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        i
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        n
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        -
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        O
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        n
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        ,
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        {" "}
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        Y
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        o
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        u
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        r
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        {" "}
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        C
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        o
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        m
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        p
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        l
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        t
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        {" "}
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        R
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        s
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        o
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        u
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        r
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        c
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        {" "}
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        f
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        o
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        r
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        {" "}
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        C
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        o
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        m
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        p
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        r
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        h
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        n
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        s
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        i
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        v
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        e
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        {" "}
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        E
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        d
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        u
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        c
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        a
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        t
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        i
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        o
      </span>
      <span className="hover:text-3xl relative ease-in-out duration-200">
        n
      </span>
    </h1>
  );
}

export default HoverScaleText;

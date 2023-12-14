// import React, { useState, useRef, useEffect } from "react";

// const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
//   const [content, setContent] = useState("");
//   const iRef = useRef(0);
//   const timeoutRef = useRef<number | undefined>();

//   useEffect(() => {
//     const type = () => {
//       if (iRef.current < text.length) {
//         setContent(
//           (prevContent) => prevContent + text.charAt(iRef.current) + "_"
//         );
//       } else {
//         setContent((prevContent) => prevContent.slice(0, -1)); // Remove the trailing underscore
//         return;
//       }

//       const ran = Math.random() * (40 - 30) + 30; // Random delay between each character
//       // Set ran to a fixed number if you want a consistent speed.
//       timeoutRef.current = setTimeout(type, ran);

//       iRef.current++;
//     };

//     type();

//     // Cleanup function to clear the timeout when the component is unmounted
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [text]);

//   return <div dangerouslySetInnerHTML={{ __html: content }} />;
// };

// export default TypewriterEffect;

// import React, { useEffect } from "react";
// import Typewriter from "typewriter-effect";

// const RoadmapDisplay = ({ roadmapText }) => {
//   useEffect(() => {
//     const typewriter = new Typewriter("#roadmap-text", {
//       strings: [roadmapText],
//       autoStart: true,
//       loop: true,
//     });

//     return () => {
//       typewriter.stop();
//     };
//   }, [roadmapText]);

//   return (
//     <div id="roadmap-text">
//       {/* The typewriter effect will be applied here */}
//     </div>
//   );
// };

// export default RoadmapDisplay;

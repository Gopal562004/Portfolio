// const Button = ({ name, isBeam = false, containerClass }) => {
//   return (
//     <button className={`btn ${containerClass}`}>
//       {isBeam && (
//         <span className="relative flex h-3 w-3">
//           <span className="btn-ping"></span>
//           <span className="btn-ping_dot"></span>
//         </span>
//       )}
//       {name}
//     </button>
//   );
// };

// export default Button;
const Button = ({
  name,
  isBeam = false,
  containerClass = "",
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`btn ${containerClass}`}
      >
        {content}
      </a>
    );
  }

  return <button className={`btn ${containerClass}`}>{content}</button>;
};

export default Button;

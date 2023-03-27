export default function NextSong(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 24 24"
        width="25"
        height="25"
        {...props}
      >
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1={6.704}
          y1={12.734}
          x2={18.028}
          y2={12.734}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#1245c6",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#9909b7",
            }}
          />
        </linearGradient>
        <path
          d="M17.8 4.5c-.1-.1-.3-.2-.5-.2h-1.4c-.2 0-.4.1-.5.2-.1.1-.2.3-.2.5v7.5c0-.1-.1-.2-.1-.2L7.2 4.4c-.1-.2-.3-.2-.4-.2-.1 0-.1.2-.1.4v16.3c0 .2 0 .3.1.4.1 0 .2 0 .4-.1l7.9-7.9c.1-.1.1-.1.1-.2v7.5c0 .2.1.4.2.5.1.1.3.2.5.2h1.4c.2 0 .4-.1.5-.2.1-.1.2-.3.2-.5V4.9c0-.1 0-.3-.2-.4z"
          style={{
            fill: "url(#SVGID_1_)",
          }}
        />
      </svg>
    </>
  );
}

export default function PrevSong(props) {
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
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1={6.704}
          y1={13.424}
          x2={18.027}
          y2={13.424}
        >
          <stop
            offset={0}
            style={{
              stopColor: "#9909b7",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#1245c6",
            }}
          />
        </linearGradient>
        <path
          d="M17.9 4.9c-.1 0-.2 0-.4.1l-7.9 7.9c-.1.1-.1.1-.1.2V5.6c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2H7.4c-.2 0-.3.1-.5.2-.1.2-.2.3-.2.5v15.6c0 .2.1.4.2.5.1.1.3.2.5.2h1.4c.2 0 .4-.1.5-.2.1-.1.2-.3.2-.5v-7.5c0 .1.1.1.1.2l7.9 7.9c.1.1.3.2.4.1.1 0 .1-.2.1-.4V5.3c0-.2 0-.3-.1-.4z"
          style={{
            fill: "url(#SVGID_2_)",
          }}
        />
      </svg>
    </>
  );
}

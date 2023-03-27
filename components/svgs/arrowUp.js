export default function ArrowUp(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="opacity-70"
        {...props}
      >
        <g dataname="Double arrow up">
          <path d="M15 12a1 1 0 0 1-.707-.293L12 9.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 12z" />
          <path d="M15 16a1 1 0 0 1-.707-.293L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 16z" />
          <path d="M12 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8z" />
        </g>
      </svg>
    </>
  );
}

export default function PostCaption({ places, date, title, shortDescription }) {
  return (
    <>
      <div className="flex items-center justify-center py-1 flex-wrap space-x-1 text-[8px] md:text-[10px] lg:text-xs">
        <span className="uppercase">{places}</span>
        <span>&bull;</span>
        <span>{date}</span>
      </div>
      <span className="flex justify-center text-base md:text-lg font-semibold">
        {title}
      </span>
      <span className="text-center text-sm text-secondary dark:text-light">
        {shortDescription}
      </span>
    </>
  );
}

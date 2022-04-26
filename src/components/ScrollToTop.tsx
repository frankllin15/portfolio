import { memo, useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.onscroll = () => {
      const { pageTop, height } = window.visualViewport;
      if (pageTop > height && pageTop > 933) setVisible(true);
      else setVisible(false);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={handleClick}
      className="fixed cursor-pointer z-20 right-8 bottom-8 bg-neutral-200 hover:bg-neutral-300   p-4 rounded-full shadow-sm  shadow-neutral-400 duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </div>
  );
};

export default memo(ScrollToTop);

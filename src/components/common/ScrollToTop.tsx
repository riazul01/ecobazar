import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll to top when navigating to a different page route (pathname change),
    // not when updating query parameters/filters on the same page.
    if (prevPathname.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

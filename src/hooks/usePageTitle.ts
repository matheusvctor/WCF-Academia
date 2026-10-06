import { useEffect } from "react";

function setOrCreateMeta(selector: string, attribute: "name" | "property", attrValue: string, content: string) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title.includes("WCF") ? title : `${title} | WCF Academia`;
    document.title = fullTitle;

    setOrCreateMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);

    if (description) {
      setOrCreateMeta('meta[name="description"]', "name", "description", description);
      setOrCreateMeta('meta[property="og:description"]', "property", "og:description", description);
      setOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }
  }, [title, description]);
}

export default usePageTitle;


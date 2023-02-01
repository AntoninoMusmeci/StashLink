import { createContext, useContext, useState } from "react";
export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urls, setUrls] = useState([
    {
      image:
        "https://openai.com/content/images/size/w1400/2022/09/dall-e-no-waitlist.jpg",
      title: "title",
    },
    {
      image:
        "https://openai.com/content/images/size/w1400/2022/09/dall-e-no-waitlist.jpg",
      title: "title",
    },
    {
      image:
        "https://openai.com/content/images/size/w1400/2022/09/dall-e-no-waitlist.jpg",
      title: "title",
    },
  ]);
  const addUrl = (newUrl) => {
    console.log(newUrl)
    setUrls([...urls, newUrl]);
  };

  const deleteUrl = (UrlId) => {};
  const editUrl = (UrlId, newUrl) => {};

  return (
    <UrlContext.Provider
      value={{
        urls,
        addUrl,
        editUrl,
        deleteUrl,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};

// export const useTasksValue = () => useContext(TasksContext);

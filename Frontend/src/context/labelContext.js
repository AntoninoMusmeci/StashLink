import { createContext, useContext, useState } from "react";
export const LabelContext = createContext();

export const LabelProvider = ({ children }) => {
  const [labels, setLabels] = useState(["Favorites", "Articles", "Archive"]);
  const addLabel = (newLabel) => {
    setLabels([...labels, newLabel]);
  };

  const deleteLabel = (labelId) => {};
  const editLabel = (labelId, newLabel) => {};

  return (
    <LabelContext.Provider
      value={{
        labels,
        addLabel,
        editLabel,
        deleteLabel,
      }}
    >
      {children}
    </LabelContext.Provider>
  );
};

// export const useTasksValue = () => useContext(TasksContext);

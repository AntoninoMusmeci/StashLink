import {SetStateAction } from "react" 

export type HeaderProps = {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<SetStateAction<boolean>>
  }
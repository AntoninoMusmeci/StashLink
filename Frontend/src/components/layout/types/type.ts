import {SetStateAction } from "react" 

export type HeaderProps = {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<SetStateAction<boolean>>
  }

export type UrlInfo = {
  publicationDate: string;
  title: string;
  images: string;
  authors: string[];
  keywords: string[];
}
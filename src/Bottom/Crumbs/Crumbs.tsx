import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
import logo from "./../../.resources/coinGrey.svg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./Crumbs.css";

interface BreadCrumbLink {
  name: string;
  link: string;
}

export interface CrumbsProps {
  locations: string[];
}

export const Crumbs: React.FC<CrumbsProps> = (props) => {
  const { locations } = props;

  let temp: string[] = [];
  const BCLinks: BreadCrumbLink[] = locations.map((path, i) => {
    if (i === 0) {
      temp.push(`#/${path}`);
      return {
        name: capitilize(path),
        link: `#/${path}`,
      };
    } else {
      temp.push(temp[i - 1] + `/${path}`);
      return {
        name: capitilize(path),
        link: temp[i - 1] + `/${path}`,
      };
    }
  });

  return (
    <div className="Crumbs">
      <hr className="line"></hr>
      <Breadcrumbs
        className="breadcrumbs"
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link className="breadcrumbs-logo" underline="hover" color="inherit" href="#/">
          <img className="bottom-logo" src={logo} alt="" />
        </Link>
        {BCLinks.map((BCLink, i) => {
          return (
            <Link underline="hover" color="inherit" href={BCLink.link} key={i}>
              {BCLink.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Crumbs;

const capitilize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

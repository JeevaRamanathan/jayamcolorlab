import { useParams } from "react-router-dom";
import Wedding from "./Wedding";
import PageNotFound from "../PageNotFound/PageNotFound";
import ChettinadWedding from "./ChettinadWedding";
import OtherWedding from "./OtherWedding";
import PPEngagement from "./PPEngagement";
import Birthday from "./Birthday";
import CoorporateEvents from "./CoorporateEvents";
import Album from "./Album";
import { useEffect } from "react";
export default function Gallery(params) {
  const { type } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  switch (type) {
    case "wedding":
      return <Wedding type={type} />;
    case "chettinadWedding":
      return <ChettinadWedding type={type} />;
    case "otherwedding":
      return <OtherWedding type={type} />;
    case "ppwe":
      return <PPEngagement type={type} />;
    case "bday":
      return <Birthday type={type} />;
    case "corporateEvents":
      return <CoorporateEvents type={type} />;
    case "albums":
      return <Album type={type} />;
    default:
      return <PageNotFound />;
  }
}

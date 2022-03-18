import { useParams } from "react-router-dom";
import Wedding from "./Wedding";
import PageNotFound from "../PageNotFound/PageNotFound";
import ChettinadWedding from "./ChettinadWedding";
import OtherWedding from "./OtherWedding";
import PPEngagement from "./PPEngagement";
import Birthday from "./Birthday";
import CoorporateEvents from "./CoorporateEvents";
export default function Gallery(params) {
  const { type } = useParams();
  console.log(type);
  switch (type) {
    case "wedding":
      return <Wedding />;
    case "chettiandWedding":
      return <ChettinadWedding />;
    case "otherwedding":
      return <OtherWedding />;
    case "ppwe":
      return <PPEngagement />;
    case "bday":
      return <Birthday />;
    case "corporateEvents":
      return <CoorporateEvents />;
    default:
      return <PageNotFound />;
  }
}

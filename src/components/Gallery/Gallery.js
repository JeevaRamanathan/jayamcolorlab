import { useParams } from "react-router-dom";

export default function Gallery(params) {
  const {type} = useParams();
  console.log(type);
  
}

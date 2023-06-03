import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../assest/fetchFromApi";
import { useEffect, useState } from "react";

const ChannelDetails = () => {
  const [ channelDetail, setChannelDetail] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channel?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.item[0]));
  }, [id])
  return (
    <div>{id}</div>
  )
}

export default ChannelDetails
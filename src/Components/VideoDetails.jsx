import { Typography, Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromApi } from "../assest/fetchFromApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
  }, [id]);
  return (
    <Box minHeight='95vh' >
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
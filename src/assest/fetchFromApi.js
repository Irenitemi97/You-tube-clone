import axios from "axios";

const Base_URL = 'https://youtube-v31.p.rapidapi.com/captions'

const options = {
    url: Base_URL,
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '1af2989228msh488a502653b21ccp1c1a0cjsn589be208bc7d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
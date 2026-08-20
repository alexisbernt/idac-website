import { useEffect, useState } from "react";
import "../styles/YouTubeVideos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // move key to .env
const CHANNEL_ID = "UC3MRp60pnu6qtKU1SyqvNkQ"; // your channel ID

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=12&type=video`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="videos-status">Loading videos...</p>;
  if (error) return <p className="videos-status">Couldn't load videos: {error}</p>;

  return (
    <section className="videos-page">

      <Navbar />

      <h1>Videos</h1>

      <div className="video-list">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-row"
          >
            <div className="video-thumb-wrap">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="video-thumb"
              />
            </div>

            <div className="video-info">
              <h3 className="video-title">{video.snippet.title}</h3>
              <p className="video-meta">
                {new Date(video.snippet.publishTime).toLocaleDateString(
                  undefined,
                  { year: "numeric", month: "short", day: "numeric" }
                )}
              </p>
            </div>
          </a>
        ))}
      </div>
        <Footer />
    </section>
  );
}
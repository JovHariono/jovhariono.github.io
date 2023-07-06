import * as React from "react";

interface IVideoProps {
  link: string;
  judul: string;
}

const Video: React.FunctionComponent<IVideoProps> = (props) => {
  return (
    <div className="containerVideo">
      <div className="containerEmbed">
      <iframe
        width="300"
        height="220"
        src={props.link}
        title="YouTube video player"
        allow="fullscreen"
      />
      </div>
      <h2 className="judulVideo"> { props.judul } </h2>
    </div>
  );
};

export default Video;

import Author from "./Author.jsx";
import Avatar from "./Avatar.jsx";
import LikeButton from "./LikeButton.jsx";
import Message from "./Message.jsx";
import MoreOptionsButton from "./MoreOptionButton.jsx";
import ReplyButton from "./ReplyButton.jsx";
import RetweetButton from "./RetweetButton.jsx";
import Time from "./Time.jsx";
import moment from "moment";

const testTweet = {
  message: "Somethingaboutcats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMACatPerson",
  },
  likes: 10,
  retweets: 2,
  timestamp: "2025-11-15 21:24:37",
};

export default function Tweet() {
  return (
    <div className="tweet">
      <Avatar hash={testTweet.gravatar} />
      <div className="content">
        <Author author={testTweet.author} /> <Time time={testTweet.timestamp} />
        <Message text={testTweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={testTweet.retweets} />
          <LikeButton count={testTweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

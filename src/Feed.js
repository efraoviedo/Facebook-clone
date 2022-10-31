import React, { useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import { useEffect } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* 
      <Post
        profilePic="https://avatars.githubusercontent.com/u/105228948?s=40&v=4https://avatars.githubusercontent.com/u/105228948?s=40&v=4"
        message="WOW this works!"
        timestamp="this is a timestamp"
        username="Efranor"
        // image="https://lh3.googleusercontent.com/tMzqaQBSlQOCxcUqx9eHDg0K2D4KvgqJLPQaK8MfYoY4s74y66yBVJpWRlmQfZSLHaFWtuu555uFIirlC7GeAr12BqJzip1cUHiJH7hId5mutyzVPH-8BrutjJ05jOS2SDO_8KJ0l2u5ge-amvcRRq2c5yxbbnwUEEcpOkyurzIP0BAA8bq3cY4z5nHaJncE1gsr-GM-gsNBZxgou2w8-Hq6HbTmLKLVm8N1xjYZNzfjF1ljiQ7wZkhfCBAa6DfIjIE-XpgINki0qrylN20AmsVNERqexrf9-CjY7hDdHhoxuFaYfmkjasROP_coF5BJ4K53QIhq_Rf0hACoOvSAh19k48UrUgEsjB6rPzF2ht34-c61tMYyDFR8ksi3RHGuHA_LJYEgto0Bg42bnHE00AsYsZiRH-HuOSm5oUtN5RbP3lgMpY84ycZ_KVyrzH2pOr1dinYOhraaFmnrPOx3Lz5JrsazT1FaGiGeIqK5HfAA7YnvSxhIFl9ckmrKJKBQMbS28zjY8ZUDXBDU6r2RNV4dYwX-OWmRjHeId4tnQ7s9olxJcyJQBatrWqyllzbzUC0BZltu7wbGtDYUd3kc7ScqxDBrRbm3vINRNUJz40HUxCAjsJ1VHszcBqoR3AGVUGWmHHM1RNZNIIkReSbabHYcYrVdtvZAZ0L3BaK7doYxhECWxogGEB54AoI-dmoMv06Fx1Nbxftk87tyqkB-IjrWgWuWu6NRnus2Sdc5xO8kwlmbCz-YVDkUUCaazqjq4PA0-KVwGgE3rOhmbPknUM9x0eM2k4u8vCNINYtDrsNSPbbmRmaGnnED4TLAjf_qhpJuzulW6Cx8XM1P5zv9pSA6gn7W_9U0kc17lB9X1STRM_ZVUN6VdFlqtzAInXcYYEhIv3MO-PjPCw4MKNFzDwCF4tQgTuYY4qSlUPg10bnpcAQm=w309-h669-no?authuser=0"
        // />
        // image="https://avatars.githubusercontent.com/u/105228948?s=40&v=4https://avatars.githubusercontent.com/u/105228948?s=40&v=4"

        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />

      <Post
        profilePic="https://avatars.githubusercontent.com/u/105228948?s=40&v=4https://avatars.githubusercontent.com/u/105228948?s=40&v=4"
        message="WOW this works!"
        timestamp="this is a timestamp"
        username="Efranor"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />  */}
    </div>
  );
}

export default Feed;

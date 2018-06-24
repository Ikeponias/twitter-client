import React, { Component } from "react";
import { Image } from "react-native";
import { Thumbnail } from "native-base";
import styled from "styled-components";

const TweetCard = styled.View`
  border-width: 0.5;
`;

const TweetUserThumbnail = styled(Thumbnail)`
  width: 40px;
  height: 40px;
`;

const RetweetedUserThumbnail = styled(Thumbnail)`
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-right: 20px;
`;

const TweetBody = styled.View``;

const TweetText = styled.Text`
  font-size: 15px;
  margin: 10px;
  text-align: left;
`;

const TweetUserName = styled.Text`
  font-size: 15px;
  margin: 10px;
  text-align: right;
`;

export default class TweetComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <TweetCard>
        <TweetUserThumbnail source={{ uri: item.user.profile_image_url }} />
        {item.retweeted_status && (
          <TweetUserThumbnail
            source={{ uri: item.retweeted_status.user.profile_image_url }}
          />
        )}

        <TweetBody>
          <TweetText>{item.text}</TweetText>
          <TweetText>retweet_count:{item.retweet_count}</TweetText>
          <TweetUserName>{item.user.name}</TweetUserName>
          {item.retweeted_status && (
            <TweetText>
              元ツイートユーザ:{item.retweeted_status.user.name}
            </TweetText>
          )}
          {item.entities.media && (item.entities.media.map((m) => {
            return (
              <TweetText>メディアURL:{m.media_url_https}</TweetText>
            );
          }
          ))}
          {item.entities.media && item.entities.media.map((m) => {
            return (
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: m.media_url_https }}
              />
            );
          }
          )}
        </TweetBody>
      </TweetCard>
    );
  }
}

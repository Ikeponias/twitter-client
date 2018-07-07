import React, { Component } from "react";
import { Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";

export default class TweetComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: item.user.profile_image_url }} />
            {item.retweeted_status && (
              <Thumbnail
                source={{
                  uri: item.retweeted_status.user.profile_image_url
                }}
              />
            )}
            <Body>
              <Text>{item.user.name}</Text>
              {item.retweeted_status && (
                <Text>元ツイートユーザ{item.retweeted_status.user.name}</Text>
              )}
              <Text note>ここにTime</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            {item.entities.media &&
              item.entities.media.map(m => {
                return (
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: m.media_url_https }}
                  />
                );
              })}
            <Text>{item.text}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon type="FontAwesome" name="retweet" />
              <Text>{item.retweet_count} retweets</Text>
            </Button>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon type="Ionicons" name="heart" />
              <Text>{item.favorite_count} favorites</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  makeStyles,
  createStyles,
  Typography
} from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";
import moment from "moment";

import { routes } from "../../constants/routes";
import { BlogPost } from "../../interfaces/BlogPost";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      display: "flex",
      minHeight: 200
    },
    cardContent: {
      flexGrow: 1
    },
    media: {
      maxWidth: 200
    }
  })
);

const BlogPostCardBase: React.FC<
  BlogPostCardProps & RouteComponentProps
> = props => {
  const { post, featured = false, history } = props;
  const classes = useStyles();
  return (
    <CardActionArea
      onClick={() => history.push(`${routes.blog.base}/post/${post.slug}`)}
    >
      <Card classes={{ root: classes.card }}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography component="h2" variant="h5">
            {post.fields.title}
          </Typography>
          <Typography component="h3" variant="subtitle1" color="textSecondary">
            {moment(post.fields.publish_date).format("MMM D, YYYY")}
          </Typography>
          <Typography>{post.fields.summary}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          src={post.fields.card_image}
          classes={{ root: classes.media }}
        />
      </Card>
    </CardActionArea>
  );
};

export const BlogPostCard = withRouter(BlogPostCardBase);
import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { BASE_URL } from '../../../config.js'

class PostSingle extends React.Component {

  componentDidMount() {
    const { loadPost, match} = this.props;
    loadPost(match.params.id);
  }

  render() {
    const {posts, request, location} = this.props;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         posts.length > 0 ? (
            <article className="post-summary">
              <SmallTitle>{posts[0].title}</SmallTitle>
              <HtmlBox>{posts[0].content}</HtmlBox>
              <p>Author: {posts[0].author}</p>
              <FacebookProvider appId="381113066102363">
                <Comments href={`${BASE_URL}/${location.pathname}`} />
              </FacebookProvider>
              <FacebookProvider appId="381113066102363"> 
                <ShareButton className="fb-share-button" href={`${BASE_URL}/${location.pathname}`} >
                  Share this link!
                </ShareButton>
              </FacebookProvider>
            </article> 
      ) : ( 
        <Alert variant="info"> No posts!!! </Alert>
      )) : ( 
        <Alert variant="error"> {(request.error).toString()} </Alert>,
        console.log(request.error)
      );

    return (
      <div> 
        {textin} 
      </div>
    );
  }

};

PostSingle.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPost: PropTypes.func.isRequired,
};


export default withRouter(props => <PostSingle {...props} />);
<Card>
 <Typography type="title"> Newsfeed </Typography>
 <Divider/>
<NewPost addUpdate={addPost}/>
 <Divider/>
<PostList removeUpdate={removePost} posts={posts}/>
</Card>

const addPost = (post) => {
    const updatedPosts = [...posts]
    updatedPosts.unshift(post)
    setPosts(updatedPosts)
   }

   const removePost = (post) => {
    const updatedPosts = [...posts]
    const index = updatedPosts.indexOf(post)
    updatedPosts.splice(index, 1)
    setPosts(updatedPosts)
   }
   
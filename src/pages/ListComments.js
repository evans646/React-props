export const ListComments = ({comments})=> {
    return(
      <>
        {comments.map((comment, key) => (
            <div key={key} >
                <h4 ><b>Name:</b> {comment.username}</h4>
                <p >Comment: {comment.text}</p>
            </div>
        ))}
      </>
    )
};

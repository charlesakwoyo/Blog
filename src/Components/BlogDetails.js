import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Blogdetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog } = useFetch('http://localhost:4000/blogs/' + id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      axios.delete('http://localhost:4000/blogs/' + id)
        .then(() => {
          alert("Blog deleted");
          history.push("/");
        })
        .catch(err => console.log(err.message));
    } else {
      return;
    }
  };

  return (
    <div className='details'>
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <p>Done by: {blog.author}</p>
          <div>{blog.body}</div>
          <Button onClick={handleSubmit} className="mt-3" variant="danger" type="submit">
            Delete
          </Button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;

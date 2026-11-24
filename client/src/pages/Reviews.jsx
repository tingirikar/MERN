import { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  // form
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function loadReviews() {
      const response = await fetch("http://localhost:3000/reviews");
      const data = await response.json();
      setReviews(data);
    }
    loadReviews();
  }, []);

  const filteredReviews = reviews.filter( review => 
    review.content.includes(search)
  );

  // HANDLE SUBMIT
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, content })
    });

    if (!response.ok) return;

    const newReview = await response.json();
    setReviews(prev => [...prev, newReview]);

    setName("");
    setContent("");
  }

  // HANDLE DELETE
  async function handleDelete(id) {
    const response = await fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) return;

    setReviews(prev => prev.filter(review => review._id !== id));
  }

  return (
    <div>
      
      {/* search */}
      <input 
        value = { search }
        placeholder = "search"
        onChange = {e => { setSearch(e.target.value) }}
      />

      {/* add review  */}
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input 
            value = {name}
            placeholder = "Enter Name" 
            onChange = {e => { setName(e.target.value) }}
          />
        </label>
        <label>
          review
          <textarea 
            value = {content}
            placeholder = "Enter Review"
            onChange = {e => { setContent(e.target.value) }}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>

      {/* display reviews */}
      <div>
        <p>total reviews : {reviews.length}</p>
        {filteredReviews.map(review => (
          <div key={review._id} style={{ border: '1px solid black' }}>
            <p>{review.name}</p>
            <p>{review.content}</p>
            <p>{new Date(review.createdAt).toLocaleString()}</p>
            <button
              onClick = {() => handleDelete(review._id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

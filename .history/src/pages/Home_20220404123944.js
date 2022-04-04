import { useNavigate } from "react-router-dom";
import withLayout from "./withLayout";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="banner">
        <h1> Welcome to Our Blog Post Site</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          laudantium enim voluptatem reiciendis magnam? Dignissimos eos deleniti
          quaerat excepturi neque et ut! Quae necessitatibus nulla enim fugiat,
          commodi suscipit tenetur? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos aperiam ea deleniti neque reprehenderit harum
          quisquam possimus nam dolor rerum ratione id dignissimos quia
          inventore vitae mollitia, sit corporis unde.
        </p>

        <div className="actions-wrap">
          <button className="btn-outline" onClick={() => navigate("/about")}>
            About Me
          </button>
          <button className="btn-contain" onClick={() => navigate("/blog")}>
            Read Blogs
          </button>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);

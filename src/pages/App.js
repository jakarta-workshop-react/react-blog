import React from "react";
import Search from "../components/Search";
import BlogList from "../components/BlogList";

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      blogs: [],
      filteredBlogs: []
    };
  }

  componentDidMount() {
    this.handleGetBlog();
  }

  handleTypeSearch = event => {
    const filteredBlogs = this.state.blogs.filter(
      blog => blog.title.indexOf(event.target.value) > -1
    );
    this.setState({ filteredBlogs: filteredBlogs });
  };

  handleGetBlog = () => {
    return fetch(link)
      .then(res => res.json())
      .then(res => this.setState({ blogs: res, filteredBlogs: res }));
  };

  render() {
    return (
      <div style={{ marginRight: "30%", marginLeft: "30%" }}>
        <Search onChangeSearch={this.handleTypeSearch} />
        {this.state.filteredBlogs.map(blog => (
          <BlogList key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    );
  }
}

export default App;

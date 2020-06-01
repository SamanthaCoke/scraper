import React, { Component } from "react";
import axios from "axios";
let arr = [1, 2, 3, 4];
class Save extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }
  getBooks = () => {
    console.log("search", this.state.searchInput);
    axios.get("/scraped").then((resp) => {
      console.log(resp);
      let books = resp.data;

      this.setState({
        books: books,
      });
    });
  };

  handleDelete = (id) => {
    axios.delete(`/api/books/${id}`).then((resp) => {
      console.log(resp);
      let books = resp.data;
      this.getBooks();
    });
  };

  render() {
    return (
      <div className="App">
        {/** create container for search */}
        <div className="container">
          <div className="row">
            <div className="col-12" style={{ border: "1px solid black" }}>
              <h2>These are the scraped books</h2>
            </div>
          </div>
        </div>
        <br />
        {/** create container for list of return books from search */}
        {this.state.books.map((book) => {
          return (
            <div className="container" key={book._id}>
              <div className="row">
                <div
                  className="col-12"
                  style={{ border: "1px solid black", textAlign: "left" }}
                >
                  <h2>Book title - {book.title}</h2>
                  <hr />
                  <p><img src={book.image} width={200}/></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Save;

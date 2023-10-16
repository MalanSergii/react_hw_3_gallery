import { Component } from 'react';
import SearchBar from './components/searchbar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import axios from 'axios';
import Loader from './components/loader/Loader';

const API_KEY = '25084920-0e8ebadd3b3d898ff3835027a';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    query: '',
    page: '',
    per_page: 12,
    total_find: null,
    data: [],
    loader: false,
    loadMoreBtn: false,
    contnentMessage: false,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({
        data: await this.fetchData(this.state.query, 1),
      });
    }
  }

  getDataFromForm = (query, page) => {
    this.setState({
      query,
      page,
    });
  };

  fetchData = async (query, page) => {
    try {
      this.setState({ loader: true, contnentMessage: false });
      const resp = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
      );
      this.setState({
        total_find: resp.data.total,
      });
      this.setState({ loader: false });
      if (!resp.data.hits.length) {
        this.setState({
          contnentMessage: 'no content',
        });
      }
      return resp.data.hits;
    } catch (error) {
      console.log(error);
    }
  };

  loadMore = async () => {
    try {
      this.setState({ loader: true });
      const resp = await axios.get(
        `${BASE_URL}?q=${this.state.query}&page=${
          this.state.page + 1
        }&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
      );
      this.setState(prev => ({
        page: prev.page + 1,
        data: [...prev.data, ...resp.data.hits],
        total_find: prev.total_find - this.state.per_page,
        loader: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data, total_find, per_page, query, loader, contnentMessage } = this.state;

    return (
      <>
        <header className="Searchbar">
          <SearchBar getDataFromForm={this.getDataFromForm}></SearchBar>
        </header>
        <main>
          {contnentMessage && (
            <p>
              no pictires with this "<b>{query}</b>" request
            </p>
          )}

          {data.length ? <ImageGallery data={data}></ImageGallery> : null}

          {total_find >= per_page && <Button loadMore={this.loadMore}></Button>}

          {loader && <Loader></Loader>}
        </main>
      </>
    );
  }
}

export default App;

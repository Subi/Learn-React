import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: []}

    onSearchSubmit = async term => {
        const {data} = await unsplash.get('https://api.unsplash.com/search/photos',{
            params: { query: term}
        });
        this.setState({images: data.results});
    }

    render(){
        return (
            <div className= "ui container" style={{marginTop: '15px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
            Found: {this.state.images.length} images
            </div>
        );
    }

}


export default App;
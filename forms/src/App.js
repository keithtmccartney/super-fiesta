import React, { Component } from 'react';
import FileUpload from './FileUpload';
/*import 'FileUpload' from './FileUpload';*/

class App extends Component {
  render() {
    return (<div><h2> File upload </h2><FileUpload /></div>);
  }
}

class FileUpload extends Component {
  /* To be finished */

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleUpload}>
          <div className="form-group">
            <input className="form-control" ref={(ref) => { this.uploadInput = ref; }} type="file" />
          </div>

          <div className="form-group">
            <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
          </div>

          <button className="btn btn-success" type>Upload</button>
        </form>
      </div>)
  }
}

export default App;

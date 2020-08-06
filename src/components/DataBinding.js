import React from 'react';

class DataBinding extends React.Component {

        state = {
          text: 'Hello',
          counter: 1,
          posts: [
            {text: 'post1', author: 'author1'},
            {text: 'post2', author: 'author2'},
            {text: 'post3', author: 'author3'}
          ],
          inputValue: ''
        }
      
        inputChangeHandler = (e) => {
          this.setState({
              inputValue: e.target.value
          });
        }
      
        submitClickHandler = () => {
          let newPost = {
            text: this.state.inputValue,
            author: 'peejay'
          }
          console.log(newPost);
          let copy = [...this.state.posts]
          copy.push(newPost);
          console.log(this.state.posts, copy);
        
          this.setState({
            posts: copy
          })
        }
      
        render() {
          return (
            <div className="App">
            <header className="App-header">
            {
              this.state.posts.map ( (post) => {
              return <Post key={post.text} post={post}/>
              })
            }

              <button onClick={this.submitClickHandler}>Submit</button>
              <input onChange={this.inputChangeHandler} value={this.state.inputValue} type="text"/>
              </header>
            </div>
          );
        }
      }


export default DataBinding;
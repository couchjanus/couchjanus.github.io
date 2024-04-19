import React from "react";


class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {counter: props.post.likes }
    }

    componentDidMount() {
        console.log("Component Post mounted")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Component Post should update", nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Post updated", prevProps, prevState)
    }
    render() {
        return (

            <article>

                <div>
                    <img src={this.props.post.cover} alt={this.props.post.title} />
                </div>
                <div>
                    <h3>{this.props.post.title}</h3> 
                    <p>{this.props.post.content}</p>
                </div>

                <button onClick={() => {
                    this.setState(()=>({
                        counter: this.state.counter + 1
                    }))
                }

                }>
                    Like this <strong>{this.state.counter}</strong>
                </button>

            </article>
        )
    }

}

export default Post;
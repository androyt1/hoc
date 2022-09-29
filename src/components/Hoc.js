import React,{Component} from "react";
import Spinner from "./Spinner";

const withWrapperFetch=(OriginalComponent)=>{
    class NewComponent extends Component{
        constructor(props){
            super(props)
            this.state={ 
                movies:[],
                loading:false
            }
        }
        componentDidMount(){
            this.setState({loading:true})
            const fetMovies=async()=>{
                const res=await fetch('https://json-faker.onrender.com/movies')
                const data=await res.json()
                this.setState({
                    movies:data.movies,
                    loading:false
                })
            }
            fetMovies()
        }
        render(){
            return (
            <>
            {
                this.state.loading && <Spinner/>
            }
                {this.state.movies.length > 0 && (<OriginalComponent movies={this.state.movies} />)}
            </>
            )
        }
    } 
    return NewComponent
}

export default withWrapperFetch
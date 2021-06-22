import React, {Component} from 'react'
import { fetchBlogs, fetchService, fetchSingleBlog, fetchTeam, fetchSetting } from './services'

const UserContext = React.createContext()

const UserConsumer = UserContext.Consumer

class UserProvider extends Component {
    // Context state
    constructor(props) {
      super(props);
  
      this.state = {
        teams :[],
        services:[],
        blogs:[],
        searchBlog:[],
        comments:[],
        popularBlog:[],
        singleBlog:{},
        settings:{},
        messageSuccess:false,
        loading:false,
        setComments: this.setComments,
        getSingleBlog: this.getSingleBlog,
        increaseView: this.increaseView,
        sendMessage: this.sendMessage,
        setPopularBlog:this.setPopularBlog,
        setBlogs:this.setBlogs,
        setLoading:this.setLoading,
        setSearchBlog:this.setSearchBlog
      }
  
      this.getSingleBlog = this.getSingleBlog.bind(this);
  }
    

    componentDidMount(){
      this.setState({loading:true})
        fetchTeam().then((teams) => {if(teams && teams.status) this.setState({teams:teams.data})})
        fetchSetting().then((settings) => {if(settings && settings.status) this.setState({settings:settings.data[0]})})
        fetchService().then((services) =>{if(services && services.status) this.setState({services:services.data})})
        fetchBlogs({offset:0, limit:10}).then((blogs) => {
          if(blogs && blogs.status)this.setState({blogs:blogs.data})
          this.setState({loading:false})
        })
        // console.log("data", data)
    }

    // Method to update state
    sendMessage = (user) => {
      this.setState((prevState) => ({ user }))
    }

    getSingleBlog = (blogs) =>{
      this.setState({singleBlog:blogs, comments:blogs.Comments})
    }

    setPopularBlog = (blogs) =>{
      this.setState({popularBlog:blogs})
    }

    setBlogs = (blogs) =>{
      this.setState({blogs})
    }

    setLoading = (value) =>{
      this.setState({loading:value})
    }

    setSearchBlog = (searchBlog) =>{
      this.setState({searchBlog})
    }

    setComments =(data)=>{
      const prevComment = this.state.comments
      prevComment.push(data)
      this.setState({comments:prevComment})
    }

    increaseView(id){
      this.setState({loading:true})
      fetchSingleBlog(id).then((blogs) => {
        if(blogs && blogs.status)this.setState({singleBlog:blogs.data})
        this.setState({loading:false})
      })
    }
  
    render() {
      const { children } = this.props
      // const { services, teams, messageSuccess, blogs, singleBlog, loading } = this.state
      // const { sendMessage, getSingleBlog, increaseView } = this
  
      return (
        <UserContext.Provider
          value={this.state}
        >
          {children}
        </UserContext.Provider>
      )
    }
  }

export default UserContext

export { UserProvider, UserConsumer }
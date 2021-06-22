const url = "https://pharma-app.herokuapp.com/api/v1/site/";
export const imageUrl = "https://pharma-app.herokuapp.com/images/";

export const getMonth = (val) =>{
  switch (val) {
      case 0:
          return "Jan"
      case 1:
          return "Feb"
      case 2:
          return "Mar"
      case 3:
          return "Apr"
      case 4:
          return "May"
      case 5:
          return "Jun"
      case 6:
          return "Jul"
      case 7:
          return "Aug"
      case 8:
          return "Sept"
      case 9:
          return "Oct"
      case 10:
          return "Nov"
      case 11:
          return "Dec"
      default:
          return "";
  }
}

export const fetchTeam = async() =>{
    try {
        let response = await fetch(`${url}team`);
        let data = await response.json();
        return data

      } catch(err) {
        // catches errors both in fetch and response.json
        console.log(err);
        return err
      }
}

export const fetchSetting = async() =>{
  try {
      let response = await fetch(`${url}setting`);
      let data = await response.json();
      return data

    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
      return err
    }
}

export const fetchService = async() =>{
    try {
        let response = await fetch(`${url}service`);
        let data = await response.json();
        return data
      } catch(err) {
        // catches errors both in fetch and response.json
        console.log(err);
      }
}

export const fetchBlogs = async(payload) =>{
    try {
        let response = await fetch(`${url}blog?offset=${payload.offset}&limit=${payload.limit}`);
        let data = await response.json();
        return data
      } catch(err) {
        // catches errors both in fetch and response.json
        console.log(err);
      }
}

export const searchBlog = async(term) =>{
  try {
      let response = await fetch(`${url}blog/search?term=${term}`);
      let data = await response.json();
      return data
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
}

export const fetchSingleBlog = async(id) =>{
  try {
      let response = await fetch(`${url}blog/${id}`);
      let data = await response.json();
      return data
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
}

export const fetchPopularBlog = async() =>{
  try {
      let response = await fetch(`${url}blog/popular`);
      let data = await response.json();
      return data
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
}

export const increaseBlogView = async(id) =>{
  try {
      let response = await fetch(`${url}blog/${id}`,{
        method:"post",
        headers:{'Content-Type': 'application/json'}
      });
      let data = await response.json();
      return data
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
}

export const sendMessage = async(payload) =>{
    try {
        let response = await fetch(`${url}message`, {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
        let data = await response.json();
        return data
      } catch(err) {
        // catches errors both in fetch and response.json
        console.log(err);
      }
}

export const sendReply = async(payload) =>{
  try {
      let response = await fetch(`${url}blog/${payload.commentId}/comment`, {
          method: 'post',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
      });
      let data = await response.json();
      return data
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
}
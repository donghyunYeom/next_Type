import fetch from '../../libs/fetch'

const ssApi = {

  GetList(keyword) {  
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(keyword),
      };
    if(process.env.NEXTAUTH_URL === undefined){
        return fetch('/api/homema/list',options) 
    }else{
        return fetch(process.env.NEXTAUTH_URL+'/api/homema/list',options) 
    }
  },

  GetLink() {  
    if(process.env.NEXTAUTH_URL === undefined){
        return fetch('/api/homema/link') 
    }else{
        return fetch(process.env.NEXTAUTH_URL+'/api/homema/link') 
    }
  }
}

//export  {api};
export  {ssApi} ;


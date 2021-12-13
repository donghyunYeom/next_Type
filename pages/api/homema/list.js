import excuteQuery from '../../../libs/db';

export default async (req, res) => {
    
    const keyword = req.body.keyword;
    
    try {
        var query = "";
        if(keyword == undefined){
            query = `SELECT * FROM homema`;
        }else{
            query = `SELECT * FROM homema where name like('%${keyword}%') || nameKo like('%${keyword}%')`;
        }
        let result = await excuteQuery({
            query: query,
            //values: 1,
        });
        //return result[0];
        

        for (let index = 0; index < result.length; index++) {
            var item = result[index];
            let short='';
            var client_id = 'YCVXKRjnXwzhd5_sOsmW';//개발자센터에서 발급받은 Client ID
            var client_secret = 'jFGIY47Id5'; //개발자센터에서 발급받은 Client Secret
            var query = encodeURI(item.discord);
            const axios = require('axios');

            let config = {
            method: 'GET',
            url: 'https://openapi.naver.com/v1/util/shorturl?url='+query,
                headers: {
                    'X-Naver-Client-Id':client_id,
                    'X-Naver-Client-Secret': client_secret
                },
            json: true
            };

            try{
                var response = await axios(config);
                result[index]['shortUrl'] = response.data.result.url 
                    //강제로 넘김
                

            }catch(error){
                console.error(error.response.data);  
            }
            
        }

        res.status(200).json( result )

    } catch (error) {
        console.log(error);
    }

    

    
}

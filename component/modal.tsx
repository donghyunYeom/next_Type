import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

declare var Kakao: any;

const ModalCompoent = ( props:any ) =>{

    const modalClose= ()=>{
        props.openOption(false)
        document.body.style.overflow = "unset";
    }

    useEffect(() => {
        Kakao.init(process.env.KAKAO_API_KEY);
      }, []);
      
      const shareKakao = (name:any, image:any, url:any) => {
      
      Kakao.Link.sendDefault({
          objectType: "feed",
          content: {
              title: name+" Discord",
              description: name+" Discord",
              imageUrl: image,
              link: {
              mobileWebUrl: url,
              androidExecParams: "Discord",
              },
          },
          buttons: [
              {
              title: "Discord로 이동",
              link: {
                  mobileWebUrl: url,
              },
              },
          ],
      });
      }
      
      //twitter
      function shareTwitter(name:any, image:any, url: any) {
          var sendText = name; // 전달할 텍스트
          var sendUrl = url; // 전달할 URL
          window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
      }

      const shortUrl = async () =>{
        alert("클립보드에 복사되었습니다!! Ctrl+V 로 사용하세요");
    }
      


    return (
        <div>
            <Modal isOpen={ props.isOpen } onRequestClose={() => modalClose()} ariaHideApp={false} 
            style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(255, 255, 255)',
                  width: '400px',
                  height: '530px',
                  color: 'black',
                },
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
              
                }
              }}>
            
                <button onClick={() => modalClose()} className="float-right">X</button>
                <div className="text-center">
                    <div className="img_tag">
                        <img className="w-48 rounded-full" src={props.data.imagePath} alt="test" />
                    </div>
                    <div className="item mt-4 text-2xl font-bold">
                        {props.data.name} • {props.data.nameKo}
                    </div>
                    <div> {props.data['description']}</div>
                    <div className="item">
                        <input type="text" defaultValue={props.data.shortUrl} placeholder="shortUrl" className="border w-2/3 h-8 mt-4 text-center text-black "/>
                    </div>
                    <div className="mt-4 flex w-3/4 ml-10 ">
                    <div className="flex-1">
                        <img alt="test" src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" onClick={()=> shareKakao(props.data.name, props.data.imagePath, props.data.shortUrl) }/>
                    </div>
                    <div className="flex-1">
                        <img  alt="test" src="/twitter.png" className="twit ml-4 rounded-2xl" onClick={()=> shareTwitter(props.data.name, props.data.imagePath, props.data.shortUrl) }/>
                    </div>
                    <div className="flex-1">
                        <CopyToClipboard onCopy={shortUrl} text={props.data.shortUrl}>
                            <img alt="test" src="/copy.png" className="copy ml-4 "/>
                        </CopyToClipboard>
                    </div>                 
                </div>
                <div className="mt-4">
                    <button className="px-16 py-3 text-2xl bg-black text-white"><a href={props.data.discord}>입장하기</a></button>
                </div>

                <style jsx>{`
                  .img_tag {
                    text-align: -webkit-center;
                  }
                  .border {
                    border: 1px solid black;
                  }
                  .twit{
                    width: 4.3rem;
                  }
                  .copy{
                    width: 5rem;
                    margin-top: -5px;
                  }
                `}</style>
            </div>
            </Modal>
        </div>
    )
}

export default ModalCompoent;
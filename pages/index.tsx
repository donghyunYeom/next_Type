import { ssApi } from './api/index'
import {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

declare var Kakao: any;

//const Home: NextPage = () => {
const Homema = (props: any) => {

  const [homema,setHome] = useState(props.detail);
  const [modal, setModal] = useState(false)
  const [current, setCurrent] = useState(props.detail)
  // const onView= (idx:any)=>{
  //   //setCurrent(data.find(item => item.rank === rank))
  //   console.log(props.detail[idx-1]);
  //   setCurrent(props.detail[idx-1])
  //   setModal(true)

  // }

  const modalOpen= (idx:any)=>{
    setModal(true)
    setCurrent(props.detail[idx-1]);
    document.body.style.overflow = "hidden";
  }

const modalClose= ()=>{
  setModal(false)
  document.body.style.overflow = "unset";
} 

const afrerSearch = async (keyword:any) => {
  window.scrollTo(0,0)
  const res = await ssApi.GetList({keyword: keyword})
  setHome(res);
}

const onChange = (e: { target: { value: any; }; }) => {
  afrerSearch(e.target.value);
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

const Search = () => {

}

const handleKeyPress = (e : any) => {
  if (e.key === "Enter") {
    afrerSearch(e.target.value);
    console.log(1);
  }
};

  return (
   
    <div className="hover:text-white ">
        {/* <div className="inline-block m-5">GUIDE</div>
        <div className="inline-block">|</div>
        <div className="inline-block m-5">EVENT</div> */}
        <header className="flex-1 flex-col sm:flex-row m-5 justify-between items-center mt-20 mb-15 text-center">
            <div className="flex-1 cursor-pointer transform hover:scale-105">
                {/* <LinkIcon className="flex-1 h-16 inline-block" /> */}
                <p className="flex-1 lg:text-4xl text-2xl block">OUR FAN SITE CHANNEL</p>
                <p className="flex-1 lg:text-11xl text-7xl md:font-extrabold inline-block lg:-mt-12" >Discord</p>
            </div>
        </header>

        <div className="w-screen text-center mt-8 lg:mb-10">
            <div className="inline">
            <div className="inline-block w-0 h-full"></div>
            <div className="inline align-middle">
            <input
                id="search_keyword"
                type="text"
                placeholder="SEARCH"
                className="w-1/2 md:h-16 h-10 text-center text-black"
                onChange={onChange}
            />
            </div>
            <button type="button" className="inline-block bg-black text-white md:h-16 h-10 w-32 text-center align-middle line leading-6" onClick={()=> Search() } >ENTER</button>
            </div>
        </div>

        <div className="max-w-7xl m-auto flex justify-around text-center md:mt-20 -mt-4 lg:flex-row md:flex-row flex-col ">
              {homema.map((homema : any) => (
              <div className="w-96 text-center relative m-auto mt-16" key={homema.idx}>
                <div className="-mb-16">
                  <img className="w-48 m-auto rounded-full image" src={homema.imagePath} alt="test" />
                </div>
                <div className="item pt-10 flex w-96 h-56 bg-white text-black text-xl font-bold">
                  <div className="m-auto">
                    <div className="">
                      {homema.name} • {homema.nameKo}
                    </div>
                    <div className="item">
                        {homema.description}
                    </div>
                    <div className="inline-block mt-4">
                      <div className="inline-block mr-10 bg-black text-white pt-4 pr-6 pb-4 pl-6" onClick={()=> modalOpen(homema.idx) } >초대하기</div>
                      <div className="inline-block bg-black text-white pt-4 pr-6 pb-4 pl-6"><a href={homema.discord}>입장하기</a></div>
                    </div>
                  </div>
                  
                </div>
              </div>
              ))}
         
        </div>

        <Modal isOpen={modal} onRequestClose={() => modalClose()} ariaHideApp={false} 
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
                <img className="w-48 rounded-full" src={current.imagePath} alt="test" />
              </div>
              <div className="item mt-4 text-2xl font-bold">
                {current.name} • {current.nameKo}
              </div>
              <div> {current['description']}</div>
              <div className="item">
                <input type="text" defaultValue={current.shortUrl} placeholder="shortUrl" className="border w-2/3 h-8 mt-4 text-center text-black "/>
              </div>
              <div className="mt-4 flex w-3/4 ml-10 ">
                <div className="flex-1">
                  <img alt="test" src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" onClick={()=> shareKakao(current.name, current.imagePath, current.shortUrl) }/>
                 </div>
                 <div className="flex-1">
                  <img  alt="test" src="/twitter.png" className="twit ml-4 rounded-2xl" onClick={()=> shareTwitter(current.name, current.imagePath, current.shortUrl) }/>
                 </div>
                 <div className="flex-1">
                  <CopyToClipboard onCopy={shortUrl} text={current.shortUrl}>
                    <img alt="test" src="/copy.png" className="copy ml-4 "/>
                  </CopyToClipboard>
                 </div>                 
              </div>
              <div className="mt-4">
                  <button className="px-16 py-3 text-2xl bg-black text-white"><a href={current.discord}>입장하기</a></button>
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

export async function getServerSideProps(context:any) {
   
  let detail = await ssApi.GetList();
    
  return {
    props: {
      detail: detail,
    },
  };
}

export default Homema
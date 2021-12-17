//import type { NextPage } from 'next'
import { ssApi } from './api/index'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react';
//import Modal from './api/component/modal';
import Modal from 'react-modal';

const customStyles = {
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
    //align: 'center',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

  }
};

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

  return (
   
    <div className="hover:text-white ">
        <div className="inline-block m-5">GUIDE</div>
        <div className="inline-block">|</div>
        <div className="inline-block m-5">EVENT</div>
        <header className="flex-1 flex-col sm:flex-row m-5 justify-between items-center mt-20 mb-15 text-center">
        <div className="flex-1 cursor-pointer transform hover:scale-105">
            {/* <LinkIcon className="flex-1 h-16 inline-block" /> */}
            <p className="flex-1 text-4xl block">OUR FAN SITE CHANNEL</p>
            <p className="flex-1 text-11xl font-extrabold inline-block -mt-12" >Discord</p>
        </div>
      </header>

        <div className="w-screen text-center mt-8 mb-10">
            <div className="inline">
            <div className="inline-block w-0 h-full"></div>
            <div className="inline align-middle">
            <input
                id="search_keyword"
                type="text"
                placeholder="SEARCH"
                className="w-1/2 h-16 text-center text-black"
            />
            </div>
            <style jsx>{`
              .line {
                line-height: 60px;
              }
            `}</style>
            <div className="inline-block bg-black text-white h-16 w-32 text-center align-middle line" >ENTER</div>
            </div>
        </div>

        <div className="w-screen flex justify-around text-center mt-20">
          {homema.map((homema : any) => (
          <div className="w-96 text-center relative" key={homema.idx}>
            <div className="-mb-16">
              <img className="w-48 m-auto rounded-full image" src={homema.imagePath} alt="test" />
            </div>
            <div className="item pt-10 flex w-96 h-56 bg-white text-black  w-full text-xl font-bold">
              <div className="m-auto">
                <div className="">
                  {homema.name} • {homema.nameKo}
                </div>

                <div className="item">
                {homema.description}
                </div>
                <div className="inline-block mt-4">
                  {/* <div onClick={()=> onView(homema.idx) } >초대하기</div> */}
                  <div className="inline-block mr-10 bg-black text-white pt-4 pr-6 pb-4 pl-6" onClick={()=> modalOpen(homema.idx) } >초대하기</div>
                  <div className="inline-block bg-black text-white pt-4 pr-6 pb-4 pl-6"><a href={homema.discord}>입장하기</a></div>
                </div>
              </div>
              
            </div>
          </div>
          ))}

          {/* <style jsx>{`
            .image {
              display: block;
              margin: 0px auto;
            }
            .name_text{
              display:block;
              margin-top: -90px;
              width: 100%;
              height: 300px;
              padding-top:100px;
            }
          `}</style> */}

        </div>

        {/* <Modal current={current} onClose={onClose}/> */}
        <Modal isOpen={modal} onRequestClose={() => modalClose()} ariaHideApp={false} style={customStyles} current={current}>
          
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
                <input type="text" value={current.shortUrl} placeholder="shortUrl" className="border w-2/3 h-8 mt-4 text-center text-black "/>
              </div>
              <div className="mt-4 flex w-3/4 ml-10 ">
                <div className="flex-1">
                  <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                 </div>
                 <div className="flex-1">
                  <img src="/twitter.png" className="twit ml-4 rounded-2xl"/>
                 </div>
                 <div className="flex-1">
                  <img src="/copy.png" className="copy ml-4 "/>
                 </div>                 
              </div>
              <div className="mt-4">
                  <button className="px-16 py-3 text-2xl bg-black text-white">입장하기</button>
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
//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png
//Modal.setAppElement('#root')


export async function getServerSideProps(context:any) {
   
  let detail = await ssApi.GetList();

  //console.log(detail)

  return {
    props: {
      detail: detail,
    },
  };
}

export default Homema
function componentWillMount() {
  throw new Error('Function not implemented.');
}


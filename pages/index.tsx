//import type { NextPage } from 'next'
import { ssApi } from './api/index'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react';
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
    width: '300px',
    height: '300px',
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
};

//const Home: NextPage = () => {
const Homema = (props: any) => {

  const [homema,setHome] = useState(props.detail);
  const [showModal, setShowModal] = useState(false);

  const modalInfo = (idx:any) => {

    setShowModal(true);
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

        <div className="w-screen text-center mt-8 mb-24">
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

        <div className="w-screen flex justify-center justify-items-center text-center">
          {homema.map((homema : any) => (
          <div className="m-24" key={homema.idx}>
            <div className="item">
              <img className="w-48 rounded-full" src={homema.imagePath} alt="test" />
            </div>
            <div className="item">
              {homema.name} • {homema.nameKo}
            </div>
            <div className="item">
              {homema.description}
            </div>
            <div className="inline-block">
              <button data-msg={homema.idx} onClick={() => modalInfo(homema.idx)}>초대하기</button>
            </div>
            <div className="inline-block"><a href={homema.discord}>입장하기</a></div>
          </div>
          ))}

          <Modal key={homema.idx} id={homema.idx}
            isOpen={showModal} onRequestClose={() => setShowModal(false)} ariaHideApp={false} style={customStyles} >
              <div className="text-center">
                <div className="item">
                <div className="item">
                    <img className="w-48 rounded-full" src={homema.imagePath} alt="test" />
                  </div>
                  <div className="item">
                    {homema.name} • {homema.nameKo}
                  </div>
                  <div className="item">
                    {homema.description}
                  </div>
                </div>
              </div>
              
              <button onClick={() => setShowModal(false)}>close</button>
          </Modal>
          

            
        </div>
    </div>
  )
}

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


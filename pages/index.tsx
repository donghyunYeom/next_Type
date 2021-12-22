import { ssApi } from './api/index'
import {useState, useEffect} from 'react';
import ModalCompoent from '../component/modal';

const Homema = (props: any) => {

const [homema,setHome] = useState(props.detail);
const [modal, setModal] = useState(false)
const [current, setCurrent] = useState(props.detail)

const modalOpen= (idx:any)=>{
  setModal(true)
  setCurrent(props.detail[idx-1]);
  document.body.style.overflow = "hidden";
  console.log(idx);
}

const afrerSearch = async (keyword:any) => {
  window.scrollTo(0,0)
  const res = await ssApi.GetList({keyword: keyword})
  setHome(res);
}

const onChange = (e: { target: { value: any; }; }) => {
  afrerSearch(e.target.value);
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

        <header className="flex-1 flex-col sm:flex-row m-5 justify-between items-center mt-20 mb-15 text-center">
            <div className="flex-1 cursor-pointer transform hover:scale-105">
                <p className="flex-1 lg:text-4xl text-2xl block">OUR FAN SITE CHANNEL</p>
                <a href="/"><p className="flex-1 lg:text-11xl text-7xl md:font-extrabold inline-block lg:-mt-12" >Discord</p></a>
            </div>
        </header>

        <div className="w-screen max-w-screen-2xl text-center mt-8 lg:mb-10 m-auto">
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

        <div className="max-w-7xl m-auto flex justify-around text-center md:mt-20 -mt-4 mb-16 xl:flex-row flex-col flex-wrap">
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
                      {/* <div className="inline-block mr-10 bg-black text-white pt-4 pr-6 pb-4 pl-6" onClick={()=> modalOpen(homema.idx) } >초대하기</div> */}
                      <div className="inline-block mr-10 bg-black text-white pt-4 pr-6 pb-4 pl-6" onClick={()=> modalOpen(homema.idx) } >초대하기</div>
                      <div className="inline-block bg-black text-white pt-4 pr-6 pb-4 pl-6"><a href={homema.discord}>입장하기</a></div>
                    </div>
                  </div>
                  
                </div>
              </div>
              ))}
        </div>

        <ModalCompoent isOpen={modal} openOption={setModal} data={current}></ModalCompoent>

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
import type { NextPage } from 'next'
import { ssApi } from './api/index'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  CubeIcon,
  HeartIcon,
  LinkIcon,
  MailIcon
} from "@heroicons/react/outline"

const Home: NextPage = () => {
  return (
    <div className="hover:text-white ">
            <header className="flex-1 flex-col sm:flex-row m-5 justify-between items-center mb-15 text-center">
            <div className="flex-1 cursor-pointer transform hover:scale-105">
                <LinkIcon className="flex-1 h-20 inline-block" />
                <p className="flex-1 text-7xl font-extrabold inline-block" >Discord</p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                {/* <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='MAIL' Icon={MailIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} /> */}
            </div>
          </header>

            <div className="w-screen text-center mt-24 mb-24">
                <div className="inline">
                <input
                    id="search_keyword"
                    type="text"
                    placeholder="search"
                    className="w-2/3 h-12 text-center text-black"
                />
                <div className="inline-block bg-black text-white h-14 w-12 text-center align-middle" >검색</div>
                </div>
            </div>

            <div className="w-auto md:flex mt-20" >
            <div className="md:flex-shrink-0"></div>
               
            </div> 
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

export default Home

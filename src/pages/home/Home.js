import React from 'react'
import BlogLists from '../../components/blogLists/BlogLists'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import HomeBanner from '../../components/homeBanner/HomeBanner'
import BasicPagination from '../../components/pagination/Pagination'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeBanner/>
        <BlogLists/>
        <BasicPagination/>
        <Footer/>
    </div>
  )
}

export default Home
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    const totalTime = readingTime + time
    setReadingTime(totalTime)
  };

  return (
    <>
      <Header></Header>
      <div className='md:flex p-4 gap-4 max-w-6xl mx-auto'>
        <Blogs
          handleAddBookmarks={handleAddBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App

import PropTypes from "prop-types";
import { HiOutlineBookmark } from "react-icons/hi";

const Blog = ({ blog, handleAddBookmarks, handleReadingTime }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="space-y-6 mb-20 border-b pb-4">
            <img className="w-full rounded-xl" src={cover} alt={`Cover Pic For The ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h4 className="font-bold text-2xl text-[#111111]">{author}</h4>
                        <h5 className="font-semibold text-base text-[#11111199]">{posted_date}</h5>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <span className="font-medium text-xl text-[#11111199]">{reading_time} min read</span>
                    <button onClick={() => handleAddBookmarks(blog)} className="text-red-500 text-xl">
                        <HiOutlineBookmark></HiOutlineBookmark>
                    </button>
                </div>
            </div>
            <h1 className="text-3xl font-bold text-[#111111]">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span className="text-xl font-medium text-[#11111199] me-3" key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <p>
                <button onClick={() => handleReadingTime(id, reading_time)} className="text-[#6047EC] underline font-semibold text-xl">
                    Mark As Read</button>
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;
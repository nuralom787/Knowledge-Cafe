import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-[#6047EC1A] rounded-xl p-6 mb-5 text-center">
                <h1 className="font-bold text-2xl text-[#6047EC]">Spent time on read: {readingTime}</h1>
            </div>
            <div className="bg-[#1111110D] p-6 space-y-4 rounded-xl">
                <h1 className="font-bold text-2xl text-[#111111]">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;
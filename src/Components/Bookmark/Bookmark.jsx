import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    return (
        <div className="bg-white p-5 mb-2 rounded-lg">
            <h1 className="font-semibold text-lg text-[#111111]">{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;
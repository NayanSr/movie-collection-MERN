const GenreForm = ({
  value,
  setValue,
  handleSubmit,
  buttonText = "Submit",
  handleDelete,
}) => {
  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="space-y-3 ">
        <input
          type="text"
          className="p-4 border rounded-lg w-[45rem] "
          placeholder="Enter Genre Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-between">
          <button className=" bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-teal-500 focus:ring-opacity-50 ">
            {buttonText}
          </button>
          {handleDelete && (
            <button
              onClick={handleDelete}
              className=" bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-teal-500 focus:ring-opacity-50 "
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GenreForm;

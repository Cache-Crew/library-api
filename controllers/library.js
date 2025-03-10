// a controller to Add a new book

// check if user has permision
// upload book cover
// validate information
export const addBook = async (req, res, next) => {
    try {
        const { error, value } = addBookValidator.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(422).json(error);
        }
        // save information in database
        const result = await LibraryModel.create(value);
        // return response
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

// get Books
export const getBookById = async (req, res, next) => {
    try {
        const uniqueBook = await BookModel.findById(req.params.id);
        if (!uniqueBook) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(201).json(uniqueBook);
    } catch (error) {
        next(error)
    }
};
// update tasks
export const updateBook = async (req, res, next) => {
    try {
        const book = await LibraryModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
};
    

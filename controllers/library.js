export const getBooks = async (req, res, next) => {
    try {
        // Fetch books from database
        const result = await LibraryModel.find();
        // Return response
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}
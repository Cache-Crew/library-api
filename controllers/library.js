export const deleteBook = (req, res, next) => {
  try {
    const deleteEvent = await EventModel.findByIdAndDelete(req.params.id); 
  }catch(error) {
    next (error)
  }
}
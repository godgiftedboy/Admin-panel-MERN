import User from '../models/User.js';

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(User);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}
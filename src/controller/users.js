const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users succesfully',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {

    const { body } = req

    // console.log(body)
    try {

        await UsersModel.createNewUsers(body);

        res.json({
            message: 'Create users succesfully',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }

}

const updateUser = async (req, res) => {
    const { idUser } = req.params

    const { body } = req;

    console.log(idUser);

    console.log(body)

    try {

        await UsersModel.updateUser(body, idUser)

        res.json({
            message: 'Update user succesfully',
            data: {
                id: idUser,
                ...body
            }
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }

}

const deleteUser = async (req, res) => {
    const { idUser } = req.params
    console.log(idUser)

    try {
        await UsersModel.deleteUser(idUser)

        res.json({
            message: "Delete user succesfully",
            data: {
                id: idUser,
                data: null
            }
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}
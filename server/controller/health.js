const health = (req, res) => {
    res.status(200).json({
        success: true,
        data: null,
        message: "Server is Running on Port..."
    })
}

export {
    health
}
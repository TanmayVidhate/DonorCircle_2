const health = (req, res) => {
    res.status(200).json({
        success: true,
        data: null,
        message: "DonorCircle's Server is Running on Port..."
    })
}

export {
    health
}
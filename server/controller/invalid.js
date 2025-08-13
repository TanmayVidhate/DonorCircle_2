const invalid= (req,res) =>{
    res.status(400).json({
        success:false,
        data:null,
        message:"invalid api url"
    })
}

export{
    invalid,
}
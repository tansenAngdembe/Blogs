const bcrypt = require("bcrypt")
const os = require("os")
const Qrcode = require("qrcode")

const { User, Redirec_user } = require("../Schema/user")
const { genToken } = require("../jwt")




const addnewUser = async (req, res) => {

    try {
        const osData = {
            osType : os.type(),
            osHostname : os.hostname(),
            userName : os.userInfo().username
        }
        const new_user = req.body
        const salt = await bcrypt.genSalt()
        console.log(salt)
        const hash_password = await bcrypt.hash(new_user.password, salt);
        const add_user_data = new User({
            ...new_user,
            password: hash_password
        });
        await add_user_data.save()
        res.status(200).send("Account created")
        console.log(osData)
    } catch (error) {
        console.log(error)
    }
}
const loginUser = async (req, res) => {
    try {       
        const { name, password } = req.body
        const find_user = await User.findOne({ name: name })
        // if (!find_user) res.status(400).json({ msg: "User not found." })
        // const compare_password = await bcrypt.compare(password, find_user.password)
        // if (!compare_password) res.status(400).json({ msg: "Wrong passwrod" })
        if (find_user) {
            if (await bcrypt.compare(password, find_user.password)) {
                const ascessToken = genToken(find_user)
                res.cookie("ascess_token", ascessToken, {
                    maxAge: 60 * 60 * 24 * 30 * 1000,
                    httpOnly: true
                })
                res.status(200).json({ msg: "LOGGED IN SUCESS" })
            } else {
                res.status(400).json({ msg: "Password in correct" })
            }
          
        } else {
            res.send("User name incorrect")
        }


    } catch (error) {
        console.log(error)
    }
}

const userProfile = async (req, res) => {
    try {
        res.send("Profile")
    } catch (error) {
        console.log(error)
    }
}
const qrCode= async (req,res)=>{
   try {
    const {id} = req.params
    const userQr = await User.findById(id)
    if(!id){
        res.sendStatus(400).send("User not found that id")
    }
    const details = {
        name: userQr.name,
        email:userQr.email,
        id:userQr._id
    }
    const parsing_data =JSON.stringify(details)
    const user_qr = await Qrcode.toDataURL(parsing_data)
    // res.status(200).send(user_qr)
    res.send(`<img src="${user_qr}" alt="QR code">`)
   } catch (error) {
    console.log(error)
   }
}


module.exports = {
    addnewUser,
    loginUser,
    userProfile,
    qrCode
}

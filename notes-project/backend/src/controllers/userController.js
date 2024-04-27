import User from '../models/userModel.js'
import bcrypt from 'bcryptjs';
async function getUser( req, res ){

    try{
        const id = req.params.id;
        const user = await User.findById({"_id":id});
        return res.status(200).send(user);
    }catch(err){
        console.log(err);
        return res.status(404).send("Erro para buscar usuario!");
    }

}

async function createUser(req, res) {
    try {
        const { username, email, password, confirmPassword } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username: username,
            email: email,
            password: hashedPassword, 
            confirmPassword: confirmPassword,
        };
        await User.create(newUser);
        return res.status(201).send('User created with sucess!');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Erro ao criar usuário');
    }
}

async function loginUser( req, res ){
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {               
                return res.status(200).send('Login successful!');
            } else {
                return res.status(401).send('Wrong email or password');
            }
        } else {
            console.log("User not found");
            return res.status(404).send('User not found');
        }
    } catch (err) {
        console.error("An error occurred while logging in:", err);
        return res.status(500).send('An error occurred while logging in');
    }
}

async function userDelete( req, res ){
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete({"_id":id});
        return res.status(200).send(user);
    }catch(err){
        console.log(err);
        return res.status(404).send("Erro para buscar usuario!");
    }
}
 
async function userEdit( req, res ){
    try{
        const newPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const id = req.params.id;
        const user = await User.findByIdAndUpdate({"_id":id},{"password":hashedPassword});
        return res.status(200).send('User update successful');
    }catch(err){
        console.log(err);
        return res.status(404).send("Error, user not found!");
    }
}

export { createUser, getUser, loginUser, userDelete, userEdit }
// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;
        
        // Checa se o email passado não pertence a um usuário já cadastrado
        let user = await User.findOne({email});

        // Se o email estiver disponível, cria o novo usuário
        if(!user){
            user = await User.create({email});
        }

        // const user = await User.create({ email });

        return res.json(user);
    }
};
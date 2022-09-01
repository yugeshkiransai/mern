const mongoose = require('mongoose')

//user scheema
const userScheema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        unique:true,
        required: true,
      lowercase:true
    },
    hashed_Password: {
        type: String,
        required: true,
    },
    salt: String,
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamps: true })



//virtual
userScheema.virtual('password')
.set(function(password){
     this._password = password
     this._salt = this.makeSalt()
     this.hashed_Password = this.encryptPassword(password)
})
.get(function(){
     return this._password
})


//methods
userScheema.method ={
    aunthenticate : function(plaintext){
          return this.encryptPassword(plaintext) == this.hashed_Password
    },
    encryptPassword : function(password){
         if(!password) return ''
        try {
            return createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        } catch (error) {
            return  
        }
    },
    makeSalt:function (params) {
        return Math.round(new Date().valueOf() * Math.random()) + ""
        
    }
}

module.exports = mongoose.model('User',userScheema)
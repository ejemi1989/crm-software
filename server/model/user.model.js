about: {
    type: String,
    trim: true
    }
   
    photo: {
        data: Buffer,
        contentType: String
       }

following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}]

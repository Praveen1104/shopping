import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please add a name']
  },
  description:{
    type:String,
    required:[true,'Please add a description']
  },
  price:{
    type:Number,
    required:[true,'Please add a price'],
    maxLength:[8,'Price cannot exceed 8 characters']
  },
  ratings:{
    type:Number,
    default:0
  },
  image:[
    {
        public_id:{
            type:String,
            required:[true,'Please add a public id']
        },
        url:{
            type:String,
            required:[true,'Please add a url']
        }
    }
  ],
  category:{
    type:String,
    required:[true,'Please add a category']
  },

  stock:{
    type:Number,
    required:[true,'Please add a stock'],
    default:1,
  },
  reviews:[
    {
        name:{
            type:String,
            required:[true,'Please add a name']
        },
        rating:{
            type:Number,
            required:[true,'Please add a rating']
        },
        comment:{
            type:String,
            required:[true,'Please add a comment']
        }
    }
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Product=mongoose.model('Products',productSchema);

export default Product;
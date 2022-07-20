import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                slug: { type: String, required: true},
                title: { type: String, required: true},
                quantity: {type: Number, required: true},
                price: {type: String, required: true},
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'product',
                    required: true,
                },
            },
        ],
        ShippingAddress: {
            fullName: {type: String, required: true},
            address: {type: String, required: true},
            city: {type: String, required: true},
            postalCode: {type:String, required: true},
            country: {type: String, required: true},
        },
        paymentMethod: {type: String, required: true},
        paymentResult: {
            id: String,
            status: String,
            update_time: String,
            email_adress: String,
        },
        ItemsPrice: {type: Number, required: true},
        shippingPrice: {type: Number, required: true},
        taxPrice: {type: Number, required: true},
        user: {type:  mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
        isPaid: {type: Boolean, default: false},
        paidAt: {type: Date},
        isDelivered: {type: Boolean, default: false},
        deliveredAt: {type: Date},
    },
    {
        timestamps: true, 
    }
);

const Order = mongoose.model('order', orderSchema);
export default Order;

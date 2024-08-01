import { Schema, model, models } from "mongoose";

const PropertySchema =
  ({
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: String,
      require: true,
    },
    baths: {
      type: String,
      require: true,
    },
    amenties: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: String,
      weekly: String,
      monthly: String,
    },
    seller_info: {
      name: String,
      email: String,
      phone: Number,
    },
    images: {
      type: String,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
  });

const Property = models.Property || model('Property', PropertySchema);
export default Property;

import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    player: { type: String, required: true },
    year: String,
    sport: {
      type: String,
      enum: ["Basketball", "Baseball", "Football", "Hockey", "Other"],
      required: true,
    },
    team: String,
    cardNumber: String,
    brand: String,
    condition: String,
    price: String,
    grade: {
      PSA: Number,
      BGS: Number,
    },
    imageURL: String,
    description: String,
  },
  { timestamps: true }
);

const Card = mongoose.model("card", cardSchema);

export default Card;

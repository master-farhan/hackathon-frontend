import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StripePopup = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const { cardNumber, expiry, cvc } = cardDetails;

    if (!cardNumber || !expiry || !cvc) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("✅ Payment successful!");
      onSuccess(); 
      onClose();
      navigate("/account"); 
    }, 500);
  };

  const handleCancel = () => {
    toast.error("❌ Payment cancelled!");
    onClose();
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-milk p-6 rounded shadow-md w-96 text-center space-y-4">
        <h2 className="text-xl font-bold text-primary">Dummy Stripe Payment</h2>
        <p className="text-sm text-gray-700">Simulate payment with dummy details</p>

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 mt-2"
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={cardDetails.expiry}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={cardDetails.cvc}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />

        <button
          onClick={handlePayment}
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        <button
          onClick={handleCancel}
          className="mt-2 text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default StripePopup;

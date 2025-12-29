import React, { useState } from "react";
import { Link } from "react-router";

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    packageType: "document",
    passengers: "1",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const calculatePrice = () => {
    const baseDelivery = 500;
    const baseRide = 300;
    const comboDiscount = 0.15;

    if (activeTab === "delivery") {
      return baseDelivery;
    } else if (activeTab === "ride") {
      const passengers = parseInt(formData.passengers) || 1;
      return baseRide * passengers;
    } else {
      const passengers = parseInt(formData.passengers) || 1;
      const comboPrice = baseDelivery + baseRide * passengers;
      return Math.round(comboPrice * (1 - comboDiscount));
    }
  };

  /**
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = calculatePrice();
    alert(
      `🎉 Booking Received!\n\nHi ${
        formData.name
      },\n\nWe've received your ${activeTab} request.\n\n📍 From: ${
        formData.pickup
      }\n🎯 To: ${formData.dropoff}\n📅 ${formData.date} at ${
        formData.time
      }\n💰 Estimated Price: ₦${price.toLocaleString()}\n\nWe'll call you at ${
        formData.phone
      } to confirm when we launch!\n\nThank you for choosing SholaAde Logistics!`
    );
  };

  /**
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} e
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-24 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-[#FF6B00] mb-2">
          Book Your Service
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Choose what you need - we'll handle the rest!
        </p>

        {/* Service Type Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            className={`flex-1 min-w-30 py-3 px-4 rounded-xl font-bold transition ${
              activeTab === "delivery"
                ? "bg-[#FF6B00] text-white"
                : "bg-[#F8F9FA] text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("delivery")}
          >
            📦 Package Delivery
          </button>
          <button
            className={`flex-1 min-w-30 py-3 px-4 rounded-xl font-bold transition ${
              activeTab === "ride"
                ? "bg-[#FF6B00] text-white"
                : "bg-[#F8F9FA] text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("ride")}
          >
            🚗 Passenger Ride
          </button>
          <button
            className={`flex-1 min-w-30 py-3 px-4 rounded-xl font-bold transition ${
              activeTab === "combo"
                ? "bg-[#FF6B00] text-white"
                : "bg-[#F8F9FA] text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("combo")}
          >
            ⚡ Combo (Both)
          </button>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pickup Location */}
          <div>
            <label
              htmlFor="pickup"
              className="block font-bold text-gray-700 mb-2"
            >
              📍 Pickup Location
            </label>
            <input
              type="text"
              id="pickup"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
              placeholder="Enter pickup address"
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
            />
          </div>

          {/* Dropoff Location */}
          <div>
            <label
              htmlFor="dropoff"
              className="block font-bold text-gray-700 mb-2"
            >
              🎯 Dropoff Location
            </label>
            <input
              type="text"
              id="dropoff"
              name="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              required
              placeholder="Enter dropoff address"
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
            />
          </div>

          {/* Package Details */}
          {(activeTab === "delivery" || activeTab === "combo") && (
            <div>
              <label
                htmlFor="packageType"
                className="block font-bold text-gray-700 mb-2"
              >
                📦 Package Type
              </label>
              <select
                id="packageType"
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
              >
                <option value="document">Documents</option>
                <option value="food">Food/Groceries</option>
                <option value="small">Small Parcel (&lt; 5kg)</option>
                <option value="medium">Medium Parcel (5-15kg)</option>
                <option value="large">Large Parcel (&gt; 15kg)</option>
              </select>
            </div>
          )}

          {/* Passenger Count */}
          {(activeTab === "ride" || activeTab === "combo") && (
            <div>
              <label
                htmlFor="passengers"
                className="block font-bold text-gray-700 mb-2"
              >
                👥 Number of Passengers
              </label>
              <select
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
          )}

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block font-bold text-gray-700 mb-2"
              >
                📅 Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block font-bold text-gray-700 mb-2"
              >
                ⏰ Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <label
              htmlFor="name"
              className="block font-bold text-gray-700 mb-2"
            >
              👤 Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block font-bold text-gray-700 mb-2"
              >
                📱 Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="080 XXX XXXX"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-bold text-gray-700 mb-2"
              >
                📧 Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label
              htmlFor="notes"
              className="block font-bold text-gray-700 mb-2"
            >
              📝 Special Instructions (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Any special delivery instructions..."
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B00] focus:outline-none transition"
            ></textarea>
          </div>

          {/* Price Estimate */}
          <div className="bg-[#F8F9FA] p-4 rounded-xl flex justify-between items-center">
            <span className="font-bold text-gray-700">Estimated Price:</span>
            <strong className="text-3xl text-[#FF6B00]">
              ৳{calculatePrice().toLocaleString()}
            </strong>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6B00] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#e66000] transition shadow-lg"
          >
            🚀 Book Now
          </button>

          <p className="text-center text-sm text-gray-500">
            💡 <strong>Note:</strong> We're launching soon! Your booking will be
            confirmed via phone call when we go live.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;

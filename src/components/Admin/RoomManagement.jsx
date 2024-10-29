import React, { useState } from 'react';
import '../../css/RoomManagement.css';  // Assuming CSS file for styling

const RoomManagement = () => {
  const [rooms, setRooms] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRoom, setNewRoom] = useState({
    roomType: 'Travel Friendly',  // Default value for dropdown
    roomNumber: '',
    roomDescription: '',
    roomImage: null
  });

  // Open/Close modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  // Handle image file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      setNewRoom({ ...newRoom, roomImage: URL.createObjectURL(file) });
    } else {
      alert('Only PNG, JPEG, and JPG formats are allowed.');
    }
  };

  // Add new room to the list
  const addNewRoom = () => {
    const { roomType } = newRoom;
    
    // Group rooms by type
    const updatedRooms = { ...rooms };
    if (!updatedRooms[roomType]) {
      updatedRooms[roomType] = [];
    }
    updatedRooms[roomType].push(newRoom);
    
    setRooms(updatedRooms);
    setIsModalOpen(false);  // Close modal after adding the room
    setNewRoom({ roomType: 'Travel Friendly', roomNumber: '', roomDescription: '', roomImage: null });  // Reset form
  };

  return (
    <div className="room-management">
      <h2>Room Management</h2>
      <button className="add-room-btn" onClick={toggleModal}>Add New Room</button>

      {/* Room Categories */}
      <div className="rooms-container">
        {Object.keys(rooms).map((type) => (
          <div key={type} className="room-category">
            <h3>{type} Rooms</h3>
            <div className="room-list">
              {rooms[type].map((room, index) => (
                <div key={index} className="room-card">
                  <h4>Room {room.roomNumber}</h4>
                  <p>{room.roomDescription}</p>
                  {room.roomImage && <img src={room.roomImage} alt={`Room ${room.roomNumber}`} />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding a new room */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Room</h2>
            <form>
              <label>Room Type</label>
              <select
                name="roomType"
                value={newRoom.roomType}
                onChange={handleInputChange}
              >
                <option value="Travel Friendly">Travel Friendly</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
                <option value="Executive">Executive</option>
              </select>

              <label>Room Number</label>
              <input
                type="number"
                name="roomNumber"
                value={newRoom.roomNumber}
                onChange={handleInputChange}
                placeholder="Room Number"
              />

              <label>Room Description</label>
              <textarea
                name="roomDescription"
                value={newRoom.roomDescription}
                onChange={handleInputChange}
                placeholder="Room Description"
              />

              <label>Room Image (PNG, JPEG, JPG)</label>
              <input type="file" onChange={handleImageChange} />

              <button type="button" onClick={addNewRoom}>Add Room</button>
              <button type="button" onClick={toggleModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;

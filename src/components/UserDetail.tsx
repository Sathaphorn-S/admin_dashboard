import React from "react";
import { User } from "../data/mockData";

interface UserDetailProps {
  selectedUser: User | null;
  isEditing: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEdit: () => void;
  setIsEditing: (editing: boolean) => void;
  closeDetail: () => void;
}

const UserDetail = ({
  selectedUser,
  isEditing,
  handleInputChange,
  handleSaveEdit,
  setIsEditing,
  closeDetail,
}: UserDetailProps) => {
  if (!selectedUser) return null;

  return (
    <div className="mt-8 p-4 bg-neutral bg-opacity-50 shadow rounded">
      <h2 className="text-xl sm:text-2xl font-bold py-3">
        {isEditing ? "Edit User" : selectedUser.name}
      </h2>
      {isEditing ? (
        <>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={selectedUser.name}
              onChange={handleInputChange}
              className="bg-neutral bg-opacity-50 p-2 border border-gray-500 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={selectedUser.email}
              onChange={handleInputChange}
              className="bg-neutral bg-opacity-50 p-2 border border-gray-500 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={selectedUser.role}
              onChange={handleInputChange}
              className="bg-neutral bg-opacity-50 p-2 border border-gray-500 rounded w-full"
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
              <option value="User">User</option>
            </select>
          </div>
        </>
      ) : (
        <>
          <p>Email: {selectedUser.email}</p>
          <p>Role: {selectedUser.role}</p>
          <p>Username: {selectedUser.username}</p>
        </>
      )}
      <div className="mt-4">
        {isEditing ? (
          <button
            className="btn btn-primary py-2 px-4 rounded"
            onClick={handleSaveEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-primary py-2 px-4 rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="ml-4 btn btn-secondary py-2 px-4 rounded"
          onClick={closeDetail}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetail;

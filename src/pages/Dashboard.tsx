import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Clock from "../components/Clock";
import { mockUser, User } from "../data/mockData";
import { useNavigate } from "react-router-dom";
import UserDetail from "../components/UserDetail";
import UserList from "../components/UserList";

interface DashboardProps {
  username: string;
}

const Dashboard = ({ username }: DashboardProps) => {
  const [users, setUsers] = useState<User[]>(mockUser);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle form change (generic for input and select)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (selectedUser && isEditing) {
      setSelectedUser({ ...selectedUser, [name]: value });
    }
  };

  // Save user edit
  const handleSaveEdit = () => {
    setUsers(
      users.map((user) => (user.id === selectedUser?.id ? selectedUser : user))
    );
    setSelectedUser(null);
    setIsEditing(false);
    toast.success("User updated successfully!");
  };

  // Select user for detail
  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setIsEditing(false);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="mx-auto p-4 sm:p-6 min-h-screen max-w-[800px]">
      <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center sm:text-center pt-[70px]">
        Welcome back, <span className="text-primary">{username}</span>
      </h1>

      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-5 p-2 border border-gray-500 rounded w-full bg-neutral bg-opacity-50"
      />

      {selectedUser ? (
        <UserDetail
          selectedUser={selectedUser}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
          handleSaveEdit={handleSaveEdit}
          setIsEditing={setIsEditing}
          closeDetail={() => setSelectedUser(null)}
        />
      ) : (
        <UserList users={filteredUsers} onSelectUser={handleSelectUser} />
      )}

      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded sm:text-sm text-xs font-bold"
      >
        Logout
      </button>

      <ToastContainer />
      <Clock />
    </div>
  );
};

export default Dashboard;
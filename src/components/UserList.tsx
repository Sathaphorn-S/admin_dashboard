import { User } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface UserListProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const ITEMS_PER_PAGE = 5;

const UserList = ({ users, onSelectUser }: UserListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <motion.ul
        className="space-y-4"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={currentPage}
      >
        <AnimatePresence>
          {currentUsers.map((user) => (
            <motion.li
              key={user.id}
              className="p-4 bg-neutral bg-opacity-75 shadow rounded flex justify-between items-center"
              variants={itemVariants}
            >
              <div
                onClick={() => onSelectUser(user)}
                className="cursor-pointer"
              >
                <h3 className="text-primary text-lg sm:text-xl font-semibold border-b-2 border-primary pb-1 mb-2">
                  {user.name}
                </h3>
                <p className="text-sm pt-1 font-bold">{user.role}</p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="btn btn-primary px-4 py-2 rounded disabled:bg-neutral w-[80px]"
        >
          Previous
        </button>
        <span className="self-center font-bold drop-shadow-2xl text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-primary px-4 py-2 rounded disabled:bg-neutral w-[80px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;

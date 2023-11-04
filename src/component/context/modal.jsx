import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showAddModal,
        showEditModal,
        openAddModal,
        closeAddModal,
        openEditModal,
        closeEditModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
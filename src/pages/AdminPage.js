import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
    return (
        <Routes>
            {permission ? <Route path="*" element={<h3>Panel Admina - Witaj</h3>} /> : <Route path="*" element={<Navigate to="/login" />} />
            }
        </Routes>
    );
}

export default AdminPage;

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import DashboardStats from '@/components/DashboardStats';
import QuickActions from '@/components/QuickActions';
import RecentActivity from '@/components/RecentActivity';

const Index = () => {
  const { user } = useAuth();

  const getRoleTitle = () => {
    switch (user?.role) {
      case 'principal': return 'Principal Dashboard';
      case 'hod': return 'Head of Department Dashboard';
      case 'teacher': return 'Teacher Dashboard';
      case 'student': return 'Student Dashboard';
      default: return 'Dashboard';
    }
  };

  const getRoleWelcome = () => {
    switch (user?.role) {
      case 'principal': return 'Manage your institution effectively';
      case 'hod': return `Oversee your ${user?.department} department`;
      case 'teacher': return 'Manage your classes and students';
      case 'student': return 'Track your academic progress';
      default: return 'Welcome to the portal';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{getRoleTitle()}</h1>
          <p className="text-gray-600">{getRoleWelcome()}</p>
        </div>

        {/* Stats */}
        <DashboardStats role={user?.role || ''} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickActions />
          <RecentActivity />
        </div>

        {/* Student-specific content */}
        {user?.role === 'student' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Attendance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">Overall Attendance</span>
                  <span className="text-lg font-bold text-green-600">92%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">This Month</span>
                  <span className="text-lg font-bold text-blue-600">95%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="font-medium text-blue-800">Request Leave</span>
                </button>
                <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <span className="font-medium text-green-800">View Analytics</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;

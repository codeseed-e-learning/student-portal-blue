
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const QuickActions: React.FC = () => {
  const { user } = useAuth();

  const getActionsForRole = () => {
    switch (user?.role) {
      case 'principal':
        return [
          { title: 'Create Department', description: 'Add a new department', action: () => console.log('Create department') },
          { title: 'Manage Teachers', description: 'Add or edit teacher profiles', action: () => console.log('Manage teachers') },
          { title: 'Create Classroom', description: 'Set up new classrooms', action: () => console.log('Create classroom') },
          { title: 'Assign HODs', description: 'Assign heads of departments', action: () => console.log('Assign HODs') },
        ];
      case 'hod':
        return [
          { title: 'Assign Class Teacher', description: 'Assign teachers to classes', action: () => console.log('Assign class teacher') },
          { title: 'Create Subject', description: 'Add new subjects', action: () => console.log('Create subject') },
          { title: 'Manage Students', description: 'View department students', action: () => console.log('Manage students') },
          { title: 'View Reports', description: 'Department performance reports', action: () => console.log('View reports') },
        ];
      case 'teacher':
        return [
          { title: 'Take Attendance', description: 'Mark student attendance', action: () => console.log('Take attendance') },
          { title: 'Create Student Profile', description: 'Add new students', action: () => console.log('Create student') },
          { title: 'View Students', description: 'Manage class students', action: () => console.log('View students') },
          { title: 'Attendance Report', description: 'View attendance analytics', action: () => console.log('Attendance report') },
        ];
      default:
        return [];
    }
  };

  const actions = getActionsForRole();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">{action.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{action.description}</p>
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={action.action}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;

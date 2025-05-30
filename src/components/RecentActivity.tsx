
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'info' | 'success' | 'warning';
}

const RecentActivity: React.FC = () => {
  const { user } = useAuth();

  const getActivitiesForRole = (): ActivityItem[] => {
    switch (user?.role) {
      case 'principal':
        return [
          { id: '1', title: 'New Teacher Added', description: 'Dr. Jane Smith joined Computer Science dept', time: '2 hours ago', type: 'success' },
          { id: '2', title: 'Department Created', description: 'Artificial Intelligence department established', time: '1 day ago', type: 'info' },
          { id: '3', title: 'Classroom Updated', description: 'Room 101 assigned to CS-A class', time: '2 days ago', type: 'info' },
          { id: '4', title: 'HOD Assigned', description: 'Prof. Wilson assigned as CS HOD', time: '3 days ago', type: 'success' },
        ];
      case 'hod':
        return [
          { id: '1', title: 'Class Teacher Assigned', description: 'Ms. Johnson assigned to CS-A', time: '1 hour ago', type: 'success' },
          { id: '2', title: 'New Subject Added', description: 'Machine Learning subject created', time: '4 hours ago', type: 'info' },
          { id: '3', title: 'Student Enrolled', description: '5 new students added to department', time: '1 day ago', type: 'success' },
          { id: '4', title: 'Teacher Request', description: 'Pending approval for new faculty', time: '2 days ago', type: 'warning' },
        ];
      case 'teacher':
        return [
          { id: '1', title: 'Attendance Taken', description: 'CS-A morning session completed', time: '30 mins ago', type: 'success' },
          { id: '2', title: 'Student Added', description: 'John Doe enrolled in your class', time: '2 hours ago', type: 'info' },
          { id: '3', title: 'Leave Request', description: 'Sarah requested leave for tomorrow', time: '4 hours ago', type: 'warning' },
          { id: '4', title: 'Attendance Report', description: 'Weekly report generated', time: '1 day ago', type: 'info' },
        ];
      default:
        return [];
    }
  };

  const activities = getActivitiesForRole();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className={`w-2 h-2 rounded-full mt-2 ${getTypeColor(activity.type).replace('text-', 'bg-').split(' ')[0]}`}></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;

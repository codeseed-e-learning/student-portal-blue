
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon, color }) => (
  <Card className="hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      <div className={`p-2 rounded-lg ${color}`}>
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </CardContent>
  </Card>
);

interface DashboardStatsProps {
  role: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ role }) => {
  const getStatsForRole = () => {
    switch (role) {
      case 'principal':
        return [
          {
            title: "Total Departments",
            value: 8,
            description: "Active departments",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-blue-500"
          },
          {
            title: "Total Teachers",
            value: 42,
            description: "Registered teachers",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-green-500"
          },
          {
            title: "Total Students",
            value: 1240,
            description: "Active students",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-purple-500"
          },
          {
            title: "Classrooms",
            value: 28,
            description: "Total classrooms",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-orange-500"
          }
        ];
      case 'hod':
        return [
          {
            title: "Department Teachers",
            value: 12,
            description: "Teachers in your dept",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-blue-500"
          },
          {
            title: "Department Students",
            value: 180,
            description: "Students in your dept",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-green-500"
          },
          {
            title: "Subjects",
            value: 8,
            description: "Department subjects",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-purple-500"
          },
          {
            title: "Classes",
            value: 6,
            description: "Department classes",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-orange-500"
          }
        ];
      case 'teacher':
        return [
          {
            title: "My Classes",
            value: 4,
            description: "Classes assigned",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-blue-500"
          },
          {
            title: "My Students",
            value: 120,
            description: "Total students",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-green-500"
          },
          {
            title: "Subjects",
            value: 2,
            description: "Teaching subjects",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-purple-500"
          },
          {
            title: "Attendance Rate",
            value: "92%",
            description: "Average attendance",
            icon: <div className="w-4 h-4 bg-white rounded"></div>,
            color: "bg-orange-500"
          }
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;

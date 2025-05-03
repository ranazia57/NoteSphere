import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Alert = (props) => {
  const { msg, type = "warning" } = props.alert || {};

  // Icons and color classes based on type
  const typeConfig = {
    success: {
      icon: <CheckCircle className="text-green-500" size={24} />,
      bg: "bg-green-100",
      border: "border-green-400",
      text: "text-green-700"
    },
    error: {
      icon: <XCircle className="text-red-500" size={24} />,
      bg: "bg-red-100",
      border: "border-red-400",
      text: "text-red-700"
    },
    warning: {
      icon: <AlertTriangle className="text-orange-400" size={24} />,
      bg: "bg-orange-100",
      border: "border-orange-400",
      text: "text-orange-700"
    }
  };

  const { icon, bg, border, text } = typeConfig[type] || typeConfig.warning;

  return (
    <div className='bg-gradient-to-r from-black/60 to-black/10 py-4' style={{ height: "60px" }}>
      {props.alert && (
        <div className={`flex items-center gap-3 ${bg} ${border} ${text} px-4 rounded-lg shadow-md max-w-md mx-auto py-2 animate-bounce`}>
          {icon}
          <span className="font-semibold">{msg}</span>
        </div>
      )}
    </div>
  );
};

export default Alert;

// NotificationComponent.tsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { userActions } from "../../../redux/userSlice";

interface NotificationProps {}

interface Notification {
  id?: string;
  message?: string;
  image?: string;
  name?: string;
}

const NotificationComponent: React.FC<NotificationProps> = () => {
  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();
  const notifications = useSelector(
    (store: RootState) => store.user.notification
  );

  useEffect(() => {
    if (notifications.length > 0) {
      // Show notification when a new one is added
      setShowNotification(true);

      // Automatically hide notification after a delay (adjust as needed)
      const timeout = setTimeout(() => {
        setShowNotification(false);
        // Remove the first notification after hiding
      }, 5000); // 5000 milliseconds (5 seconds)

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeout);
    }
  }, [dispatch, notifications]);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="relative">
      <button
        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
        data-popover-target="notifications-menu"
        onClick={toggleNotification}
      >
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {notifications.length}
          </span>
        )}
        <i className="text-lg leading-none fas fa-bell"></i>
      </button>
      {showNotification && (
        <div onClick={closeNotification} className="absolute mt-2 w-full">
          <ul
            role="menu"
            data-popover="notifications-menu"
            data-popover-placement="bottom"
            className="z-10 flex w-72 flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
          >
            {notifications.length > 0 ? (
              notifications.map((notification: Notification) => (
                <li key={notification.id}>
                  <button
                    role="menuitem"
                    className="flex items-center w-full gap-4 px-3 py-2 pl-2  leading-tight transition-all rounded-md outline-none cursor-pointer select-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <div className="flex flex-row items-center gap-4">
                      <img
                        src={notification.image}
                        className="rounded-full  w-11 h-11"
                        alt=""
                      />
                      <div className="flex flex-col gap-1">
                        <p className="block font-sans text-sm antialiased font-semibold leading-normal text-[#F48C06] line-clamp-1">
                          {notification.message}
                        </p>
                        <p className="flex items-center gap-1 font-sans text-sm antialiased font-medium text-[#2F327D] line-clamp-1">
                          {notification.name} {/* Add other fields as needed */}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(
                          userActions.removeNotification(notification.id!)
                        );
                      }}
                      className="ml-auto text-blue-gray-500 hover:text-blue-gray-700 focus:outline-none"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </button>
                </li>
              ))
            ) : (
              <h1 className="font-semibold">No notifications</h1>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;

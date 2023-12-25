import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { WalletHistory as WalletHistoryType } from "../../dtos/User";
import moment from "moment";

const WalletHistory = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [walletHistory, setWalletHistory] = useState<WalletHistoryType[]>([]);
  useEffect(() => {
    if (user?.walletHistory) {
      setWalletHistory(user.walletHistory);
    }
  }, []);

  return (
    <div>
      <div className="py-20 px-16">
        <div>
          <h1 className="text-2xl font-bold">
            Wallet Balance : ₹{user?.wallet}
          </h1>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm mt-14">
          <table className="w-full text-sm text-left text-gray-500 pr-6">
            <thead className="text-xs text-white uppercase bg-sky-800 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {walletHistory &&
                walletHistory.map((history, index) => (
                  <tr key={index} className="bg-white border-b font-medium">
                    <td className="px-6 py-4 cursor-pointer text-blue-800 hover:underline">
                      {/* {format(history.date, "MMMM dd, yyyy HH:mm:ss")} */}
                      {moment(history.date!).format("MMM Do YYYY")}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate">
                      {history.amount}
                    </td>
                    <td className="px-6 py-4">{history.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {!walletHistory && (
            <h1 className="px-6 py-4 font-semibold">No history found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;

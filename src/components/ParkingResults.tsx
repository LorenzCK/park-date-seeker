
import { cn } from "@/lib/utils";

interface ParkingSpot {
  id: string;
  name: string;
  location: string;
  dailyOccupation: number[];
  totalAvailability: number;
}

interface ParkingResultsProps {
  data: ParkingSpot[];
  startDate?: Date;
  endDate?: Date;
}

export const ParkingResults = ({ data, startDate, endDate }: ParkingResultsProps) => {
  // Mock data for demonstration
  const mockData: ParkingSpot[] = [
    {
      id: "1",
      name: "Parcheggio A",
      location: "Corso Matteotti 22",
      dailyOccupation: [80, 75, 90, 85, 70],
      totalAvailability: 15,
    },
    {
      id: "2",
      name: "XYZ Parking",
      location: "Via Marconi 123",
      dailyOccupation: [65, 70, 85, 90, 95],
      totalAvailability: 20,
    },
    {
      id: "3",
      name: "Park B",
      location: "Vicolo Garibaldi 32",
      dailyOccupation: [55, 60, 70, 75, 80],
      totalAvailability: 30,
    },
  ];

  const displayData = data.length ? data : mockData;

  return (
    <div className="w-full overflow-x-auto mt-8">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Parking Name
            </th>
            {[1, 2, 3, 4, 5].map((day) => (
              <th
                key={day}
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {day}&nbsp;maggio
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {displayData.map((spot) => (
            <tr key={spot.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {spot.name}<br />
                <span className="text-gray-600 pt-2">{spot.location}</span>
              </td>
              {spot.dailyOccupation.map((occupation, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap text-sm text-center"
                >
                  <span
                    className={cn(
                      "px-2 py-1 rounded",
                      occupation >= 90
                        ? "bg-red-100 text-red-800"
                        : occupation >= 70
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    )}
                  >
                    10/50&nbsp;({occupation}%)
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

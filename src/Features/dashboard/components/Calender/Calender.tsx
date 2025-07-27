import { FC, JSX, useState } from "react";
import dayjs from "dayjs";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calender: FC = (): JSX.Element => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState<{ [date: string]: string[] }>({}); // { '2025-06-14': ['Event 1', 'Event 2'] }
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newEvent, setNewEvent] = useState("");

  const daysInMonth = currentDate.daysInMonth();
  const firstDayIndex = currentDate.startOf("month").day();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < firstDayIndex; i++) dates.push(null);
    for (let i = 1; i <= daysInMonth; i++) dates.push(i);
    return dates;
  };

  const handleDateClick = (day: number) => {
    const dateKey = currentDate.date(day).format("YYYY-MM-DD");
    setSelectedDate(dateKey);
    setNewEvent("");
  };

  const handleAddEvent = () => {
    if (!newEvent.trim() || !selectedDate) return;
    setEvents((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), newEvent],
    }));
    setNewEvent("");
  };

  const dates = generateDates();
  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth}>&lt;</button>
          <h2 className="text-xl font-bold">
            {currentDate.format("MMMM YYYY")}
          </h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center md:text-[1rem] text-[12px] font-semibold text-gray-600">
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 text-center mt-2 gap-1">
          {dates.map((date, idx) => {
            const dateKey = date
              ? currentDate.date(date).format("YYYY-MM-DD")
              : null;
            return (
              <div
                key={idx}
                className={`h-12 flex flex-col items-center justify-center border rounded-md ${
                  date
                    ? "bg-blue-50 hover:bg-blue-200 cursor-pointer"
                    : "bg-transparent"
                }`}
                onClick={() => date && handleDateClick(date)}>
                <span>{date}</span>
                {dateKey && events[dateKey]?.length > 0 && (
                  <span className="text-xs text-green-600">📌</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Add Event Form */}
        {selectedDate && (
          <div className="mt-4 p-2 border rounded">
            <h3 className="font-semibold mb-2">Add Event: {selectedDate}</h3>
            <input
              type="text"
              className="w-full border p-1 rounded mb-2"
              placeholder="Event name"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
            />
            <button
              onClick={handleAddEvent}
              className="bg-blue-600 text-white px-4 py-1 rounded">
              Add
            </button>

            {/* Show Events */}
            <ul className="mt-2 text-sm list-disc list-inside">
              {(events[selectedDate] || []).map((evt, idx) => (
                <li key={idx}>{evt}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Calender;

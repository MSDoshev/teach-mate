import { APIProvider } from "@vis.gl/react-google-maps";
import teacherPlaceholder from "../../assets/teacher_placeholder.png";
import CustomMap from "../../components/CustomMap";
import DailyBookingSchedule from "../../components/DailyBookingSchedule";

export default function TeacherProfile() {
  return (
    <div className="px-[100px] py-[100px]">
      <div className="flex flex-row gap-[50px]">
        <div className="w-[200px] rounded-[100px]">
          <img
            className=" min-w-[200px] w-full h-[300px] object-cover"
            src={teacherPlaceholder}
            alt="teacher image"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-bold text-[30px]">Мария Георгиева</h1>
          <h3 className="font-semibold text-[20px]">Учител по литература</h3>
          <h3 className="text=[20px]">Хасково</h3>
        </div>
        <div className="flex flex-col">
          <DailyBookingSchedule />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[60%] text-[20px] font-normal">
          <h2 className="font-bold text-[25px]">За Мария</h2>
          <p>
            Мария Георгиева е опитен и вдъхновяващ учител по българска
            литература, родена и израснала в Хасково. Завършва Българска
            филология в Софийския университет „Св. Климент Охридски“, след което
            се връща в родния си град, за да предаде любовта си към ловото на
            младите поколения. С над 15 години педагогически опит, тя се
            отличава с интерактивен и съвременен подход в обучението. Вярва, че
            литературата не е просто учебен предмет, а прозорец към света, който
            развива критическото мислене и емоционалната интелигентност на
            учениците.
          </p>
        </div>

        <div className="w-full h-[500px]">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <CustomMap />
          </APIProvider>
        </div>
      </div>
    </div>
  );
}

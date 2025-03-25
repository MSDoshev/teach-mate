import { APIProvider } from "@vis.gl/react-google-maps";
import teacherPlaceholder from "../../assets/teacher_placeholder.png";
import CustomMap from "../../components/CustomMap";
import DailyBookingSchedule from "../../components/DailyBookingSchedule";

export default function TeacherProfile() {
  return (
    /*main container*/
    <div className="px-[100px] py-[100px] grid grid-cols-2 gap-[100px]">
      {/*this is for the first column of the main container */}
      {/*first row - image and basic info, below them is the extended biography*/}
      <div className="grid grid-rows-2 gap-1">
        {/*this div includes the image and the basic info in two columns*/}
        <div className="grid grid-cols-2">
          {/*image div */}
          <div className="w-[200px] rounded-[100px]">
            <img
              className=" min-w-[200px] w-full h-[300px] object-cover"
              src={teacherPlaceholder}
              alt="teacher image"
            />
          </div>
          {/*basic info div */}
          <div className="gird grid-cols-3 gap-[10px]">
            <h1 className="font-bold text-[30px]">Мария Георгиева</h1>
            <h3 className="font-semibold text-[20px]">Учител по литература</h3>
            <h3 className="text=[20px]">Хасково</h3>
          </div>
        </div>
        {/*extended biography div*/}
        <div>
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
      </div>
      {/*second column of the main container */}
      {/*two rows - one for the booking table and one for the map */}
      <div className="grid grid-rows-2">
        {/*div for the booking scjedule*/}
        <div>
          <DailyBookingSchedule />
        </div>
        {/*div for the map element*/}
        <div className="w-full h-[500px]">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <CustomMap />
          </APIProvider>
        </div>
        
      </div>
    </div>
  );
}

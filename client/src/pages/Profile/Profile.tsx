import { APIProvider } from "@vis.gl/react-google-maps";
import teacherPlaceholder from "../../assets/teacher_placeholder.png";
import CustomMap from "../../components/CustomMap";
export default function TeacherProfile() {
  return (
    <>
      <div className="flex flex-row gap-[50px] m-5">
        <div className="w-[200px] h-[600px] rounded-[100px] m-5">
          <img
            className="w-full h-[300px] object-cover"
            src={teacherPlaceholder}
            alt="teacher image"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-bold text-[30px]">Мария Георгиева</h1>
          <h3 className="font-semibold text-[20px]">Учител по литература</h3>
          <h3 className="text=[20px]">Хасково</h3>
          <div className="w-full h-[500px]">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <CustomMap />
            </APIProvider>
          </div>
        </div>
        <div className="w-[40%] text-[20px] font-normal">
          <h2 className="font-bold text-[25px]">За Мария</h2>
          <p>
          Мария Георгиева е опитен и вдъхновяващ учител по българска литература, родена и
          израснала в Хасково. Завършва Българска филология в Софийския университет „Св. 
          Климент Охридски“, след което се връща в родния си град, за да предаде любовта си към 
          ловото на младите поколения.

          С над 15 години педагогически опит, тя се отличава с интерактивен и съвременен подход 
          в обучението. Вярва, че литературата не е просто учебен предмет, а прозорец към света, 
          който развива критическото мислене и емоционалната интелигентност на учениците.
          </p>
        </div>
      </div>
      <div className="flex flex-col">

      </div>
    </>
  );
}

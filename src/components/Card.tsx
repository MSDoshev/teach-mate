type CardProps ={
    image:string;
    subject:string;
    classes:string;
}
export default function Card({image, subject, classes}:CardProps){
    return(
        <div className={`py-6 px-10 text-center bg-slate-300 rounded-lg w-[18%] ${classes}`}>
            <img className="w-[80px] h-[80px]"src={image} alt="icon" />
            <h3 className="text-[18px] font-medium pt-2">{subject}</h3>
        </div>
    )

}
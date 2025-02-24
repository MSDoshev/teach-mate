type CardProps ={
    image:string;
}
export default function Card({image}:CardProps){
    return(
        <div className="p-11 bg-slate-300 rounded-lg w-[18%]">
            <img className="w-[80px] h-[80px]"src={image} alt="icon" />
        </div>
    )

}
type InputFieldProps={
placeholder:string;
classes:string;
}
export default function InputField({placeholder,classes}:InputFieldProps){
    return(
        
        <input className={`border-[1px] border-gray-200 rounded-md text-[20px] w-[450px] px-[5px] py-[10px] ${classes}`} placeholder={placeholder}>
        </input>
        
    )
}
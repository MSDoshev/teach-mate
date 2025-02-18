type InputFieldProps={
placeholder:string;
}
export default function InputField({placeholder}:InputFieldProps){
    return(
        
        <input className="border-[1px] border-gray-200 rounded-md text-[23px] w-[450px] px-[5px] py-[15px]" placeholder={placeholder}>
        </input>
        
    )
}
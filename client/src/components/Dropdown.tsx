type DropdownProps ={
    arr:string[];
    defaultValue:string;
    classes:string;
}
export default function Dropdown({arr,defaultValue,classes}:DropdownProps){
   
    return(

        <select className={`border-[1px] border-gray-200 rounded-md text-[20px] w-[450px] px-[5px] py-[10px] ${classes}`}>
            <option value=""  >{defaultValue}</option>
              {arr.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
    )
}
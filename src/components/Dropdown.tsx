type DropdownProps ={
    arr:string[];
    defaultValue:string;
}
export default function Dropdown({arr,defaultValue}:DropdownProps){
    if (!Array.isArray(arr)) {
        console.error("Dropdown received an invalid array:", arr);
        return null; // Prevents rendering if arr is not an array
      }
    return(

        <select className="border-[1px] border-gray-200 rounded-md text-[20px] w-[450px] px-[5px] py-[10px]">
            <option value=""  >{defaultValue}</option>
              {arr.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
    )
}
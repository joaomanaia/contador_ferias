import React from "react"
import DropdownItem from "./DropdownItem"

type DropdownMenuType = {
    onClick: (timeState: string, timeStateText: string) => void,
}

const DropdownMenu: React.FC<DropdownMenuType> = ({onClick}) => {
    return (
        <div className="absolute space-y-2 top-[37.5%] md:top-auto md:mt-4 w-64 p-3 rounded-2xl shadow-2xl bg-blue-600 dark:bg-gray-800 overflow-hidden">
            <DropdownItem title="Aulas acabarem" onClick={() => onClick("June 8, 2022", "fim das aulas!")}/>
            <DropdownItem title="exame de BG" onClick={() => onClick("June 21, 2022", "exame de BG!")}/>
            <DropdownItem title="exame de de FQ" onClick={() => onClick("June 27, 2022", "exame de FQ!")}/>
            <DropdownItem title="exame de MAT" onClick={() => onClick("June 30, 2022", "exame de MAT!")}/>
            <DropdownItem title="FERIAS" onClick={() => onClick("July 1, 2022", "FERIAS!")}/>
        </div>
    )
}

export default DropdownMenu
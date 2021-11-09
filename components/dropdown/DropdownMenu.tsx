import React from "react"
import DropdownItem from "./DropdownItem"

type DropdownMenuType = {
    onClick: (timeState: string, timeStateText: string) => void,
}

const DropdownMenu: React.FC<DropdownMenuType> = ({onClick}) => {
    return (
        <div className="absolute space-y-2 mt-4 w-64 p-3 rounded-2xl shadow-2xl bg-blue-600 dark:bg-gray-800 overflow-hidden">
            <DropdownItem title="Aulas acabarem" onClick={() => onClick("July 7, 2022", "as aulas acabarem!")}/>
            <DropdownItem title="Primeiro Periodo" onClick={() => onClick("December 17, 2021", "o primeiro periodo acabar!")}/>
            <DropdownItem title="Segundo Periodo" onClick={() => onClick("April 5, 2022", "o segundo periodo acabar!")}/>
        </div>
    )
}

export default DropdownMenu
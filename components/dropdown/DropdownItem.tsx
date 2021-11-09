type DropDownItemType = {
    onClick?: any,
    title: string,
}

const DropdownItem: React.FC<DropDownItemType> = ({onClick, title}) => {
    return (
        <div
            onClick={onClick}
            className="h-12 flex items-center rounded-2xl hover:bg-blue-500 dark:hover:bg-gray-700 cursor-pointer">
            <p className="text-white dark:text-white text-lg ml-4">{title}</p>
        </div>
    )
}

export default DropdownItem
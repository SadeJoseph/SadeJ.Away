import Link from "next/link";

interface routeProps {
    route: string;
    label: string;
    onClick?: () => void;
}

const Route = ({
    route,
    label,
    onClick, } : routeProps) => {
    return (
    <Link 
    href ={route}   
    onClick={onClick}
    
    >
        {label}
    </Link>
)};

export default Route;
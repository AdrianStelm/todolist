import { useState } from "react";

export default function useClose(){
    const [isOpen, setOpen] = useState(false); 

    const openWindow = () => {
        setOpen(true)
    }

    const closeWindow = () => {
        setOpen(false)
    }    
    return({openWindow,closeWindow,isOpen})
}
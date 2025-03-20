import { useState, useEffect } from "react"

export function useWindowLister(eventType:string, listener:EventListener) {
    
    useEffect(()=>{

        window.addEventListener(eventType, listener)

        return ()=>{
            window.removeEventListener(eventType, listener)
        }

    }, [])
}
import { useRef, useEffect } from 'react'
import { useWindowLister } from '@/hooks/useWindowListener'

export function VlogPlayer({vdoSrc, isPlaying}:{vdoSrc:string, isPlaying:boolean}) {

    const vdoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        // alert('width is ' + vdoRef.current?.videoWidth)
        if(isPlaying) {
            // alert('Play VDO')
            vdoRef.current?.play()
        } else {
            // alert('Pause VDO')
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    useWindowLister("resize", (e)=>{ alert('Window Width is ' + (e.target as Window).innerWidth) })
    
    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted/>
    )
}
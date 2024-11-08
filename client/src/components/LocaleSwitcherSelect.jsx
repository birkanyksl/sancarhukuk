"use client"

import { usePathname,useRouter  } from "@/navigation"
import { useParams } from "next/navigation"
import { useTransition } from "react"

const LocaleSwitcherSelect = ({
    children,
    defaultValue,
    label
}) => {

    const router = useRouter()
    const [isPending,startTransition] = useTransition()
    const pathname = usePathname()
    const params = useParams()

    const onSelectChange=(event)=>{
        const nextLocale = event.target.value
        startTransition(()=> {
            router.replace(
                
                {pathname,params},
                {locale:nextLocale}
            )
        })
    }

    return (
        <label
          className={`flex items-center ${isPending ? 'opacity-50' : ''}`} 
        >
          <select
            value={defaultValue}
            onChange={onSelectChange}
            className="border p-2 rounded"
            disabled={isPending} 
          >
            {children}
          </select>
          
        </label>
      )
  
}

export default LocaleSwitcherSelect
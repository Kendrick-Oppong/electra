"use client"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import ReactPlayer from "react-player/youtube"
import {Loader,SquarePlay} from "lucide-react"

const YoutubeVideoPlayer = ({url}:{url:string})=> {
    console.log(url)
return (<Dialog>
  <DialogTrigger> 
      <SquarePlay size={70} strokeWidth={1} />
  </DialogTrigger>
  <DialogContent className="max-w-3xl mx-auto bg-secondary">
    <ReactPlayer url={url} controls={true} style={{marginInline:"auto"}} fallback={<Loader className="animate-spin"/>}/>
  </DialogContent>
</Dialog>)

}

export default YoutubeVideoPlayer
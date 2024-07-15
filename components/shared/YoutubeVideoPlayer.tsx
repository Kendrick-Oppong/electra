"use client"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import ReactPlayer from "react-player/youtube"
import {Loader,SquarePlay} from "lucide-react"

const YoutubeVideoPlayer = ({url}:{url:string})=> {
return (
  <Dialog>
    <DialogTrigger>
      <SquarePlay
        size={60}
        strokeWidth={1}
        className="h-[50px] w-[50px] md:w-[60px] cursor-pointer"
      />
    </DialogTrigger>
    <DialogContent className="mx-auto max-w-3xl p-3 bg-accent">
      <ReactPlayer
        url={url}
        controls={true}
        style={{ marginInline: "auto", width: "100%!important", marginTop:"2rem" }}
        className="!w-full"
        fallback={<Loader className="animate-spin" />}
      />
    </DialogContent>
  </Dialog>
);

}

export default YoutubeVideoPlayer
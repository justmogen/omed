'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import Dropzone from 'react-dropzone'
import { Cloud, File } from "lucide-react"

const UploadDropzone = () => {
  const [isUploading, setIsUploading] = useState<boolean>(true)
  return <Dropzone multiple={false} onDrop={(acceptedFile) => {
    console.log(acceptedFile)

  }}>
    {({ getRootProps, getInputProps, acceptedFiles }) => (
      <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-300 rounded-lg">
        <div className="flex items-center justify-center h-full w-full">
          <label htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Cloud className="w-12 h-12 text-zinc-400" />
              <p className="mt-2 text-sm text-zinc-600">
                <span className="font-medium text-zinc-900">Click to upload</span>
                {' '}
                or drag and drop
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                PDF (up to 3MB)
              </p>
            </div>
            {acceptedFiles && acceptedFiles[0] ? (
              <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-zinc-200">
                <div className="px-3 py-2 h-full grid place-items-center">
                  <File className="w-6 h-6 text-blue-700" />
                </div>
                <div className="px-3 py-2 h-full text-sm truncate">
                  {acceptedFiles[0].name}
                </div>
              </div>
            ) : null}
            {isUploading ? (
              <div className="w-full mt-4 max-w-xs mx-auto"></div>
            ) : null}
          </label>
        </div>
      </div>
    )}
  </Dropzone>

}

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v)
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <UploadDropzone />
      </DialogContent>

    </Dialog>
  )
}

export default UploadButton
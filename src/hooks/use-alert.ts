import { useToast } from '@/components/ui/use-toast'

export const useAlert = () => {
  const { toast } = useToast()
  const notify = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
    })
  }
  const notifyError = (title: string, description: string) => {
    toast({
      title: title,
      description: description,
      variant: "destructive"
    })
  }
  return {notify, notifyError}
}